'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TFC extends Model {
   
    static associate(models) {
      // define association here
    }
  }
  TFC.init({
    tfc_id: DataTypes.INTEGER,
    tema: DataTypes.STRING,
    fecha_inicio: DataTypes.DATE,
    carnet_al: DataTypes.INTEGER,
    aprobado: DataTypes.BOOLEAN
  }, {
    sequelize,
      modelName: "TFC",
      tableName: "tfc",
      freezeTableName: true,
      underscored: true,
  });
  return TFC;
};