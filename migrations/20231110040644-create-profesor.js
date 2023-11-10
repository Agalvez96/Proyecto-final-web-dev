'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profesors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carnet_prof: {
        type: Sequelize.INTEGER
      },
      dpi: {
        type: Sequelize.INTEGER
      },
      nacimiento: {
        type: Sequelize.DATE
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      direccion: {
        type: Sequelize.STRING
      },
      grado_academico: {
        type: Sequelize.STRING
      },
      carnet_al: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Profesors');
  }
};