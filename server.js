const express=require('express');
const app= express();
const path=require('path')
const mongoose= require('mongoose');
const bodyParser=require('body-parser');
const db=require('./config/keys').mongoURI;
const cors =require('cors');
const items=require('./routes/api/items');
//bodyParser middleware
app.use(bodyParser.json());
app.use(cors());



mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err));

//use routes

app.use('/api/items',items);

if(process.env.NODE_ENV==='production'){

    //setting a static folder
    app.use(express.static('client/build'));

    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    })
}


const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`sever started listening on port ${PORT}`));

