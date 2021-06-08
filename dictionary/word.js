const db = require("./db_connection");
var mysql = require("mysql");

const getWord = (word) => {
  let sanitezedWord = mysql.escape(word); // to avoid sql injection
  var sql = `SELECT * FROM entries WHERE word = ${sanitezedWord}`;
  return new Promise((resolve, reject) => {
    db.query(sql, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};

module.exports = getWord;
