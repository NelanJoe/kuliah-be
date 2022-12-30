// const { students } = require("../data/students");
const Student = require("../models/Student");

// membuat class StudentController
class StudentController {
  async index(req, res) {
    const students = await Student.all();

    res.status(200).json({
      code: 200,
      message: "Get all students",
      data: students,
    });
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    res.status(200).json({
      code: 200,
      message: `Get Student ${id}`,
      data: student,
    });
  }

  async store(req, res) {
    const created_at = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
    const student = await Student.create({...req.body});

    res.status(202).json({
      code: 202,
      message: `Add new student ${req.body.nama}`,
      data: student,
    });
  }

  async update(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      const studentUpdated = await Student.update(id, req.body);
      res.status(202).json({
        message: `Update Student ${id} : ${req.body.nama}`,
        data: studentUpdated,
      });
    } else {
      res.status(404).json({
        message: `Not found data with id ${id}`,
      });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const student = Student.find(id);

    if (student) {
      await Student.delete(id);
      res.json({
        message: `Delete Student with ${id}`,
      });
    } else {
      res.json({
        message: `Not found data with id ${id}`,
      });
    }
  }
}

const object = new StudentController();

module.exports = object;
