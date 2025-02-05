const { uniq } = require('lodash')
const mongoose = require('mongoose')

// define person schema

const personschema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    work :{
        type: String,
        enum: ['chef', 'waiter' , 'manager'],
        required: true
    } ,
    mobile :{
        type: Number,
        required: true
    },
    
    email :{
        type: String,
        required: true,
        unique: true
    },

    address: {
        type: String,

    },
    salary: {
        type: String,
        
    }

});

////create person model

const Person = mongoose.model('Person' , personschema);
module.exports = Person;