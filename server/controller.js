const {
  readAllScores,
  insertScore
} = require('./model.js');

const handleResponse = (res, code, data) => res.status(code).send(data);
const handleError = (res, err) => res.status(500).send(err);

module.exports = {
  getAllScores(req, res) {
    readAllScores()
      .then(result => handleResponse(res, 200, result.rows[0]))
      .catch(err => handleResponse(res, err));
  },
  postScores(req, res) {
    console.log(req);
    insertScore(req.body)
      .then(result => handleResponse(res, 201, result))
      .catch(err => handleError(res, err));
  }
};