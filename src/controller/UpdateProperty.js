const {Request,Response}=require('express');
const {Property}=require('../Models/Properties');

const updateProperty=async(req,res)=>{
    const {id}=req.params;
    const { Location, description, Type, Price, PhotoPath, sell, rent, imageUrl } = req.body;

    try {
        const property=await Property.findByIdAndUpdate(id,{
            Location,
                description,
                Type,
                Price,
                PhotoPath,
                sell,
                rent,
                imageUrl
        },
        {
            new:true
        });
        if(!property)
        {
            return res.status(404).send('property not found')
        }
        res.status(200).json(property);
    } catch (error) {
        console.log("error updating property",error);
        res.status(500).send("Internal server error")
    }
};
module.exports={updateProperty}