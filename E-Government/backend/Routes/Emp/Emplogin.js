const express = require("express")
const router = express.Router()
const TempEmployee = require("../../models/Admin/TempEmployee")
const Employee = require("../../models/Emp/Employee")
const { body, validationResult, } = require('express-validator');

// For Employee Register
router.post("/tempemployee", [
    body('email', "Enter Valid email").isEmail(),
    body('name', 'Enter a valid Name').isLength({ min: 5 }),
    body('password', 'Enter minimum 5 length password').isLength({ min: 5 }),
    body('phone', "Enter phone number").isLength({ min: 10 })
 ] , async (req, res) => {
        // if there are error then send bad request
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(404).json({ errors: errors.array() });
        }
        const { name, email, gender, phone, password } = req.body;
        const chmail = await TempEmployee.findOne({ email })
        try {
            if (chmail) {
                res.status(401).json({ error: "Email is already Exist" })
            }
            else {
                const empregister = new TempEmployee({ name, email, gender, phone, password })
                await empregister.save();
                res.status(201).json({ msg: "Successfully Send Register Requst to Admin" })
            }
        } catch (error) {
            res.status(401).json({ error: "Some Error Accured" })
        }
    }
)

// For Employee Login

module.exports = router