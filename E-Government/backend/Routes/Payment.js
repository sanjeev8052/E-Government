const express = require('express')
const { instance } = require('../app')

const router = express.Router()

router.post('/checkout', async (req, res) => {
    try {
        var options = {
            amount:50000  ,// amount in the smallest currency unit
            currency: "INR",
        };
        const payment = await instance.orders.create(options);
        console.log(payment)
        res.status(200).json({
            success: true,
            payment
        })

    } catch (error) {
        console.log(error)
    }
})

router.post('/paymentVerification', async (req, res) => {
    try {
        console.log(req.body) 
        res.status(200).json({
            success: true,
        })

    } catch (error) {
        console.log(error)
    }
})


module.exports = router
