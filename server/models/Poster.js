const mongoose = require('mongoose')

const posterSchema = new mongoose.Schema({
    username: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,  
        ref: 'User'     
    },
    title: {
        type: String,
        required: true        
    },
    postion: {
        type: String,
        required: true                
    },
    postdate: {
        type: Date,
        required: true      
    },
    eventdate: {
        type: Date,
        required: false      
    },
    association: {
        type: String,
        required: true      
    },
    text: {
        type: String,
        required: true     
    },
    img: {
        type: image/png,
        required: false     
    }
})

module.exports = mongoose.model('Poster', userSchema)