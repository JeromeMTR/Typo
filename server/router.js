const router = require('express').Router();
const {
  getAllScores,
  getTopThree,
  getMostRecent,
  postScores
} = require('./controller.js');

router.get('/', getAllScores);
router.get('/topThree', getTopThree);
router.get('/recent', getMostRecent);
router.post('/', postScores);

module.exports = router;
