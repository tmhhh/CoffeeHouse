const mysql = require("mysql");
const config = require("../config/config.json");
const db = mysql.createConnection(config.mysql);
db.connect((err) => {
  if (err) {
    console.log("Can not connect🤷‍♂️🤷‍♂️🤷‍♂️: " + err);
  } else console.log("Connected👨🏻‍🤝‍👨🏼👨🏻‍🤝‍👨🏼👨🏻‍🤝‍👨🏼");
});

module.exports = {
  getAll: function (table) {
    return new Promise(function (resolve, reject) {
      const sql = `SELECT * FROM ${table}`;
      db.query(sql, function (err, result) {
        if (err) return reject(err);
        resolve(result);
      });
    });
  },
  getByID:function(table,condition){
    return new Promise(function (resolve, reject) {
        const sql = `SELECT * FROM ${table} where ?`;
        db.query(sql,condition, function (err, result) {
          if (err) return reject(err);
          resolve(result);
        });
      });
  },
  getAllExcept:function(sql,table,condition){
    return new Promise(function (resolve, reject) {
        db.query(sql,condition, function (err, result) {
          if (err) return reject(err);
          resolve(result);
        });
      });
  },
}