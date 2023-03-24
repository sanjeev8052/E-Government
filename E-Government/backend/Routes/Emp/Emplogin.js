const express = require("express")
const router = express.Router()
const Employee = require("../../models/Emp/Employee")
const { body, validationResult, } = require('express-validator');
const bcrypt = require("bcrypt")
const multer = require('multer');
const jwt = require('jsonwebtoken');
const { isAuthenticatedEmp } = require("../../middlewares/auth");
const UserComplaint = require("../../models/User/UserComplaint");

const crypto = require('crypto')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Profile')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post("/upload", isAuthenticatedEmp, upload.single("image"), async (req, res) => {
    try {

        const { _id } = req.emp
        const file = (req.file) ? req.file.filename : null
        if (!file) {
            return res
                .status(400)
                .json({ sucsess: false, message: "Somthing Went Wroung..." })
        }
        const emp = await Employee.findById(_id)
        if (!emp) {
            return res.status(400).json({ message: "Employee  Not Found" })
        }
        emp.avatar = file
        await emp.save();
        res.status(200).json({
            success: true,
            message: " Profile Added"
        })

    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }

})

router.put("/upload/update", isAuthenticatedEmp, upload.single("image"), async (req, res) => {
    try {


        const file = (req.file) ? req.file.filename : null
        const emp = req.emp
        if (!file) {
            return res
                .status(400)
                .json({ sucsess: false, message: "Somthing Went Wroung..." })
        }
       
        emp.avatar = file
        await emp.save();
        res.status(200).json({
            success: true,
            message: " Profile Updated"
        })

    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})
router.delete("/upload/delete", isAuthenticatedEmp, async (req, res) => {
    try {

        const emp = req.emp
        const avatar = undefined
        emp.avatar = avatar
        await emp.save();
        res.status(200).json({
            success: true,
            message: " Profile Image Deleted"
        })

    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})
router.get("/profile/image", isAuthenticatedEmp, async (req, res) => {
    try {

        const avatar = req.emp.avatar
        res.status(200).send(avatar)
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})

router.post("/update/profile/:id", async (req, res) => {

    try {
        let emp = await Employee.findById(req.params.id)

        emp = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({
            message: "Profile Updated.."
        })
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })

    }

})



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
    const chmail = await Employee.findOne({ email })
    try {
        if (chmail) {
            res.status(401).json({ error: "Email is already Exist" })
        }
        else {
            const empregister = new Employee({ name, email, gender, phone, password, dept, request: true })
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
        const emp = await Employee.findOne({ email: email, status: undefined, request: false });
        if (!emp) {
            return res.status(404).json({ message: "Email is not Found" })
        }
        else {
            const chpassword = await bcrypt.compare(password, emp.password);

            if (!chpassword) {
                return res.status(404).json({ error: "Please Try to Login Proper Password" })
            }

            else {
                emptoken = await emp.generateEmpToken();
                const option = {
                    httpOnly: true,
                    expires: new Date(Date.now() + 86400 * 1000)
                }

                res.status(201).json({
                    success: true,
                    message: "Welcome Back",
                    Emptoken: emptoken
                })
            }
        }
    } catch (error) {
        return res.status(404).json({ error: error.message })
    }
})

// For Logout
router.get("/logoutemp", async (req, res) => {
    try {
        res
            .status(200)
            .cookie("empToken", null, { expires: new Date(Date.now()), httpOnly: true })
            .json({ success: true, message: "Logout" })
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }

})

router.get("/get/eProfile", isAuthenticatedEmp, async (req, res) => {
    try {

        const emp = await Employee.findById(req.emp._id)
        res.status(200).send(emp)

    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

router.post("/comp/copmlete", isAuthenticatedEmp, async (req, res) => {
    try {

        const emp = await Employee.findById(req.emp).populate("complaints")
        const empComp = emp.complaints
        res.send(empComp)


    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})



router.get("/comp/complete/:_id", isAuthenticatedEmp, async (req, res) => {

    const complaint = await UserComplaint.findById(req.params.id)
    try {

        const complaint = await UserComplaint.findById(req.params._id)
        if (!complaint) {
            return res
                .status(404)
                .json({ success: false, message: "complaint not found..." })
        }
        complaint.status = "complete"
        await complaint.save()
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }

})

router.post("/forgot/password", async (req, res) => {
    try {
        const emp = await Employee.findOne({ email: req.body.email });
        if (!emp) {
            return res
                .status(400)
                .json({ success: false, message: "Email does not exists.." })
        }

        const resetPasswordToken = await emp.getResetPasswordEmpToken();

        await emp.save();

        const resetUrl = `${req.protocol}://localhost:3000/ereset/password/${resetPasswordToken}`;
        const message = `reset your password by clicking on the link below: \n\n${resetUrl}`
        try {
            await sendEmail({
                email: emp.email,
                subject: "reset Password",
                message
            });

            res.status(200).json({
                success: true,
                message: `Forgot password link sent to ${emp.email}........`,
            })
        } catch (error) {
            emp.resetPasswordToken = undefined;
            emp.resetpasswordExpire = undefined;
            await emp.save();


        }
    } catch (error) {
        res.status(500).json({ sucsess: false, message:"sumthig wrong" })
    }
})
router.put("/reset/password/:token", async (req, res) => {

    try {

        console.log(req.body.password)
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")

        const emp = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire :{$gt: Date.now()}
        })


        if (!emp) {
            return res
                .status(401)
                .json({ success: false, message: "Token is invalid or has expired.." })
        }

        emp.password = req.body.password;

        emp.resetPasswordToken = undefined;
        emp.resetPasswordExpire = undefined;
        await emp.save()
        console.log(emp)
        res.status(200).json({ success: true, message: "Password Updadet..", password: emp.password })



    } catch (error) {
        res.status(500).json({ sucsess: false, message: "sumthig went wrong" })

    }

})




module.exports = router