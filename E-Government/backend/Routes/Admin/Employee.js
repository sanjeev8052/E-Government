const express = require("express");
const router = express.Router();
const { isAuthenticate } = require("../../middlewares/Adminmiddle");
const TempEmployee = require("../../models/Admin/TempEmployee");
const Employee = require("../../models/Emp/Employee");
const Blockemployee = require("../../models/Admin/BlockEmployee")

// For Get Register Employee Request
router.get("/gettempemp", isAuthenticate, async (req, res) => {
    try {
        const employee = await TempEmployee.find({})
        if (!employee) {
            res.status(404).json({ message: "Employee Not Find" })
        }
        else {
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Comfirm Employee Request
router.post("/employee/:_id", isAuthenticate, async (req, res) => {
    try {
        const emp = await TempEmployee.findById(req.params._id)
        if (!emp) {
            res.status(400).json({ message: "Employee Not Found" })
        }
        const confirmemp = await Employee.create(emp.toJSON());
        const deleteTempEmp = await TempEmployee.deleteOne({ _id: req.params._id })
        res.status(200).
            json({
                success: true,
                message: "successfully confirmed",
                deleteTempEmp
            })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Reject Request
router.delete("/rejectemp/:_id" ,isAuthenticate, async (req,res) => { 
    try {
        const emp = await TempEmployee.findById(req.params._id)
        if (!emp) {
            res.status(400).json({ message: "Employee Not Found" })
        }
        const rejectemp = await  TempEmployee.deleteOne({ _id: req.params._id })
        
        res.status(200).json({
            success: true,
            message: "Su1ccessfully Rejected Complaint"
            
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
 })
// For Get Confirm Employee Data
router.get("/getemp", isAuthenticate, async (req, res) => {
    try {
        const employee = await Employee.find({})
        if (!employee) {
            res.status(404).json({ message: "Employee Not Find" })
        }
        else {
            res.status(200).json(employee)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Block Employee 
router.post("/blockemp/:_id", isAuthenticate, async (req, res) => {
    try {
        const emp = await Employee.findById(req.params._id)


        if (!emp) {
            res.status(200).json({ message: "Employee Not Found" })
        }

        const blockemp = await Blockemployee.create(emp.toJSON());
        const deleteEmp = await Employee.deleteOne({ _id: req.params._id })
        res.status(200).
            json({
                success: true,
                message: "successfully Blocked",
                deleteEmp
            })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For get Block Employee datails
router.get("/getblkemp", isAuthenticate, async (req, res) => {
    try {
        const blkemployee = await Blockemployee.find({})
        if (!blkemployee) {
            res.status(404).json({ message: "Employee Not Find" })
        }
        else {
            res.status(200).json(blkemployee)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Unblock Employee
router.post("/unblockemp/:_id", isAuthenticate, async (req, res) => {
    try {
        const blkemp = await Blockemployee.findById(req.params._id)


        if (!blkemp) {
            res.status(400).json({ message: "Employee Not Found" })
        }

        const unblockemp = await Employee.create(blkemp.toJSON());
        const deleteblkEmp = await Blockemployee.deleteOne({ _id: req.params._id })
        res.status(200).
            json({
                success: true,
                message: "successfully Unblocked",

            })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For display department wise

router.post("/deptwise" , isAuthenticate , async (req,res) => { 
    try {
        const { dept } = req.body;
        // if(!dept){
        //     res.status(401).json({message:"dept not found"})
        // }
        const deptwise = await Employee.find({dept})
        res.status(200).
        json({
            success: true,
            message: "successfully display",
            emp:deptwise
        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
 })
router.get("/deptwise/:dept" , isAuthenticate , async (req,res) => { 
    try {
        const { dept } = req.params.dept;
         if(!dept){
             res.status(401).json({message:"dept not found"})
         }
        // const deptwise = await Employee.find({dept})
        // res.status(200).
        // json({
        //     success: true,
        //     message: "successfully display",
        //     emp:deptwise
        // })
        res.status(200).json(dept)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
 })

module.exports = router

