const promotionsRouter = require('express').Router();
const Promotion = require('../models/promotion');

promotionsRouter
    .route('/')
    .get((req, res, next) => {
        Promotion.find()
            .then((promotions) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotions);
            })
            .catch((err) => next(err));
    })
    .post((req, res, next) => {
        Promotion.create(req.body)
            .then((promotion) => {
                console.log('Promotion has been created: ', promotion);
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(promotion);
            })
            .catch((err) => next(err));
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res, next) => {
        Promotion.deleteMany()
            .then((response) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(response);
            })
            .catch((err) => next(err));
    });

promotionsRouter
    .route('/:promotionId')
    .get((req, res, next) => {
        Promotion.findById(req.params.promotionId)
            .then((promotion) => {
                res.setHeader('Content-Type', 'application/json');
                res.status(200).json(promotion);
            })
            .catch((err) => next(err));
    })
    .post((req, res) => {
        res.status(403).end(
            `POST operation not supported on /promotions/${req.params.promotionId}`
        );
    })
    .put((req, res, next) => {
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
    })
    .delete(async (req, res, next) => {
        try {
            const response = await Promotion.findByIdAndDelete(
                req.params.promotionId
            );
            res.status(200).json(response);
        } catch (err) {
            next(err);
        }
    });

module.exports = promotionsRouter;
