const express = require('express');
const favoriteRouter = require('express').Router();
const cors = require('./cors');
const authenticate = require('../authenticate');
const Favorite = require('../models/favorite');

favoriteRouter
    .route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, authenticate.verifyUser, (req, res, next) => {
        Favorite.find({ user: req.user._id })
            .populate('user')
            .populate('campsite')
            .then((fav) => {
                res.type('application/json').status(200).json(fav);
            })
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
            .populate('campsite')
            .then((fav) => {
                if (fav) {
                    req.body.forEach((camp) => {
                        if (!fav.campsites.includes(camp._id)) {
                            fav.campsites.push(camp);
                        }
                    });
                    fav.save()
                        .then((response) => {
                            console.log('Line 31');
                            res.type('application/json')
                                .status(200)
                                .json(response);
                        })
                        .catch((err) => next(err));
                } else {
                    const temp = {
                        user: req.user._id,
                        campsites: []
                    };
                    Favorite.create(temp)
                        .then((doc) => {
                            req.body.forEach((camp) => {
                                if (!doc.campsites.includes(camp)) {
                                    doc.campsites.push({ _id: camp });
                                }
                            });
                            doc.save()
                                .then((response) => {
                                    console.log('hmmm');
                                    res.type('application/json')
                                        .status(200)
                                        .json(response);
                                })
                                .catch((err) => next(err));
                        })
                        .catch((err) => next(err));
                }
            })
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.status(403).json({ message: 'This operation is not supported' });
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id }).then((document) => {
            if (document) {
                res.setHeader('Content-Type', 'application/json');
                res.statusCode = 200;
                res.json(document);
            } else {
                res.setHeader('Content-Type', 'text/plain');
                res.statusCode = 404;
                res.end('You do not have any favorites to delete');
            }
        });
    });

favoriteRouter
    .route('/:campsiteId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, authenticate.verifyUser, (req, res) => {
        res.status(403).json({ message: 'This operation is not supported' });
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
            .populate('campsite')
            .then((document) => {
                if (document) {
                    if (document.campsites.includes(req.body._id)) {
                        res.send(
                            'This campsite is already in the list of favorites!'
                        );
                    } else {
                        document.campsites.push(req.body._id);
                        document.save().then((doc) => {
                            res.type('application/json').status(200).json(doc);
                        });
                    }
                } else {
                    const doc = {
                        user: req.user._id,
                        campsites: req.body //I think this is okay since only one id is passed in
                    };
                    Favorite.create(doc)
                        .then((document) => {
                            res.type('application/json')
                                .status(200)
                                .json(document);
                        })
                        .catch((err) => next(err));
                }
            })
            .catch((err) => next(err));
    })
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.status(403).json({ message: 'This operation is not supported' });
    })
    .delete(cors.corsWithOptions, authenticate.verifyUser, (req, res, next) => {
        Favorite.findOne({ user: req.user._id })
            .populate('campsites')
            .then((document) => {
                if (document.campsites.includes(req.body._id)) {
                    const newList = document.campsites.filter(
                        (camp) => camp._id !== req.body._id
                    );
                    document.campsites = newList;
                    document.save().then((doc) => {
                        res.type('application/json').status(200).json(doc);
                    });
                } else {
                    res.setHeader('Content-Type', 'text/plain');
                    res.end('You do not have any favorites to delete');
                }
            })
            .catch((err) => next(err));
    });

module.exports = favoriteRouter;
