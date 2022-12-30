const db = require("../config/database");

class Student {
  static all() {
    return new Promise((resolve, reject) => {
      /**
       * * Mendapatkan semua data dari database
       * */
      const sqlQuery = "SELECT * FROM students";

      db.query(sqlQuery, (err, results) => {
        resolve(results);
      });
    });
  }

  static find(id) {
    return new Promise((resolve, reject) => {
      /**
       * * Mendapatkan data dari database dengan id
       * */
      const sqlQuery = `SELECT * FROM students WHERE id = ${id}`;

      db.query(sqlQuery, (err, results) => {
        resolve(results);
      });
    });
  }

  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      /**
       * * Menambahkan data ke database
       * */
      const sqlQuery = `INSERT INTO students SET ?`;

      db.query(sqlQuery, data, (err, results) => {
        resolve(results.insertId);
      });
    });

    /**
     * * Mendapatkan data yang baru ditambahkan dengan query sql Where Id
     * */
    return new Promise((resolve, reject) => {
      const sqlQuery = `SELECT * FROM students WHERE id = ?`;
      db.query(sqlQuery, id, (err, results) => {
        resolve(results);
      });
    });
  }

  static update(id, data) {
    new Promise((resolve, reject) => {
      const sqlQuery = `UPDATE students SET ? WHERE id = ${id}`;

      db.query(sqlQuery, data, (err, results) => {
        resolve(results);
      });
    });

    const student = this.find(id);
    return student;
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
