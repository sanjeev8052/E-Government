const express = require("express");
const { isAuthenticate } = require('../../middlewares/Adminmiddle');
const Bills = require("../../models/Admin/Bills");
const UserModel = require("../../models/User/UserModel");
const router = express.Router();

// FOr Add Bills
router.post("/addbills", async (req, res) => {
    try {
        const { billType, ownerName, tenamentNo, streetAddress, area, amount } = req.body;
        const bills = new Bills({ billType, ownerName, tenamentNo, streetAddress, area, amount, status: "Pending" })
        await bills.save();
        res.status(200).json({
            success: true,
            message: "Bill Added..",
        })

    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

// FOr Get PEnding BIlls 
router.get("/getpendingbill", async (req, res) => {
    try {
        const bill = await Bills.find({ status: "Pending" })
        res.status(200).json(bill)
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})
// For Paid Bills
router.get("/getpaidbill", async (req, res) => {
    try {
        const bill = await Bills.find({ status: "Paid" })
        res.status(200).json(bill)
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})
// For Paying Bill
router.post('/paybills', isAuthenticate, async (req, res) => {
    try {
        const bills = await Bills.findById(req.body.bid)
        const User = await UserModel.findById(req.body.uid)
        if (!bills) {
            return res.status(401).json({ message: "Bills Not Found" })
        }
        if (!User) {
            return res.status(401).json({ message: "User Not Found" })
        }
        console.log(bills)
        console.log(User)

        User.paidBills.push(bills)
        await User.save()
        bills.status = "Paid"
        await bills.save()
        res.status(200).json({
            success: true,
            message: "bill Successfully Paid"
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})


// For Search Bill
router.post("/searchbills", async (req, res) => {
    try {
        const tenamentNo = req.body.tno;
        const billType = req.body.billType

        const bill = await Bills.find({ tenamentNo, billType, status: "Pending" })

        if (bill < 1) {
            return res
                .status(404)
                .json({message:"Invalid Input Enterd or No bill due.... "})
        }
        res.status(200).send(bill)
    } catch (error) {

        res.status(500).json({
            error: error.message
        })
    }
})




module.exports = router