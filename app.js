const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')

//passport config 
require('./config/passport')(passport)
//load routes 
const auth = require('./routes/auth')
//load keys
const keys = require('./config/keys')
//map global promises
mongoose.Promise = global.Promise
//mongoose connect
mongoose.connect(keys.mongoURI,{
    useMongoClient:true
}).then(()=>console.log('mongodb connected'))
.catch(err => console.log(err))

const app = express()

app.get('/',(req,res)=>{
res.send('it works')
})

//Use Routes
app.use('/auth',auth)
 
const port = process.env.port || 5000

app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})