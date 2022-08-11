const router = require('express').Router();
const { getAllScores, postScores } = require('./controller.js');

router.get('/', getAllScores);
router.post('/', postScores);

module.exports = router;
