"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    static associate(models) {
      // define association here
    }
  }
  Alumno.init(
    {
      carnet_al: DataTypes.INTEGER,
      dpi: DataTypes.INTEGER,
      nombres: DataTypes.STRING,
      apellidos: DataTypes.STRING,
      nacimiento: DataTypes.DATE,
      telefono: DataTypes.INTEGER,
      direccion: DataTypes.STRING,
      carrera: DataTypes.STRING,
      tfc_id: DataTypes.INTEGER,
      carne_prof: DataTypes.INTEGER,
      no_grupo: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Alumno",
      tableName: "alumno",
      freezeTableName: true,
      underscored: true,
    }
  );
  return Alumno;
};
