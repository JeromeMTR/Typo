const {
  readAllScores,
  readTopThree,
  readMostRecent,
  insertScore
} = require('./model.js');
const Promise = require('bluebird');

const handleResponse = (res, code, data) => res.status(code).send(data);
const handleError = (res, err) => res.status(500).send(err);

module.exports = {
  getAll(req, res) {
    let resObj = {};
    let promiseArray = [readAllScores(), readTopThree(), readMostRecent()];
    Promise.all(promiseArray)
      .then(data => {
        resObj.allScores = data[0].rows;
        resObj.topThree = data[1].rows;
        resObj.recent = data[2].rows;
        return handleResponse(res, 200, resObj);
      })
      .catch(err => console.log(err));
  },
  postScores(req, res) {
    let date = new Date();
    req.body.date = date.toUTCString().slice(0, -7);
    insertScore(req.body)
      .then(result => handleResponse(res, 201, result.command))
      .catch(err => handleError(res, err));
  }
};
