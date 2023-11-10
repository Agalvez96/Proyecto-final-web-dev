'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('TFCs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tfc_id: {
        type: Sequelize.INTEGER
      },
      tema: {
        type: Sequelize.STRING
      },
      fecha_inicio: {
        type: Sequelize.DATE
      },
      carnet_al: {
        type: Sequelize.INTEGER
      },
      aprobado: {
        type: Sequelize.BOOLEAN
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
    await queryInterface.dropTable('TFCs');
  }
};