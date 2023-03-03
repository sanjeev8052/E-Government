const express = require("express");
const router = express.Router();
const User = require('../../models/User/UserModel')
// const { body, validationResult, cookie } = require('express-validator');
const { sendEmail } = require('../../middlewares/sendEmail')
const crypto = require('crypto')

const { isAuthenticated } = require("../../middlewares/auth");

router.post("/user/new/",async (req, res) => {

    try {
        const { name, email, password, mobile } = req.body
        let user = await User.findOne({ email });
        if (user) {
            return res
                .status(400)
                .json({ sucsess: false, message: "user already exists....." })
        }

        user = await User.create({ name, email, mobile, password })
        user.save();

        res.status(201).json({
            sucsess: true,
            user
        })
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
});
router.post("/user/login",async (req, res) => {


    try {
        const { email, password } = req.body

        let user = await User.findOne({ email }).select("+password");
       
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
router.get("/me",isAuthenticated,async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
        res.send(user)
    } catch (error) {
        res.status(500).json({    sucsess: false, message: error.message })
    }

});
router.get("/logout",async (req, res) => {
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
router.get("/search/:id",async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        return res
            .status(404)
            .json({ success: false, message: "user not found" })
    }


    res.send(user)


})
router.post("/forgot/password",async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res
                .status(400)
                .json({ success: false, message: "Email does not exists.." })
        }

        const resetPasswordToken = await user.getResetPasswordToken();

        await user.save();

        const resetUrl = `${req.protocol}://${req.get("host")}/api/reset/password/${resetPasswordToken}`;
        const message = `reset your password by clicking on the link below: \n\n${resetUrl}`
        try {
            await sendEmail({
                email: user.email,
                subject: "reset Password",
                message
            });

            res.status(200).json({
                success: true,
                message: `Email sent to ${user.email}`,
            })
        } catch (error) {
            user.resetPasswordToken = undefined;
            user.resetpasswordExpire = undefined;
            await user.save();

            res.status(500).json({
                sucsess: false,
                message: error.message
            })
        }
    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })
    }
})
router.put("/reset/password/:token",async (req, res) => {

    try {
        const resetPasswordToken = crypto.createHash("sha256").update(req.params.token).digest("hex")



        const user = await User.findOne({
            resetPasswordToken,
            // resetPasswordExpire :{$gt: Date.now()}
        })


        if (!user) {
            return res
                .status(401)
                .json({ success: false, message: "Token is invalid or hax expired.." })
        }

        user.password = req.body.password;

        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;
        await user.save()
        res.status(200).json({ success: true, message: "Password Updadet..", password: user.password })



    } catch (error) {
        res.status(500).json({ sucsess: false, message: error.message })

    }

})

module.exports = router  