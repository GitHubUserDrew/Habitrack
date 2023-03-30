const Sequelize = require('sequelize')
const db = require('../db')

const Note = db.define('note', {
        id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
        },
      });
      
  
  module.exports = Note