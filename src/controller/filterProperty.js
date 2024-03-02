const {Request,Response}=require('express');
const {Property}=require('../Models/Properties');

const filterProperty=async(req,res)=>{
    const {pincode,type}=req.body;
    console.log("fetched search property");
    console.log(pincode,type);

    try {
        const properties=await Property.find({pincode,type});
        console.log("these are the property ", properties)
        res.status(200).json(properties);
    } catch (error) {
        res.status(500).send('Error fetching properties')
    }
};
module.exports={filterProperty};