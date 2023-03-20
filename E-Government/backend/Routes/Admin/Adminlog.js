const express = require("express");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken');
const router = express.Router();
const cloudinary = require('cloudinary').v2
const AdRegister = require("../../models/Admin/AdRegister")
const { body, validationResult, } = require('express-validator');
const { isAuthenticate } = require("../../middlewares/Adminmiddle");

cloudinary.config({
    cloud_name: process.env.cloud_name,
    api_key: process.env.api_key,
    api_secret: process.env.api_secret,
    secure: true
});

// For Admin Register
router.post("/aregister", [
    body('email', 'Enter a valid E-mail').isEmail(),
    body('name', 'Enter a valid Name').isLength({ min: 5 }),
    body('password', 'Enter minimum 5 length password').isLength({ min: 5 }),
], async (req, res) => {

    // if there are error then send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    const chmail = await AdRegister.findOne({ email });

    try {


        if (chmail) {
            res.status(400).json({ error: "Email is already exist" })
        }
        else {
            const aregister = new AdRegister({ name, email, password })

            await aregister.save();
            res.status(201).json({ msg: "Admin Registered" });
        }


    } catch (error) {
        res.status(400).json({ message: "Something Went Wrong " })

    }
})

// For Login
router.post("/alogin", [
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
        let token;
        const admin = await AdRegister.findOne({ email });
        if (!admin) {
            return res.status(404).json({ message: "Email is not Found" })
        }
        else {
            const chpassword = await bcrypt.compare(password, admin.password);

            if (!chpassword) {
                return res.status(404).json({ error: "Please Try to Login Proper Password" })
            }
            else {
                token = await admin.generateAuthToken();
                // console.log({ token: token })
                const option = {
                    httpOnly: true,
                    expires: new Date(Date.now() + 86400*1000)
                }

                res.status(201).cookie("admintoken", token, option).json({
                    success: true,
                    message: "Welcome Back",
                    token: token
                })

            }
            

        }



    } catch (error) {
        return res.status(404).json({ error: error.message })
    }

})

// For Profile
router.get("/profile", isAuthenticate, async (req, res) => {
    try {
        const admin = await AdRegister.findById(req.admin._id)
        res.send(admin)
    } catch (error) {
        res.status(400).json(error.message)
    }
}
)

// For Logout
router.get("/logout",async (req, res) => {
    try {
        res
            .status(200)
            .cookie("admintoken", null, { expires: new Date(Date.now()), httpOnly: true })
            .json({ success: true, message: "Logout" })
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }

})

// For Image
router.get("/profile/image", isAuthenticate, async (req, res) => {
    try {

        const avatar = req.admin.avatar.url
        res.status(200).send(avatar)
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})

router.put("/upload/update", isAuthenticate, async (req, res) => {
    try {


        const file = req.files.image
        const user = req.admin
        const p_id = req.admin.avatar.public_id
        if (!file) {
            return res
                .status(400)
                .json({ sucsess: false, message: "Somthing Went Wroung..." })
        }
        const { public_id, url } = await cloudinary.uploader.upload(file.tempFilePath, {
            public_id: p_id,
            overwrite: true
        })
        const avatar = {
            public_id,
            url
        }
        user.avatar = avatar
        await user.save();
        res.status(200).json({
            success: true,
            message: " Profile Updated"
        })

    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})

router.post("/upload", isAuthenticate, async (req, res) => {
    try {

        const file = req.files.image
        const admin = req.admin
        if (!file) {
            return res
                .status(400)
                .json({ sucsess: false, message: "Somthing Went Wroung..." })
        }
        const { public_id, url } = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "User_Profile"
        })
        const avatar = {
            public_id,
            url
        }
        admin.avatar = avatar
        await admin.save();
        res.status(200).json({
            success: true,
            message: " Profile Added"
        })

    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }

})
router.delete("/upload/delete", isAuthenticate, async (req, res) => {
    try {

        const user = req.admin
        const avatar = {
            public_id: undefined,
            url: undefined
        }
        user.avatar = avatar
        await user.save();
        res.status(200).json({
            success: true,
            message: " Profile Image Deleted"
        })

    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})
module.exports = router