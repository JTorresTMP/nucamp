const express = require('express');
const port = 3003;
const secretsRouter = require('./routes/secretsRouter');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const app = express();

// app.use(cookieParser('12345-67890-09876-54321'));

app.use(session({
    name: 'session-id',
    secret: '12345-67890-09876-54321',
    saveUninitalized: false,
    resave: false,
    store = new FileStore()
}))

function auth(req, res, next) {
    console.log(req.session);

    if (!req.session.user) {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            const err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }

        const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        const user = auth[0];
        const pass = auth[1];
        if (user === 'admin' && pass === 'password') {
            req.session.user = 'admin';
            return next(); // user is authorized
        } else {
            const err = new Error('You are not authenticated!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }
    } else {
        if (req.session.user === 'admin') {
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
