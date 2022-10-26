var express = require('express');
var db = require('../db.js'); 
var router = express.Router();

router.get('/', function(req, res) {
  res.sender('../view/index');
});


router.get('/listar', function(req, res) {
  db.query('SELECT * FROM usuarios ORDER BY nome', [],function(erro, resultado){
  if(erro){
    res.status(200).send(erro)
  }
  res.sender('../view/lista', {lista: resultado})
  });
});

router.get('/add', function(req, res) {
  res.sender('form');
});

router.post('/add', function(req, res) {
  db.query('INSERT INTO usuarios(nome) VALUES(?)', 
    [req.body.nome],function(erro){
    if(erro){
      res.status(200).send('Erro: ' + error)
    }
    res.redirect('/listar')
  });
});