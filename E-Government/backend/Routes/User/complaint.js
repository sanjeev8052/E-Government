const express = require('express');
const { isAuthenticatedUser } = require('../../middlewares/auth');
const UserComplaint = require('../../models/User/UserComplaint');

const router = express.Router();

router.post('/comp/req', isAuthenticatedUser, async(req, res) => {
   
    try {
        const  complaint = await UserComplaint.create(req.body)
        res.status(200).json({
            success:true,
            message:"Requset Success..",
        })
        
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }  
})

router.get('/getComp/req', async(req, res) => {
   
    try {
        const  complaint = await UserComplaint.find({})
       
        res.status(200).send(complaint)
           
            
        
        
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }  
})

module.exports = router