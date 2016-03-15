"use strict";

const http = require("http");

let count = 0;

let resultPage = function(url) {
    if (url == "/index.html") {
        count++;
        return ("Привіт світ!");
    } else if (url == "/count.html") {
        return ("count= " + count);
    } else return ("Error 404. Page not found!");
}

let server = http.createServer(function (req, res, next) {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.end(resultPage(req.url));
});

server.listen(3000);
