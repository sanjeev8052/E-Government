const express = require("express");
const { isAuthenticate } = require('../../middlewares/Adminmiddle');
const Bills = require("../../models/Admin/Bills");
const UserModel = require("../../models/User/UserModel");
const router = express.Router();

// FOr Add Bills
router.post("/addbills", async (req, res) => {
    try {
        const { billType, ownerName, tenamentNo, streetAddress, area, amount } = req.body;
        const findBill = await Bills.find({ tenamentNo: tenamentNo, billType, status: "Pending" }).sort({ _id: -1 })

        if (findBill) {

            const create = {
                billType, ownerName, tenamentNo, streetAddress, area, amount,
                status: "Pending",
                pastDueAmt: findBill[0].totelAmt,
                totelAmt: findBill[0].totelAmt + amount,

            }
            const bill = await Bills.create(create)
            res.send(false)
            console.log(bill)
            return
        }

        // const create = {
        //     billType, ownerName, tenamentNo, streetAddress, area, amount,
        //     status: "pending",
        //     pastDueAmt: 00,
        //     totelAmt: amount,

        // }
        // const bill = await Bills.create(create)

        res.send(true)
    } catch (error) {
        res
            .status(500)
            .json({ success: false, Error: error.message })
    }
})

// FOr Get PEnding BIlls 
router.post("/getpendingbill", async (req, res) => {
    try {
        const bill = await Bills.findOne({ status: "Pending" })


        for (var i = 0; i < bill.length; i++) {
            bill[i].status = "Paid"
            
        }
  
        res.status(200).json(bill)
        
                console.log(bill)
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
                .json({ message: "Invalid Input Enterd or No bill due.... " })
        }
        res.status(200).send(bill.reverse())
    } catch (error) {

        res.status(500).json({
            error: error.message
        })
    }
})




module.exports = router