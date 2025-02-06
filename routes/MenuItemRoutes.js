const express = require('express')
const router = express.Router()
// const Person = require('./../models/menuItem');
const menuItem = require('./../models/menuItem');

/// POST route to add menuItem

app.get('/showmenu', function (req , res ){
    res.send('this is your menu..')
})

app.post('/' , async (req, res)=>{
    try{
        const data = req.body  /// Asssuming the request body contaiins the person data

       const newmenuItem = new menuItem(data);  /// create a new person document using the Mongoose model
       
       const response = await newmenuItem.save(); //save the new person to the database

       console.log('newmenuItem saved successfully..')
       res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal sever error'})
    }
})
module.exports = router

/// write comment for testing purpuse