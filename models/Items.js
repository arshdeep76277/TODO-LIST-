const mongoose=require('mongoose');


const ItemSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
    completed:{
        type:String,
        default:false
    }
});

module.exports= Item= mongoose.model('Item',ItemSchema);