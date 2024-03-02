const {Request,Response}=require('express');
const {Property }=require("../Models/Properties");

const allproperty=async(req,res)=>{
    try {
        const properties=await Property.find();
        res.status(200).json(properties);

    } catch (error) {
        res.status(500).send("Error fetching properties");
    }
};
module.exports={allproperty};