const query = require('../databse');

module.exports = {
  readAllScores() {
    const text = 'SELECT * FROM scores ORDER BY scores.wpm DESC';
    return query(text);
  },
  insertScore() {
    const text = 'INSERT INTO scores(wpm, accuracy, date_time) VALUES($1 $2 $3)';
    const values = [];
    return query(text, values);
  }
};