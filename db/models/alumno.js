"use strict";
const { Model, UniqueConstraintError } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    static associate(models) {
      // define association here
    }
  }
  Alumno.init(
    {
      carnet_al:{ 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      dpi: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      nombres: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      apellidos: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      nacimiento: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      telefono: {
        type: DataTypes.INTEGER
      },
      direccion: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      carrera: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      tfc_id:{
        type: DataTypes.INTEGER,
        allowNull: false
      },
      carne_prof: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      no_grupo: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
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
