const express = require('express');
const router = express.Router();
const logger = require('../logConfig');

logger.info('router module');

// Obtem todos os usuários
router.get('/', (req, res) => {
  logger.debug("GET user");
  req.connection.query('SELECT * FROM user', (err, result) => {
    if(err) {
      logger.error("Erro ao obter todos os usuários", err);
      return res.json({
        error: err,
        data: [],
        message: "Erro ao obter os usuários"
      });
    }

    logger.debug("Result: " + result);
    res.status(200).json({
      error: false,
      data: result,
      message: "Usuários obtidos com sucesso"
    });
  });
});

// Obtem um usuário
router.get('/:id', (req, res) => {
  logger.debug("endpoint - user/:id");
  req.connection.query('SELECT * FROM user', (err, result) => {
    if(err) {
      logger.error("Erro ao obter todos os usuários", err);
      return res.json({
        error: err,
        data: [],
        message: "Erro ao obter os usuários"
      });
    }

    logger.debug("Result: " + result);
    res.status(200).json({
      error: false,
      data: result,
      message: "Usuários obtidos com sucesso"
    });
  });
});

// Cria um usuário
router.post('/', (req, res) => {
  logger.debug("endpoint - user");
  res.send('');
});

// Atualiza um usuário
router.put('/:id', (req, res) => {
  logger.debug("endpoint - user/:id");
  res.send('');
});

// Exclui um usuário
router.delete('/:id', (req, res) => {
  logger.debug("endpoint - user/:id");
  res.send('');
});

module.exports = router;