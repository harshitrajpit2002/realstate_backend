const mongoose=require('mongoose');
const propertySchema =new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    location: {
        type: String,
        required: true
    },
    sellerEmail:{
        type:String,
        required:true
    },
    type: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    photoPath: {
        type: String
    },
    sell: {
        type: Boolean,
        required: true
    },
    rent: {
        type: Boolean,
        required: true
    },
    pincode:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
});
const Property=new mongoose.model('Property',propertySchema);
module.exports={Property};