const express = require('express');
const register = require('../controller/register');
const login = require('../controller/login');
const { addproperty } = require('../controller/AddProperyt');
const { allproperty } = require('../controller/AllProperty');
const { deleteProperty } = require('../controller/DeleteProperty');
const { filterProperty } = require('../controller/filterProperty');
const { updateProperty } = require('../controller/UpdateProperty');
const { userProperty } = require('../controller/UserProperty');

const router = express.Router();

router.post('/register',register);
router.post('/login',login);
router.post('/addproperty',addproperty)
router.get('/allproperty',allproperty)
router.delete('/deleteproperty/:id',deleteProperty);
router.post('/filterproperty',filterProperty);
router.put('/updateproperty',updateProperty);
router.get('/userproperty',userProperty)
module.exports ={router};