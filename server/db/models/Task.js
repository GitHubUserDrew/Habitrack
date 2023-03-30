const Sequelize = require('sequelize')
const db = require('../db')

const Task = db.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
    },
    status: {
        type: Sequelize.ENUM('new', 'in_progress', 'completed'),
        defaultValue: 'new',
    },
});

module.exports = Task 