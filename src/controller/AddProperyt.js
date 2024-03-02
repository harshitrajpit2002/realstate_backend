const {Request,Response} =require('express');
const { Property}=require('../Models/Properties');


const addproperty=async(req,res)=>{
    const data=req.body;
    console.log("yaha data aagye")
    console.log(req.body);

    try{
        const newProperty=new Property(data);
        console.log("new Property",newProperty)
        console.log("property added");
        await newProperty.save();
        res.status(201).json(newProperty);
    }
    catch(error)
    {
        res.status(500).send("error adding property")
    }
};
module.exports={addproperty}