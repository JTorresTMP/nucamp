const express = require('express');
const port = 3003;
const secretsRouter = require('./routes/secretsRouter');
const app = express();

const authorization = (req, res, next) => {
    const header = req.headers.authorization;
    const createError = () => {
        const err = new Error('You are not authorized to view this resource');
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    };

    if (!header) createError();

    const credentials = Buffer.from(header.split(' ')[1], 'base64')
        .toString()
        .split(':');
    const [user, password] = credentials;
    if (user.toLowerCase() === 'jbond' && password === 'AstonMartin007') {
        return next(); //User is authorized
    } else {
        createError();
    }
};

app.get('/', (req, res) => {
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
    <html>
        <body>
            hello world
        </body>
    </html>
    `);
});

app.use(authorization);
app.use('/secrets', secretsRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
