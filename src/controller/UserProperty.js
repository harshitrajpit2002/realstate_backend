const {Request,Response}=require('express');
const {Property}=require("../Models/Properties");

const userProperty=async(req,res)=>{
    const userid=req.id;
    try {
        const properties=await Property.find({userid})
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).send('error fetching user properties');
    }
};
module.exports={userProperty}