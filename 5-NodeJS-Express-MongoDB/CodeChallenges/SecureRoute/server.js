const express = require('express');
const port = 3003;
const secretsRouter = require('./routes/secretsRouter');
const app = express();

app.use(cookieParser('12345-67890-09876-54321'));

function auth(req, res, next) {
    if (!req.signedCookies.user) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            const err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }

        const auth = Buffer.from(authHeader.split(' ')[1], 'base64')
            .toString()
            .split(':');
        const user = auth[0];
        const pass = auth[1];
        if (user === 'admin' && pass === 'password') {
            res.cookie('user', 'admin', { signed: true });
            return next(); // authorized
        } else {
            const err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }
    } else {
        if (req.signedCookies.user === 'admin') {
            return next();
        } else {
            const err = new Error('You are not authenticated!');
            err.status = 401;
            return next(err);
        }
    }
}

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
