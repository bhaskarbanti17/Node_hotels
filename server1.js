var fs = require('fs');
var os = require('os');
const express = require('express');
const app = express();

// const db = require('./db');  //// import db.js file in server for connection of monogoDB


// var user = os.userInfo();
// console.log(user);
// console.log(user.username)

// fs.appendFile('greeting.text' , 'hello' + user.username + '!' , ()=>{console.log("file is created")});
// console.log(fs)

// const notes = require('./notes.js')
// console.log("server file is available")
// var age = notes.age;
// console.log(age);
// console.log(notes.addnumber(24,45));
// var _ = require('lodash')

// var data = ["person","ravi", 3 ,4 ,5,2, 4,3,2, 'name', 'age','2'];

// var filter = _.uniq(data);       /////use of lodash
// console.log(filter);
// console.log(_.isString("age"));

// const objectToconvert = {
//     name: "alice",
//     age: 23
// };
// console.log(objectToconvert);                  
// const json = JSON.stringify(objectToconvert);
// console.log(typeof(json))

// const app = express();
// console.log(app)

// app.get('/' , function (req , res){
//     res.send('welcome to my hotel.. how can i help u')
// })

// app.get('/' ,  (req , res) =>{
//     res.send('chicken available here')
// })

// app.get('/idle' ,  (req , res) =>{
//     res.send('idle in not available here')
// })

// app.listen(3000 , ()=>{
//  console.log("listening on port 3000")
// })

