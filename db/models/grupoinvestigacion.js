'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GrupoInvestigacion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GrupoInvestigacion.init({
    no_grupo: DataTypes.INTEGER,
    nombre: DataTypes.STRING,
    carnet_al: DataTypes.INTEGER,
    cantidad_int: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'GrupoInvestigacion',
    tableName: "grupo_investigacion",
      freezeTableName: true,
      underscored: true,
  });
  return GrupoInvestigacion;
};