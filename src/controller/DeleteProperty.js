const {Request,Response}=require('express');
const {Property}=require('../Models/Properties');

const deleteProperty=async(req,res)=>{
    const {id}=req.params;

    try {
        const property=await Property.findByIdAndDelete(id);
        if (!property) {
            return res.status(404).send('property not found');
        }
        res.status(200).send('property deleted successfully');
    } catch (error) {
        console.log("ERROR deleting property",error);
        res.status(500).send("internal server error");
    }
}
module.exports={deleteProperty}