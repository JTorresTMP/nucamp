var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');
const authenticate = require('./authenticate');
const config = require('./config');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
const campsiteRouter = require('./routes/campsites');
const promotionRouter = require('./routes/promotions');
const partnerRouter = require('./routes/partners');
const uploadRouter = require('./routes/uploads');
const favoriteRouter = require('./routes/favorites');

const mongoose = require('mongoose');

const url = config.mongoUrl;
console.log(typeof url);
const connect = mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

connect.then(
    () => console.log('Connected correctly to server'),
    (err) => console.log(err)
);

app.all('*', (req, res, next) => {
    if (req.secure) {
        return next();
    } else {
        console.log(
            `Redirecting to: https://${req.hostname}:${app.get('secPort')}${
                req.url
            }`
        );
        res.redirect(
            301,
            `https://${req.hostname}:${app.get('secPort')}${req.url}`
        );
    }
});

app.use(express.json());
app.use(passport.initialize());
// app.use(passport.session());
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/imageUpload', uploadRouter);

// function auth(req, res, next) {
//     console.log(req.user);

//     if (!req.user) {
//         const err = new Error('You are not authenticated!');
//         err.status = 401;
//         return next(err);
//     } else {
//         return next();
//     }
// }

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

//Auth
// app.use(auth);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionRouter);
app.use('/partners', partnerRouter);
app.use('/favorites', favoriteRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
