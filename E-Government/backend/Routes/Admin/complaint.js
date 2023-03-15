const { isAuthenticate } = require('../../middlewares/Adminmiddle');
const { isAuthenticatedUser } = require('../../middlewares/auth');
const UserComplaint = require('../../models/User/UserComplaint');
const AcceptedComplaint = require('../../models/Admin/AcceptedComplaint')
const express = require("express");
const AssignComplaint = require('../../models/Admin/AssignComplaint');
const CompleteComplaint = require('../../models/Emp/ComplateCom');
const router = express.Router();

// For Complaint Request
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

// For Get Complaint Request 
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

// For Accept complaint
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

// For Reject complaint
router.delete("/rejectcomplaint/:_id", isAuthenticate, async (req, res) => {
    const complaint = await UserComplaint.findById(req.params._id)
    if (!complaint) {
        res.status(401).json({ message: "Complaint not Found" })
    }
    const rejcomplaint = await UserComplaint.deleteOne({ _id: req.params._id })
    res.status(200).json({
        success: true,
        message: "Successfully Rejected Complaint"
    })

})

// for get accpted complaint
router.get('/acceptedcom', isAuthenticate, async (req, res) => {

    try {
        const complaint = await AcceptedComplaint.find({})

        res.status(200).send(complaint)




    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})


// FOr load Complaint
router.get("/compdata/:_id", async (req, res) => {

    try {
        const comp = await AcceptedComplaint.findById(req.params._id)
        res.status(200).json(comp)
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

router.post("/assigncom", async (req, res) => {
    try {
        const { city, streetAddress, area, complaintDesc, dept, emp } = req.body

        const assign = new AssignComplaint({ city, streetAddress, area, complaintDesc, dept, emp })
        await assign.save();
        res.status(201).json({
            success: true,
            message:"Successfully Added",
            assign
        })

    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

router.get("/getassigncom", async (req,res) => { 
    try {
        const complaint = await AssignComplaint.find({})
        res.status(200).send(complaint)
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
 })

router.post("/completecom/:_id", async (req,res) => {
    try {
        const complaint = await AssignComplaint.findById(req.params._id)
        if (!complaint) {
            res.status(401).json({ message: "Complaint Not Found" })
        }
        const completecomp = await CompleteComplaint.create(complaint.toJSON())
        const deletecomp = await AssignComplaint.deleteOne({ _id: req.params._id })
        res.status(200).json({
            success: true,
            message: "Accepted Complaint",
            completecomp
        })

    } catch (error) {
        
    }
})

// router.get("/getcompletecom", async (req,res) => { 
//     try {
//         const complaint = await CompleteComplaint.find({})
//         res.status(200).send(complaint)
//     } catch (error) {
//         res
//             .status(500)
//             .json({ success: false, Error: error.message })
//     }
//  })
module.exports = router