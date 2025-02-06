'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class About extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  About.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    urlPicture: DataTypes.STRING,
    description: DataTypes.TEXT,
    pdfFile: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'About',
  });
  return About;
};