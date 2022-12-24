const db = require("../config/database");

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      const sqlQuery = "SELECT * FROM students";

      db.query(sqlQuery, (err, results) => {
        resolve(results);
      });
    });
  }

  static findId(id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM students WHERE id = ${id}`;

      db.query(sqlQuery, (err, results) => {
        resolve(results);
      });
    });
  }

  static store({nama, nim, jurusan, email, createdAt, updatedAt}) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `INSERT INTO students (nama, nim, email, jurusan, created_at, updated_at) VALUES ('${nama}', '${nim}', '${email}', '${jurusan}', '${createdAt}', '${updatedAt}')`;
      
      db.query(sqlQuery, (err, results) => {
        resolve(results);
      });
    });
  }

  static update(data) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `UPDATE students SET nama = '${data.nama}', nim = '${data.nim}', email = '${data.email}', jurusan = '${data.jurusan}' WHERE id = ${data.id}`;

      db.query(sqlQuery, (err, results) => {
        resolve(results);
      });
    });
  }

  static delete(id) {
    return new Promise((resolve, reject) => {
      const sqlQuery = `DELETE FROM students WHERE id = ${id}`;

      db.query(sqlQuery, (err, results) => {
        resolve(results);
      });
    });
  }
}

module.exports = Student;
