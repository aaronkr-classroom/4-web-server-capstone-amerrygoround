"use strict";

const port = 3000,
    http = require('http'),
    httpStatus = require('http-status-codes'),
    router = require('./router'),
    utils = require('./utills');
//Listing 7.8 (p. 127-128) 
//GET 라우트
router.get("/", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/index.html", res);
});
router.get("/courses", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/courses.html", res);
});
router.get("/contact", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/contact.html", res);
});

//POST 라우트
router.get("/contact", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("views/thanks.html", res);
});

//에셋 라우트
//CSS 에셋 라우트
router.get("/bootstrap.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/bootstrap.css", res);
});
router.get("/style.css", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.css);
    utils.getFile("public/css/style.css", res);
});

//JS 에셋 라우트
//IMG 에셋 라우트
router.get("/people.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/img/people.jpg", res);
});

router.get("/product.jpg", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/img/product.jpg", res);
});

router.get("/graph.png", (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.html);
    utils.getFile("public/img/graph.png", res);
});


http.createServer(router.handle).listen(port);
console.log('Server at : http://localhost:${port}');