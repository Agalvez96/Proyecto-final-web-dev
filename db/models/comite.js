'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comite.init({
    com_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    exa_loc: DataTypes.STRING,
    fecha_for: DataTypes.DATE,
    no_integrantes: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
      modelName: "Comite",
      tableName: "comite",
      freezeTableName: true,
      underscored: true,
  });
  return Comite;
};