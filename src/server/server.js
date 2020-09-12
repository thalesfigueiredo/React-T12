var expressClass = require("express");
var postagens = require("./postagens");
var comentarios = require("./comentarios");
var bodyParser = require("body-parser");

var express = new expressClass();

express.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);

  // Pass to next layer of middleware
  next();
});

express.use(bodyParser.json());
express.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Get by id
express.get("/Postagem/:id", function (request, response) {
  var id = request.params["id"];
  var promise = new Promise((resolve, reject) => {
    resolve(
      postagens.filter((postagem) => {
        return postagem.id == id;
      })[0]
    );
  });
  promise.then((postagem) => {
    response.json(postagem);
  });
});

// Get all
express.get("/Postagens", function (request, response) {
  response.json(postagens);
});

// Create
express.post("/Postagem", function (request, response) {
  postagens.push(request.body);
  response.json();
});

// Get all
express.get("/Comentarios", function (request, response) {
    response.json(comentarios);
  });
  
  // Create
  express.post("/Comentario", function (request, response) {
    comentarios.push(request.body);
    response.json();
  });

express.listen(8888);
