const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const posterSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,  
            ref: 'User'     
        },
        title: {
            type: String,
            required: true        
        },
        position: {
            type: String,
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
            type: String,
            required: false     
        }
        },
        {
            timestamps: true
        }
        
    )

posterSchema.plugin(AutoIncrement, {
        inc_field: 'ticket',
        /* id: 'ticketNums', */
        start_seq: 500
    })

module.exports = mongoose.model('Poster', posterSchema)