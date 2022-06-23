const { DataTypes, UUIDV4} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      primaryKey: true
    },
    healthScore:{
      type: DataTypes.INTEGER,
      validate:{
        max: 100,
        min: 0,
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      // hacer un seter para prohibir guiones. y throw Error
      // modal con error
    },
    image: {
      type: DataTypes.STRING,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    }
  });
};
