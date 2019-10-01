const express = require('express');

routes = express.Router();

routes.post('users/', (req, res) => {
  return res.json(req.body);
});

module.exports = routes;