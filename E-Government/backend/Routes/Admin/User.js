const express = require("express");
const { isAuthenticate } = require("../../middlewares/Adminmiddle");
const BlockUser = require("../../models/User/BlockUser");
const UserModel = require("../../models/User/UserModel");
const router = express.Router();

router.post("/blockuser/:_id", isAuthenticate, async (req, res) => {
    try {
        const user = await UserModel.findById(req.params._id)
        if (!user) {
            res.status(401).json({
                message: "User not found"
            })
        }

        const blockuser = await BlockUser.create(user.toJSON())
        const deleteuser = await UserModel.deleteOne({ _id: req.params._id })
        res.status(200).
        json({
            success: true,
            message: "Successfully Blocked",
        })
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})

router.get("/getuser", isAuthenticate, async (req, res) => {
    try {
        const user = await UserModel.find({})
        if (!user) {
            res.status(404).json({ message: "User Not Find" })
        }
        else {
            res.status(200).json(user)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router