const http = require('http');
const generateMessage = require('./generate');

const locations = ['Bellingham', 'Marysville', 'Seattle', 'Tacoma', 'Spokane'];

http.createServer((req, res) => {
    res.write(generateMessage(locations));
    res.end();
}).listen(8080);
