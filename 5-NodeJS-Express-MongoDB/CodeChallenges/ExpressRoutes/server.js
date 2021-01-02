const express = require('express');
const locationsRouter = require('./routes/locations');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    console.log(req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(`
    <html>
    <body>
      <form action='/locations' method='post'>
      <label for='location'>Add a location: 
      <input type='text' name='location' />
      </label>
      <button type='submit'>Submit</button>
      </form>
    </body>
    </html>
  `);
});

app.use('/locations', locationsRouter);

const listener = app.listen(4222, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
