"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Patients", [
      {
        name: "Budi Santoso",
        phone: "08717641212",
        address: "Karawang, Indonesia",
        status: "postitive",
        in_date_at: "2023-01-12",
        out_date_at: null,
      },
      {
        name: "Joko Susilo",
        phone: "08717641212",
        address: "Bogor, Indonesia",
        status: "negative",
        in_date_at: "2023-01-12",
        out_date_at: "2023-02-13",
      },
      {
        name: "Susan Sameeh",
        phone: "08717641212",
        address: "Bogor, Indonesia",
        status: "recovered",
        in_date_at: "2023-01-12",
        out_date_at: null,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Patients", null, {});
  },
};
