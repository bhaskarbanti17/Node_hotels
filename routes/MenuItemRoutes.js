const express = require('express')
const router = express.Router()
const Person = require('./../models/menuItem');
const menuItem = require('./../models/menuItem');

/// POST route to add menuItem

router.get('/:worktype',  async (req, res)=>{        ////// fetch using worktype from db
    try{ 
        const worktype = req.params.worktype;           /// extract the work type from the URL parameter
        if(worktype == 'chef' || worktype == 'waiter'|| worktype == 'manager'){
            const data =  await Person.find({work: worktype})                /// persons data(response) fatched from db
            console.log('data fatched with parameterized endpoint successfully')
            res.status(200).json(data);
        }
        else{
            res.status(404).json({error: 'invalid work type'})
        }
       
       
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal sever error'})
    }
})

router.get('/',  async (req, res)=>{
    try{
        const data =  await menuItem.find()      /// menu data fatched from db
       console.log('data fatched successfully')
       res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal sever error'})
    }
})

router.post('/' , async (req, res)=>{
    try{
        const data = req.body  /// Asssuming the request body contaiins the person data

       const newPerson = new Person(data);  /// create a new person document using the Mongoose model
       
       const response = await newPerson.save(); //save the new person to the database

       console.log('data saved')
       res.status(200).json(response);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal sever error'})
    }
})
module.exports = router

/// write comment for testing purpuse