// Seminar and Training Model Code MarkUp
const { Model, DataTypes } = require('sequelize')
const sequelize = require('./db')

class Seminar_Users extends Model {}

Seminar_Users.init({
    Email: {
        type: DataTypes.STRING
    },
    Password: {
        type: DataTypes.STRING
    },
    Client_ID: {
        type: DataTypes.UUID
    },
    Phone_No: {
        type: DataTypes.INTEGER
    },
    Date_Registered: {
        type: DataTypes.DATEONLY
    }
}, {
    sequelize,
    modelName: 'seminar_users'
})

module.exports = Seminar_Users