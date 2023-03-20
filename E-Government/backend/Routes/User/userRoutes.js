const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2
const User = require('../../models/User/UserModel')
// const { body, validationResult, cookie } = require('express-validator');
const { sendEmail } = require('../../middlewares/sendEmail')
const crypto = require('crypto')
const { errorHandler } = require("../../middlewares/Errorhandler");
const { isAuthenticatedUser } = require("../../middlewares/auth");



router.post("/upload", isAuthenticatedUser, async (req, res) => {
    try {

        const file = req.files.image
        const user = req.user
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
        user.avatar = avatar
        await user.save();
        res.status(200).json({
            success: true,
            message: " Profile Added"
        })

    } catch (error) {

    }

})
router.put("/upload/update", isAuthenticatedUser, async (req, res) => {
    try {


        const file = req.files.image
        const user = req.user
        const p_id = req.user.avatar.public_id
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

    }
})
router.delete("/upload/delete", isAuthenticatedUser, async (req, res) => {
    try {

        const user = req.user
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

    }
})
router.get("/profile/image", isAuthenticatedUser, async (req, res) => {
    try {

        const avatar = req.user.avatar.url
        res.status(200).send(avatar)
    } catch (error) {

    }
})




router.post("/user/new/", async (req, res) => {


    try {
        const { name, email, password, phone } = req.body
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ sucsess: false, message: "user already exists....." })
        }
        const message = "WELCOME TO PROFILE BASED E-GOVERNANCE ONLINE SERVICE PORTAL"
        user = await User.create({ name, email, phone, password })
        user.save();
        await sendEmail({
            email: user.email,
            subject: "Register Successfull",
            message
        });
        res.status(201).json({
            sucsess: true,
            message: "Register Success."
        })
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
});
router.post("/user/login", async (req, res) => {


    try {
        const { email, password } = req.body

        let user = await User.findOne({ email: email, status: undefined }).select("+password");
        // let statuses = await User.find({ status: "block" })
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Username & Password" })
        }

        const isMatch = await user.matchPassword(password)

        if (!isMatch) {
            return res
                .status(400)
                .json({ success: false, message: "Invalid Username & Password" })

        }
        const option = {
            expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
            httpOnly: true
        }
        const token = await user.generateToken()
        res.status(200).cookie("token", token, option).json({ success: true, message: "Login Success", token })



    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        })
    }


});
router.get("/me", isAuthenticatedUser, async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.send(user)
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }

});
router.get("/logout", async (req, res) => {
    try {
        res
            .status(200)
            .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
            .json({ success: true, message: "Logout" })
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }

})
router.get("/search/:id", async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return res
            .status(404)
            .json({ success: false, message: "user not found" })
    }


    res.send(user)


})
router.post("/forgot/password", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "Email does not exists.." })
        }

        const resetPasswordToken = await user.getResetPasswordToken();

        await user.save();

        const resetUrl = `${req.protocol}://localhost:3000/reset/password/${resetPasswordToken}`;
        const message = `reset your password by clicking on the link below: \n\n${resetUrl}`
        try {
            await sendEmail({
                email: user.email,
                subject: "reset Password",
                message
            });

            res.status(200).json({
                success: true,
                message: `Forgot password link sent to ${user.email}........`,
            })
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetpasswordExpire = undefined;
            await user.save();


        }
    } catch (error) {
        res.status(500).json({ sucsess: false, message:"sumthig wrong" })
    }
})
router.put("/reset/password/:token", async (req, res) => {

    try {

        console.log(req.body.password)
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")

        const user = await User.findOne({
            resetPasswordToken,
            resetPasswordExpire :{$gt: Date.now()}
        })


        if (!user) {
            return res
                .status(401)
                .json({ success: false, message: "Token is invalid or has expired.." })
        }

        user.password = req.body.password;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save()
        console.log(user)
        res.status(200).json({ success: true, message: "Password Updadet..", password: user.password })



    } catch (error) {
        res.status(500).json({ sucsess: false, message: "sumthig went wrong" })

    }

})
router.post("/update/profile/:id", async (req, res) => {

    try {
        let user = await User.findById(req.params.id)

        user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json({
            message: "Profile Updated.."
        })
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })

    }

})

module.exports = router

