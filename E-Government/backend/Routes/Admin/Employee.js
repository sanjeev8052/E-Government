const express = require("express");
const router = express.Router();
const { isAuthenticate } = require("../../middlewares/Adminmiddle");
const TempEmployee = require("../../models/Admin/TempEmployee");
const Employee = require("../../models/Emp/Employee");
const Blockemployee = require("../../models/Admin/BlockEmployee")

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
router.post("/blockemp/:_id", isAuthenticate, async (req, res) => {
    try {
        const emp = await Employee.findById(req.params._id)

       
        if (!emp) {
            res.status(400).json({ message: "Employee Not Found" })
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

module.exports = router

