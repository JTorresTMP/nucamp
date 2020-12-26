const http = require('http');

function willItBlend(callback) {
    const itBlends = Math.floor(Math.random() * 10) % 3 === 0;

    if (itBlends) {
        return callback(null, 'Good news! It Blends!');
    } else {
        return callback(new Error("Oh No! It didn't Blend!"));
    }
}

// const handler = (err, content) => {
//     if (err) {
//         return err.message;
//     } else {
//         return content;
//     }
// };

http.createServer(function (req, res) {
    // res.write(willItBlend(handler)); can use this if you want to separate fn
    res.write(willItBlend((err, content) => (err ? err.message : content)));
    //Or use the above line if you want to use inline anon function
    res.end();
}).listen(8080);
