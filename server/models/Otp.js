const mongoose = require('mongoose')

const otpSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    otp:  {
        type: Int16Array,
        require: true 
    },  
},
{
    timestamps: true
}
)

module.exports = mongoose.model('Otp', otpSchema)