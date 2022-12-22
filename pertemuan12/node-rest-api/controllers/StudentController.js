// const { students } = require("../data/students");
const Student = require("../models/Student");

// membuat class StudentController
class StudentController {
  async index(req, res) {
    const students = await Student.all();

    res.json({
      message: "Get all students",
      data: students,
    });
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.findId(id);

    res.json({
      message: `Get Student ${id}`,
      data: student,
    });
  }

  async store(req, res) {
    const { nama, nim, email, jurusan } = req.body;

    await Student.store({ nama, nim, email, jurusan });

    const students = await Student.all();

    res.json({
      message: `Add new student ${nama}`,
      data: students,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const { nama, nim, email, jurusan } = req.body;

    await Student.update({ nama, nim, email, jurusan, });

    const student = { id: id, ...req.body };

    res.json({
      message: `Update Student ${id} : ${nama}`,
      data: [student],
    });
  }

  async delete(req, res) {
    const { id } = req.params;

    await Student.delete(id);

    res.json({
      message: `Delete Student with ${id}`,
    });
  }
}

const object = new StudentController();

module.exports = object;
