const { Op } = require("sequelize");
const Patients = require("../models/Patients");

class PatientsController {
  async index(req, res) {
    const patients = await Patients.findAll();

    res.status(200).json({
      code: 200,
      message: "Get All Resource",
      data: patients,
    });
  }

  async show(req, res) {
    const { id } = req.params;

    const patient = await Patients.findOne({
      where: {
        id: id,
      },
    });

    res.status(200).json({
      code: 200,
      message: "Get Detail Resource",
      data: patient,
    });
  }

  async store(req, res) {
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    const input = {
      name: name,
      phone: phone,
      address: address,
      status: status,
      in_date_at: in_date_at,
      out_date_at: out_date_at,
    };

    const patient = await Patients.create(input);

    res.status(200).json({
      code: 200,
      message: "Resource is added successfully",
      data: patient,
    });
  }

  async update(req, res) {
    const { id } = req.params;
    const { name, phone, address, status, in_date_at, out_date_at } = req.body;

    const input = {
      name: name,
      phone: phone,
      address: address,
      status: status,
      in_date_at: in_date_at,
      out_date_at: out_date_at,
    };

    await Patients.update(input, {
      where: {
        id: id,
      },
    });

    const patient = await Patients.findOne({
      where: {
        id: id,
      },
    });

    res.status(201).json({
      code: 201,
      message: "Resource is update successfully",
      data: patient,
    });
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Patients.destroy({
      where: {
        id: id,
      },
    });

    res.status(201).json({
      code: 201,
      message: "Resource is delete successfully",
    });
  }

  async searchPatientName(req, res) {
    const { name } = req.params;

    const patients = await Patients.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });

    res.status(201).json({
      code: 201,
      message: `Get patient`,
      data: patients,
    });
  }

  async searchPatientStatus(req, res) {
    const patients = await Patients.findAll({
      where: {
        status: {
          [Op.like]: `%${req.params.status}%`,
        },
      },
    });

    res.status(201).json({
      code: 201,
      message: `Get patient`,
      data: patients,
    });
  }
}

module.exports = new PatientsController();
