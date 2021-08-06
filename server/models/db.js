const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('pf_training_db', '', '', {
    dialect: 'sqlite',
    host: './pf_training.sqlite'
})

module.exports = sequelize