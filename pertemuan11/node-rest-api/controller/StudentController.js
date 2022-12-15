const { students } = require("../data/students");

// membuat class StudentController
class StudentConstoller {
  index(req, res) {
    res.json({
      message: "Menampilkan semua data students",
    });
  }

  store(req, res) {
    res.json({
      message: "Menambahkan data student",
    });
  }

  update(req, res) {
    const { id } = req.params;
    res.json({
      message: "Mengubah data student",
    });
  }

  delete() {
    const { id } = req.params;
    res.json({
      message: "Menghapus data student",
    });
  }
}

const object = new StudentConstoller();

module.exports = object;
