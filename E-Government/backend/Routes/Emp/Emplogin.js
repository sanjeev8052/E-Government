const express = require("express")
const router = express.Router()
const TempEmployee = require("../../models/Admin/TempEmployee")
const Employee = require("../../models/Emp/Employee")
const { body, validationResult, } = require('express-validator');
const bcrypt = require("bcrypt")

const jwt = require('jsonwebtoken');

// For Employee Register
router.post("/tempemployee", [
    body('email', "Enter Valid email").isEmail(),
    body('name', 'Enter a valid Name').isLength({ min: 3 }),
    body('name', 'please fill  the field').notEmpty(),
    body('dept', 'please fill  the field').notEmpty(),
    body('password', 'Enter minimum 5 length password').isLength({ min: 5 }),
    body('phone', "Enter phone number").isLength({ min: 10 })

], async (req, res) => {
    // if there are error then send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }
    const { name, email, gender, phone, password, dept } = req.body;
    const chmail = await TempEmployee.findOne({ email })
    try {
        if (chmail) {
            res.status(401).json({ error: "Email is already Exist" })
        }
        else {
            const empregister = new TempEmployee({ name, email, gender, phone, password, dept})
            await empregister.save();
            res.status(201).json({ msg: "Successfully Send Register Requst to Admin" })
        }
    } catch (error) {
        res.status(401).json({ error: "Some Error Accured" })
    }
}
)

// For Employee Login
router.post("/elogin", [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('password', 'Enter minimum 5 length password').isLength({ min: 5 }),
], async (req, res) => {

    // if there are error then send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        let emptoken;
        const emp = await Employee.findOne({ email });
        if (!emp) {
            return res.status(404).json({ message: "Email is not Found" })
        }
        // res.status(201).json({
        //     emp
        //  })
         else {
           const chpassword = await bcrypt.compare(password, emp.password);

             if (!chpassword) {
                 return res.status(404).json({ error: "Please Try to Login Proper Password" })
             }
            
            else {
                emptoken = await emp.generateEmpToken();
                const option = {
                    httpOnly: true,
                    expires: new Date(Date.now() + 86400*1000)
                }

                res.status(201).cookie("emptoken", emptoken, option).json({
                    success: true,
                    message: "Welcome Back",
                    token: emptoken
                })
          }
         }
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
})

// For Logout
router.get("/logoutemp",async (req, res) => {
    try {
        res
            .status(200)
            .cookie("emptoken", null, { expires: new Date(Date.now()), httpOnly: true })
            .json({ success: true, message: "Logout" })
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }

})

module.exports = router