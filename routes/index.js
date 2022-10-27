const express = require('express');
const { append } = require('express/lib/response');
const db = require('../db.js'); 
const route = express.Router();


route.get('/', function(req, res) {
  res.render('index');
});


router.get('/usuarios', function(req, res) {
  db.query('SELECT * FROM usuarios ORDER BY nome', [],function(erro, resultado){
  if(erro){
    res.status(200).send(erro)
  }
  res.sender('lista', {lista: resultado})
  });
});

router.get('/listar/endereco', function(req, res) {
  db.query('SELECT * FROM endereco_usuario WHERE id_usuario= ', [],function(erro, resultado){
  if(erro){
    res.status(200).send(erro)
  }
  res.sender('listaEndereco', {lista: resultado})
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
    res.redirect('/listar');
  });
});
