const express = require('express');
const multer = require('multer');
const router = express.Router();
const { isAuthenticate } = require('../../middlewares/Adminmiddle');
const Income = require('../../models/Services/IncomeCer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'PDF')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

// For Add Income Request
router.post('/incomereq',  upload.single('file'), async (req, res) => {

    try {
        const proof = (req.file) ? req.file.filename : null
        // const data = req.body.data
        // const object = JSON.parse(data)
        const randomNum = Math.floor(Math.random() * 1000000) + 1;

        const { name, email, phone, address, fatherName, motherName, income } = req.body
    //    console.log(object)
         const status = "Requested"
         const cer = new Income({ name, email, phone, address, fatherName, motherName, income, proof, status: status , uniqueId: randomNum })
         await cer.save();
         res.status(200).json({
             message: "Successfully Added",
            cer :cer
         })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

})

// For Get Income cer Request
router.get('/getincomereq', isAuthenticate, async (req, res) => {
    try {
        const request = await Income.find({ status: "Requested" })
        if (!request) {
            return res.status(404).json({ message: "Income Certificate Request Not Found" })
        }
        else {
            res.status(200).json(request)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Accept Request
router.post("/accincomecerreq/:_id", isAuthenticate, async (req, res) => {
    try {
        const request = await Income.findById(req.params._id)
        if (!request) {
            return res.status(400).json({ message: "Income Certificate Request  Not Found" })
        }
        else {
            request.status = "Accepted"
            await request.save();
            res.status(200).
                json({
                    success: true,
                    message: "successfully Accepted Income Certificae Request",
                })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Reject Request
router.delete("/rejincomecerreq/:_id", isAuthenticate, async (req, res) => {
    try {
        const request = await Income.findById(req.params._id)
        if (!request) {
            return res.status(400).json({ message: "Income Cretificaate Request Not Found" })
        }
        const rejectmeter = await Income.deleteOne({ _id: req.params._id })

        res.status(200).json({
            success: true,
            message: "Successfully Rejected Income Certificate Request"

        })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/getaccincomecerreq', isAuthenticate, async (req, res) => {
    try {
        const request = await Income.find({ status: "Accepted" })
        if (!request) {
            return res.status(404).json({ message: "Income Certificate Request Not Found" })
        }
        else {
            res.status(200).json(request)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = router