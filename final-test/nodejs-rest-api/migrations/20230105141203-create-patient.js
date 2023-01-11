"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(
      "patients",
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
        },
        phone: {
          type: Sequelize.STRING,
        },
        address: {
          type: Sequelize.STRING,
        },
        status: {
          type: Sequelize.STRING,
        },
        in_date_at: {
          type: Sequelize.DATE,
        },
        out_date_at: {
          type: Sequelize.DATE,
        },
        createdAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: true,
        },
        updatedAt: {
          type: "TIMESTAMP",
          defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
          allowNull: true,
        },
      },
      {
        timestamps: false,
      }
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("patients");
  },
};
