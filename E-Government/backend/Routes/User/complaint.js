const express = require('express');
const { isAuthenticatedUser } = require('../../middlewares/auth');
const UserComplaint = require('../../models/User/UserComplaint');

const router = express.Router();

router.post('/comp/req', isAuthenticatedUser, async(req, res) => {
    try {
        const {values, user} = req.body

        const create = {
            name:user.name,
            email:user.email,
            phone:user.phone,
            complaintType:values.complaintType,
            city:values.city,
            streetAddress:values.streetAddress,
            area:values.area,
            pincode:values.pincode,
            complaintDesc:values.complaintDesc,
            status:"Requested"
        }
        const  complaint = await UserComplaint.create(create)
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
        const  complaint = await UserComplaint.find({ status:"Requested" })
       
        res.status(200).send(complaint)
           
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }  
})

module.exports = router