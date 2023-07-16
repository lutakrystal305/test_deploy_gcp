const express = require('express');
const baseController = require('@controller/base.controller');

const router = express.Router();

router.get('/', baseController.getAll);

router.get('/:id', baseController.getDetail);

module.exports = router;
