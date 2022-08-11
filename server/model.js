const query = require('../database');

module.exports = {
  readAllScores() {
    const text = 'SELECT * FROM scores ORDER BY scores.wpm DESC';
    return query(text);
  },
  insertScore({wpm, accuracy, date}) {
    const text = 'INSERT INTO scores(wpm, accuracy, date_time) VALUES($1 $2 $3)';
    const values = [wpm, accuracy, date];
    return query(text, values);
  }
};