const promotionsRouter = require('express').Router();
const Promotion = require('../models/promotion');
const authenticate = require('../authenticate');
const cors = require('./cors');

promotionsRouter
    .route('/')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Promotion.find()
            .then((promotions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotions);
            })
            .catch((err) => next(err));
    })
    .post(
        cors.corsWithOptions,
        authenticate.verifyUser,
        authenticate.verifyAdmin,
        (req, res, next) => {
            Promotion.create(req.body)
                .then((promotion) => {
                    console.log('Promotion has been created: ', promotion);
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(promotion);
                })
                .catch((err) => next(err));
        }
    )
    .put(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete(
        cors.corsWithOptions,
        authenticate.verifyUser,
        authenticate.verifyAdmin,
        (req, res, next) => {
            Promotion.deleteMany()
                .then((response) => {
                    res.statusCode = 200;
                    res.setHeader('Content-Type', 'application/json');
                    res.json(response);
                })
                .catch((err) => next(err));
        }
    );

promotionsRouter
    .route('/:promotionId')
    .options(cors.corsWithOptions, (req, res) => res.sendStatus(200))
    .get(cors.cors, (req, res, next) => {
        Promotion.findById(req.params.promotionId)
            .then((promotion) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(promotion);
            })
            .catch((err) => next(err));
    })
    .post(cors.corsWithOptions, authenticate.verifyUser, (req, res) => {
        res.status(403).end(
            `POST operation not supported on /promotions/${req.params.promotionId}`
        );
    })
    .put(
        cors.corsWithOptions,
        authenticate.verifyUser,
        authenticate.verifyAdmin,
        (req, res, next) => {
            Promotion.findByIdAndUpdate(
                req.params.promotionId,
                {
                    $set: req.body
                },
                { new: true }
            )
                .then((promotion) => {
                    res.setHeader('Content-Type', 'application/json');
                    res.status(200).json(promotion);
                })
                .catch((err) => next(err));
        }
    )
    .delete(
        cors.corsWithOptions,
        authenticate.verifyUser,
        authenticate.verifyAdmin,
        async (req, res, next) => {
            try {
                const response = await Promotion.findByIdAndDelete(
                    req.params.promotionId
                );
                res.status(200).json(response);
            } catch (err) {
                next(err);
            }
        }
    );

module.exports = promotionsRouter;
