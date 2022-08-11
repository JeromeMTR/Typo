const router = require('express').Router();
const {
  getAll,
  postScores
} = require('./controller.js');

router.get('/', getAll);
router.post('/', postScores);

module.exports = router;
