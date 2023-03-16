const { isAuthenticate } = require('../../middlewares/Adminmiddle');
const { isAuthenticatedUser } = require('../../middlewares/auth');
const UserComplaint = require('../../models/User/UserComplaint');
const express = require("express");

const AssignComplaint = require('../../models/Admin/AssignComplaint');
const CompleteComplaint = require('../../models/Emp/CompleteCom');
const Employee = require('../../models/Emp/Employee');
const router = express.Router();

// get asign Complaint 

router.get("/getasignWork", async (req, res) => {
    try {
         const employee = await Employee.findById("6411ee7b3f9795bbb64433be").populate('complaints')
        // if (!employee) {
        //     return res.status(404).json({ message: "Employee Not Find" })
        // }
        // return res.status(200).json(employee)
        res.send(employee)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})
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
        const complaint = await UserComplaint.find({ status: "Requested" })
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
        complaint.status = "Accepted"
        await complaint.save()
        // const acceptcomp = await AcceptedComplaint.create(complaint.toJSON())
        // const deletecomp = await UserComplaint.deleteOne({ _id: req.params._id })
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
        const complaint = await UserComplaint.find({ status: "Accepted" })
        if (!complaint) {
            res.status(401).json({ message: "Complaint Not Found" })
        }

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
        const comp = await UserComplaint.findById(req.params._id)
        res.status(200).json(comp)
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

router.post("/assigncom", async (req, res) => {
    try {
        console.log(req.body)
         const complaint = await UserComplaint.findById(req.body.compId)
         const emp = await Employee.findById(req.body.empId )
        emp.complaints.push(complaint)
        await emp.save()
        complaint.status = "asign"
        
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})




router.get("/getassigncom", async (req, res) => {
    try {
        const complaint = await AssignComplaint.find({})
        res.status(200).send(complaint)
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

router.post("/completecom/:_id", async (req, res) => {
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


module.exports = router