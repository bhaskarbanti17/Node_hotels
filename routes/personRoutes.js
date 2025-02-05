const express = require('express')
const router = express.Router()
const Person = require('./../models/person')


/// GET route to get person details using work type

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

/// GET route to get person details

router.get('/',  async (req, res)=>{
    try{
        const data =  await Person.find()      /// persons data fatched from db
       console.log('data fatched successfully')
       res.status(200).json(data);
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal sever error'})
    }
})
/// POST route to add a person

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
 /// UPDATE(put) person details (using unique id)

router.put('/:id',  async (req, res)=>{        ////// fetch using worktype from db
    try{ 
        const personId = req.params.id;           /// extract the personid from the URL parameter
        const udatedPersonData = req.body;        // updated data for the person

        const response = await Person.findByIdAndUpdate(personId, udatedPersonData , {
            new : true,                           // Return the updated document
            runValidators: true                   // Run mongoose validation
        })
        
        if(!response){
            res.status(404).json({error: 'person not found'})
        }

        console.log('data updated')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal sever error'})
    }
})

 /// DELETE person details (using unique id)

 router.delete('/:id', async (req, res)=>{        
    try{ 
        const personId = req.params.id;           /// extract the personid from the URL parameter
       

        const response = await Person.findByIdAndDelete(personId)
        
        if(!response){
            res.status(404).json({error: 'person not found'})
        }

        console.log('data deleted successfully')
        res.status(200).json(response)
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal sever error'})
    }
})
module.exports = router