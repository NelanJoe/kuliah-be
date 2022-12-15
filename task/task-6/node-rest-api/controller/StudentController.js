const { students } = require("../data/students");

// membuat class StudentController
class StudentConstoller {
  index(req, res) {
    for (const student of students) {
      console.log(student);
    }

    const data = {
      message: "Menampilkan semua data students",
      data: [],
    };

    res.json(data);
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
