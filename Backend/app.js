const express = require('express');
const mongoose = require('mongoose');
const app = express()
app.use(express.json())
app.use(router)
mongoose.connect(config.URL)
.then(()=>console.log('connected to mongose..'))
.catch(err=>console.log('could not connect to mongoDB...',err))
port=config.PORT;
app.listen(port,()=>{
    console.log(`Lisening the sever ${port}....`)
})
