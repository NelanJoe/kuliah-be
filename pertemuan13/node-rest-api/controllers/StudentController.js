/**
 * * Import Api Formatter
 * */ 
const {
  success,
  error,
  successDelete,
  errorDelete,
} = require("../helpers/ApiFormatter");

/**
 * Import Student Model
 * */ 
const Student = require("../models/Student");

// membuat class StudentController
class StudentController {
  async index(req, res) {
    const students = await Student.all();

    res.status(200).json(success("Get all students", students, 200));
  }

  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    res.status(200).json(success(`Get student with id ${id}`, student, 200));
  }

  async store(req, res) {
    const student = await Student.create({ ...req.body });

    res.status(202).json(success("Create new student", student, 202));
  }

  async update(req, res) {
    const { id } = req.params;

    const student = await Student.find(id);

    if (student) {
      const studentUpdated = await Student.update(id, req.body);
      res
        .status(202)
        .json(success(`Update student with id ${id}`, studentUpdated, 202));
    } else {
      res.status(404).json(error(`Not found data with id ${id}`, 404));
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    const student = Student.find(id);

    if (student) {
      await Student.delete(id);
      res.json(successDelete(`Delete student with id ${id}`, 202));
    } else {
      res.json(errorDelete(`Not found data with id ${id}`, 404));
    }
  }
}

const object = new StudentController();

module.exports = object;
