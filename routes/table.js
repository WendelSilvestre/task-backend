var express = require('express');
var db = require('../db.js'); 
var router = express.Router();

router.get('/', function(req, res)) {
  res.sender('index');
});


router.get('/listar', function(req, res)) {
  db.query('SELECT * FROM usuarios ORDER BY nome', [],function(erro, resultado){
  if(erro){
    res.status(200).send(erro)
  }
  res.sender('lista', {lista: resultado})
  });
});
