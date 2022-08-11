const {
  readAllScores,
  insertScore
} = require('./model.js');

const handleResponse = (res, code, data) => res.status(code).send(data);
const handleError = (res, err) => res.status(500).send(err);

module.exports = {
  getAllScores(req, res) {
    readAllScores()
      .then(({ rows }) => handleResponse(res, 200, rows))
      .catch(err => handleResponse(res, err));
  },
  postScores(req, res) {
    console.log(req.body);
    let date = new Date();
    const userTimezoneOffset = date.getTimezoneOffset() * 60000;
    const d = new Date(date.getTime() - userTimezoneOffset);
    req.body.date = d;
    console.log(req.body);
    insertScore(req.body)
      .then(result => handleResponse(res, 201, result.command))
      .catch(err => handleError(res, err));
  }
};