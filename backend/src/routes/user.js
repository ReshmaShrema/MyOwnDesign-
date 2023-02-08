const express = require('express');
const userHelper = require('../controller/user');
const router = express.Router();


router.post('/signup', userHelper.signup);

router.post('/signin',(req,res)=>{

})
module.exports = router;