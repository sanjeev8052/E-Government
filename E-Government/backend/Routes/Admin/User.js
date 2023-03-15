const express = require("express");
const { isAuthenticate } = require("../../middlewares/Adminmiddle");
const BlockUser = require("../../models/User/BlockUser");
const UserModel = require("../../models/User/UserModel");
const router = express.Router();

// For Block User
router.post("/blockuser/:id", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        if (!user) {
            res.status(401).json({
                message: "User not found"
            })
        }
        
         user.status =  "block"
        await user.save();
        
        // const blockuser = await BlockUser.create(user.toJSON())
        // const deleteuser = await UserModel.deleteOne({ _id: req.params._id })
        res.status(200).
        json({
            success: true,
            message: "Successfully Blocked",
            user
        })
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})

router.get("/getuser",  async (req, res) => {
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
// For Get Block User
router.get("/getblockuser", isAuthenticate, async (req, res) => {
    try {
        const blkuser = await UserModel.find({ status:"block"})
        if (!blkuser) {
            res.status(404).json({ message: "Blocked User Not Find" })
        }
        else {
            res.status(200).json(blkuser)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Unblock User
router.post("/unblockuser/:id", isAuthenticate, async (req, res) => {
    try {
        const blkuser = await BlockUser.findById(req.params._id)
        if (!blkuser) {
            res.status(404).json({ message: "Blocked User Not Find" })
        }

        const unblockuser = await UserModel.create(blkuser.toJSON())
         const deleteblkuser = await BlockUser.deleteOne({ _id: req.params._id })
        res.status(200).
        json({
            success: true,
            message: "Successfully UnBlocked",
        })
    } catch (error) {
        res.status(500).json({ error: error.message})
    }
})


module.exports = router