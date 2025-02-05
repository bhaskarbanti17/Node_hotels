const mongoose = require('mongoose')
const menuItemSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true
    },
    price:{
        type: Number,
        required: true
    },

    taste:{
        type:String,
        enum: ['sweet' , 'spicy', 'sour'],
        required: true
    },

    is_drink: {
        type: Boolean,
        default: false
    },
    ingrediendts:{
        type: [String],
        default: []
    },

    num_sales: {
        type: Number,
        default: 0
    }

})

const menuItem = mongoose.model('menuItem' , menuItemSchema)
module.exports = menuItem