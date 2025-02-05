const  express = require('express')
const app = express();
const db = require('./db')
const Person = require('./models/person')
const menuItem = require('./models/menuItem')
const bodyParser = require('body-parser')

app.use(bodyParser.json());   /// ( that stores data in req.body)


app.get('/', function (req , res ){
    res.send('wlc how can i help you...we have list of menu')
})

// app.get('/person/:worktype',  async (req, res)=>{        ////// fetch using worktype from db
//     try{ 
//         const worktype = req.params.worktype;           /// extract the work type from the URL parameter
//         if(worktype == 'chef' || worktype == 'waiter'|| worktype == 'manager'){
//             const data =  await Person.find({work: worktype})                /// persons data(response) fatched from db
//             console.log('data fatched with parameterized endpoint successfully')
//             res.status(200).json(data);
//         }
//         else{
//             res.status(404).json({error: 'invalid work type'})
//         }
       
       
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'internal sever error'})
//     }
// })

// app.get('/person',  async (req, res)=>{
//     try{
//         const data =  await Person.find()      /// persons data fatched from db
//        console.log('data fatched successfully')
//        res.status(200).json(data);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'internal sever error'})
//     }
// })

// app.post('/person' , async (req, res)=>{
//     try{
//         const data = req.body  /// Asssuming the request body contaiins the person data

//        const newPerson = new Person(data);  /// create a new person document using the Mongoose model
       
//        const response = await newPerson.save(); //save the new person to the database

//        console.log('data saved')
//        res.status(200).json(response);
//     }
//     catch(err){
//         console.log(err);
//         res.status(500).json({error: 'internal sever error'})
//     }
// })

//
app.get('/showMenu', function (req , res ){
    res.send('this is your menu..')
})

app.post('/menu' , async (req, res)=>{
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

////import the routers files

const personRoutes = require('./routes/personRoutes')

// use the routers
app.use('/person' , personRoutes)

app.listen(3000 , ()=>{
    console.log('listening on port 3000..')
})
