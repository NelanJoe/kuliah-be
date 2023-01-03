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

/**
 * Membuat class StudentController
 * */
class StudentController {
  /**
   * * Membuat function index
   */
  async index(req, res) {
    const students = await Student.all();

    /**
     * * Jika data ditemukan maka akan mengembalikan response dengan format success
     * * Jika tidak maka akan mengembalikan response dengan format error
     */
    if (students) {
      return res.status(200).json(success("Get all students", students, 200));
    }

    return res.status(404).json(error("Not found data", 404));
  }

  /**
   * * Membuat function show
   */
  async show(req, res) {
    const { id } = req.params;
    const student = await Student.find(id);

    return res
      .status(200)
      .json(success(`Get student with id ${id}`, student, 200));
  }

  /**
   * * Membuat function store
   */
  async store(req, res) {
    // Destructuring Object req.body
    const { nama, email, nim, jurusan } = req.body;

    if (!nama || !email || !nim || !jurusan) {
      return res.status(400).json(error("Bad Request", 400));
    }

    const student = await Student.create({ ...req.body });

    return res.status(202).json(success("Create new student", student, 202));
  }

  /**
   * * Membuat function update
   */
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

  /**
   * * Membuat function delete
   */
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

// Export class StudentController
module.exports = new StudentController();
