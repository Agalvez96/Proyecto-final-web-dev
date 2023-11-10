'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profesor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Profesor.init({
    carnet_prof: DataTypes.INTEGER,
    dpi: DataTypes.INTEGER,
    nacimiento: DataTypes.DATE,
    telefono: DataTypes.INTEGER,
    direccion: DataTypes.STRING,
    grado_academico: DataTypes.STRING,
    carnet_al: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Profesor',
  });
  return Profesor;
};