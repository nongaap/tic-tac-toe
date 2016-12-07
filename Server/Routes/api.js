const express = require('express');
const apiMethods = require('../../Methods/api/apiMethods');
const router = express.Router();

router.post('/',
  apiMethods.ticTacToe
);

module.exports = router;