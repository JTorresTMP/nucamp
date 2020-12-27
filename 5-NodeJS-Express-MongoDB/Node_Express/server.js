const express = require('express');
const app = express();
const morgan = require('morgan');
const campsiteRouter = require('./routes/campsites');
const promotionsRouter = require('./routes/promotions');
const partnersRouter = require('./routes/partners');
const port = 3210;

app.use(morgan('tiny'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use('/campsites', campsiteRouter);
app.use('/promotions', promotionsRouter);
app.use('/partners', partnersRouter);

app.use((req, res) => {
    console.log(req.headers);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, () => {
    console.log(`Sever is running at http://localhost:${port}`);
});
