/**
 * * Import Operator Sequelize
 */
const { Op } = require("sequelize");

/**
 * * Import Api Formatter for response NodeJs nicely
 */
const {
  success,
  error,
  successDelete,
  validation,
} = require("../helpers/ApiFormatter");

/**
 * * Import Model Patients
 */
const Patients = require("../models/Patients");

const { validationResult } = require("express-validator");

/**
 * * Make class PatientsController
 * * With function: index, show, update, destroy, searchPatientsName, searchPatientsStatus
 */
class PatientsController {
  /**
   * * Method index for get all data
   * */
  async index(req, res) {
    /*
     * * Get all data from table Patients
     */
    const patients = await Patients.findAll();

    // * Check if data is empty and response with status 200 and message data is empty
    if (!patients) {
      res.status(404).json(error(200, "Data is empty"));
      return;
    }

    // * If data is not empty, response with status 200 and data patients
    res.status(200).json(success(200, "Get All Resource", patients));
  }

  /**
   * * Method show for get detail patient
   * */
  async show(req, res) {
    /**
     * * Request Params id
     * * Destructing object id from req.params
     * */
    const { id } = req.params;

    // * Get data from table Patients by id
    const patient = await Patients.findOne({
      where: {
        id: id,
      },
    });

    // * Check if patient is empty
    if (!patient) {
      res.status(404).json(error(404, "Resource not found"));
      return;
    }

    // * If patient is not empty, response with status 200 and data patient
    res.status(200).json(success(200, "Get Detail Resouce", patient));
  }

  /**
   * * Method store for add new patient
   * */
  async store(req, res) {
    // * Adding validation result from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(validation(errors.array()));
      return;
    }

    // * Destructing object name, phone, address, status, in_date_at, out_date_at from req.body
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    /**
     * * Try Catch for create new patient
     * * If success, response with status 200 and data patient
     * * If error, response with status 500 and message Internal Server Error
     */
    try {
      const input = {
        name: name,
        phone: phone,
        address: address,
        status: status,
        in_date_at: in_date_at,
        out_date_at: out_date_at,
      };

      const patient = await Patients.create(input);

      res
        .status(200)
        .json(success(200, "Resource is added successfully", patient));
    } catch (error) {
      console.error(error);
      res.status(500).json(error(500, "Internal Server Error"));
    }
  }

  /**
   * * Method update for update data patient
   * */
  async update(req, res) {
    // * Adding validation result from express-validator
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json(validation(errors.array()));
      return;
    }

    // * Request Params id
    const { id } = req.params;

    // * Destructing object name, phone, address, status, in_date_at, out_date_at from req.body
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    /**
     * * Try Catch for update data patient
     * * If success, response with status 200 and data patient
     * * If error, response with status 500 and message Internal Server Error
     */
    try {
      // * Make object for input data student
      const input = {
        name: name,
        phone: phone,
        address: address,
        status: status,
        in_date_at: in_date_at,
        out_date_at: out_date_at,
      };

      // * Update data from table Patients by id
      await Patients.update(input, {
        where: {
          id: id,
        },
      });

      // * Get data from table Patients by id
      const patient = await Patients.findOne({
        where: {
          id: id,
        },
      });

      //  * Response with status success update, http code 201 and message
      res
        .status(201)
        .json(success(201, "Resource is update successfully", patient));
    } catch (error) {
      console.error(error);
      res.status(500).json(error(500, "Internal Server Error"));
    }
  }

  /**
   * * Method destroy for delete data patient
   * */
  async destroy(req, res) {
    /**
     * * Request Params id
     * * Destructing object id from req.params
     * */
    const { id } = req.params;

    // * Delete data from table Patients by id
    await Patients.destroy({
      where: {
        id: id,
      },
    });

    // * Response with status success delete, http code 200 and message
    res.status(200).json(successDelete(200, "Resource is delete successfully"));
  }

  /**
   * * Method searchPatientName for searching all patient with name
   * */
  async searchPatientName(req, res) {
    /**
     * * Request Params name
     * * Destructing object name from req.params
     * */
    const { name } = req.params;

    /**
     * * Get all data from table Patients with name
     * * Query SELECT * FROM Patients WHERE name LIKE '%name%'
     */
    const patients = await Patients.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    // * Check if patients is empty and response error
    if (!patients) {
      res.status(404).json(error(404, "Resource not found"));
      return;
    }

    // * If patients is not empty, response with status 200 and data patients
    res.status(200).json(success(200, "Get searched resouce", patients));
  }

  /**
   * * Method searchPatientStatus for searching all patient with status
   * */
  async searchPatientStatus(req, res) {
    /**
     * * Destructing object status from req.params
     * */
    const { status } = req.params;

    /**
     * * Get all data from table Patients with status
     * * Query SELECT * FROM Patients WHERE status LIKE '%status%'
     */
    const patients = await Patients.findAll({
      where: {
        status: {
          [Op.like]: `%${status}%`,
        },
      },
    });

    /**
     * * Check params status
     * * If status is positive, recovered, or dead, response with status 200 and data patients
     * * else status is not positive, recovered, or dead, response with status 404 and error message
     */
    switch (status) {
      case "positive":
        res.status(200).json(success(200, "Get positive resouce", patients));
        break;
      case "recovered":
        res.status(200).json(success(200, "Get recovered resouce", patients));
        break;
      case "dead":
        res.status(200).json(success(200, "Get dead resouce", patients));
        break;
      default:
        res.status(404).json(error(404, "Resource not found"));
        break;
    }
  }
}

module.exports = new PatientsController();
