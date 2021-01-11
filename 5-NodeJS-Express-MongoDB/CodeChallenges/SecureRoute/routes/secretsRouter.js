const secretsRouter = require('express').Router();

secretsRouter.route('/').get((req, res, next) => {
    res.status(200).send(`
        <html>
            <body>
                this is a secret message
            </body>
        </html>
    `);
});

module.exports = secretsRouter;
