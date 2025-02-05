const mongoose = require('mongoose')
/// define the MongoDB connection URL

const  mongoURL = "mongodb://localhost:27017/hotels"   //// replace 'mydb' with your database name
mongoose.connect(mongoURL)
// set mongo db connection
// mongoose.connect(mongoURL, {  // Pass mongoURL as the first argument

//                                      // useNewUrlParser: true,    // Corrected key name
//                                    // useUnifiedTopology: true  // Corrected key name  //MongoDB Node.js Driver version 4.0.0 and above. has inbuild these funtion no need
// });

///  get the default connection 
// mongoose maintain a default connection object representing the MongoDB connection.

const db = mongoose.connection;

db.on('connected' ,()=>{
    console.log('connected to mongoDB server (comments)')     /// event listener for connection
})

db.on('disconnected' ,()=>{
    console.log('disconnected to mongoDB server ')     /// event listener  for disconnection
})

db.on('disconnected' ,()=>{
    console.log('disconnected to mongoDB server ')     /// event listener  for disconnection
})

db.on('error' ,()=>{
    console.log('error to mongoDB server ')     /// event error  for disconnection
})




module.exports = db