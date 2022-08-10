const router = require('express').Router();
const {
  getAllData
} = require('./controller.js');

router.get('/', getAllData);

module.exports = router;