const mysql = require("mysql");
const config = require("../config/config.json");
const db = mysql.createConnection(config.mysql);
db.connect((err) => {
  if (err) {
    console.log("Can not connectπ€·ββοΈπ€·ββοΈπ€·ββοΈ: " + err);
  } else console.log("Connectedπ¨π»βπ€βπ¨πΌπ¨π»βπ€βπ¨πΌπ¨π»βπ€βπ¨πΌ");
});

module.exports = {
  insert:function(table,entity){
    return new Promise(function (resolve, reject) {
      const sql = `INSERT INTO ${table} SET ?`;
      db.query(sql,entity,function (err, result) {
        if (err) return reject(err);
        resolve(result);
      });
    });
 
  },
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
  getAllExcept:function(sql,condition){
    return new Promise(function (resolve, reject) {
        db.query(sql,condition, function (err, result) {
          if (err) return reject(err);
          resolve(result);
        });
      });
  },
  search:function(sql){
    return new Promise(function (resolve, reject) {
        db.query(sql, function (err, result) {
          if (err) return reject(err);
          resolve(result);
        });
      });
  },
  getLatestID:function(sql){
    return new Promise(function (resolve, reject) {
      db.query(sql, function (err, result) {
        if (err) return reject(err);
        resolve(result);
      });
    });
  }
}