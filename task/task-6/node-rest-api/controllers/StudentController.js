const { students } = require("../data/students");

// membuat class StudentController
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkan semua data students",
      data: students,
    };

    res.json(data);
  }

  store(req, res) {
    const { name } = req.body;

    const newStudents = [...students, name];

    const data = {
      message: `Menambahkan data student: ${name}`,
      data: newStudents,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    students[id] = name;

    const data = {
      message: `Mengedit student id ${id}, nama ${name}`,
      data: students,
    };

    res.json(data);
  }

  delete(req, res) {
    const { id } = req.params;

    students.splice(id, 1);

    const data = {
      message: `Menghapus student id ${id}`,
      data: students,
    };
    res.json(data);
  }
}

// Membuat object StudentController
const object = new StudentController();

module.exports = object;
