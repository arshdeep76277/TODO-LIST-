const express=require('express');
const router=express.Router();

//Item model
const Item=require('../../models/Items.js');

router.get('/',(req,res)=>{
    Item.find()
    .sort({ date:-1})
    .then(item=>{
        res.json(item)
    })
});

router.post('/',(req,res)=>{
    const newItem = new Item({name:`${req.body.name}`});
    newItem.save().then(()=>
    res.json(newItem));
});
router.delete('/:id',(req,res)=>{
    Item.findById(req.params.id)
    .then((item)=>
    item.remove().then(()=>res.json({success:"true"}))
    ).catch((err)=>res.status(404).json({success:'false'}));
});


module.exports= router;