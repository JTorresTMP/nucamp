const locationsRouter = require('express').Router();

const locations = ['Tacoma', 'Marysville', 'Seattle', 'Spokane', 'Bellingham'];

locationsRouter
    .route('/')
    .get((req, res) => {
        res.send(locations);
    })
    .post((req, res) => {
        const { body } = req;
        locations.push(body.location);
        res.send(locations);
    });

module.exports = locationsRouter;
