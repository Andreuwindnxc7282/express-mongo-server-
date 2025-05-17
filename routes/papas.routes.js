const express = require('express');
const router = express.Router();
const papasController = require('../controllers/papas.controller');

router.get('/', papasController.getAll);
router.post('/', papasController.create);
router.post('/:id/vote', papasController.vote);

module.exports = router;