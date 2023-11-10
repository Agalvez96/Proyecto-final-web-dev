'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Alumnos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carnet_al: {
        type: Sequelize.INTEGER
      },
      dpi: {
        type: Sequelize.INTEGER
      },
      nombres: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
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
      carrera: {
        type: Sequelize.STRING
      },
      tfc_id: {
        type: Sequelize.INTEGER
      },
      carne_prof: {
        type: Sequelize.INTEGER
      },
      no_grupo: {
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
    await queryInterface.dropTable('Alumnos');
  }
};