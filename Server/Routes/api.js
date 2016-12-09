const express = require('express');
const apiMethods = require('../../Methods/api/apiMethods');
const router = express.Router();

router.post('/',
  apiMethods.ticTacToe
);

router.post('/winner',
  apiMethods.winner
);

router.post('/move',
  apiMethods.nextMove
);

module.exports = router;