'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class InstanciaComite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  InstanciaComite.init({
    instancia_id: DataTypes.INTEGER,
    com_id: DataTypes.INTEGER,
    carnet_prof: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'InstanciaComite',
  });
  return InstanciaComite;
};