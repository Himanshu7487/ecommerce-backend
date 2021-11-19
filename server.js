const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const mongoose =require('mongoose')
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 4000
const db = require('./src/config/dbconfig')

const messageRoute = require('./src/routes/messageCardRoute')
app.use('/message', messageRoute);
//userRoute
const userRoute = require('./src/routes/userroute');
app.use('/user',userRoute);
//product route
const productRoute = require('./src/routes/productRoute')
app.use('/product', productRoute);
//DB Connection
try{
    mongoose.connect(db.connection_url)
    console.log("Mongoose connected with mongodb atlas");
}
catch (err){
    console.log(err);
}
//listener
app.listen(port, ()=>{console.log(`listening on localhost: ${port}`)})