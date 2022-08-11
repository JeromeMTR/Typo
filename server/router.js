const router = require('express').Router();
const { getAllData, postScores } = require('./controller.js');

router.get('/', getAllData);
router.post('/', postScores);

module.exports = router;