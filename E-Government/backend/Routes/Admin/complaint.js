const { isAuthenticate } = require('../../middlewares/Adminmiddle');
const { isAuthenticatedUser } = require('../../middlewares/auth');
const UserComplaint = require('../../models/User/UserComplaint');
const AcceptedComplaint = require('../../models/Admin/AcceptedComplaint')
const express = require("express")
const router = express.Router();

router.post('/comp/req', isAuthenticatedUser, async (req, res) => {

    try {
        const complaint = await UserComplaint.create(req.body)
        res.status(200).json({
            success: true,
            message: "Requset Success..",
        })

    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

router.get('/getComp/req', isAuthenticate, async (req, res) => {

    try {
        const complaint = await UserComplaint.find({})

        res.status(200).send(complaint)




    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})


router.post('/acceptcomplaint/:_id', isAuthenticate, async (req, res) => {
    try {
        const complaint = await UserComplaint.findById(req.params._id)
        if (!complaint) {
            res.status(401).json({ message: "Complaint Not Found" })
        }
        // res.status(200).json({message :"true",
        // complaint:complaint})
        const acceptcomp = await AcceptedComplaint.create(complaint.toJSON())
        const deletecomp = await UserComplaint.deleteOne({ _id: req.params._id })
        res.status(200).json({
            success: true,
            message: "Accepted Complaint"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})

router.delete("/rejectcomplaint/:_id", isAuthenticate, async (req, res) => {
    const complaint = await UserComplaint.findById(req.params._id)
    if (!complaint) {
        res.status(401).json({ message: "Complaint not Found" })
    }
    const rejcomplaint = await UserComplaint.deleteOne({_id: req.params._id})
    res.status(200).json({
        success:true,
        message:"Successfully Rejected Complaint"
    })

})
module.exports = router