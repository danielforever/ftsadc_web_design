const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true        
    },
    phone: {
        type: String,
        required: false     
    },
    association: {
        type: String,
        required: false     
    },
    fburl: {
        type: String,
        required: false             
    },
    position: {
        type: String,
        required: false             
    },
    roles: [{
        type: String,
        default: "Employee"
    }],
    active: {
        type: Boolean,
        default: true
    },
    verified: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('User', userSchema)