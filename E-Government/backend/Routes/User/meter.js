const express = require('express');
const MeterApply = require('../../models/Services/MeterApply');
const router = express.Router();
const cloudinary = require('cloudinary')
const multer = require('multer');
const { isAuthenticate } = require('../../middlewares/Adminmiddle');


// For Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'PDF')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/meterreq', upload.single('file'), async (req, res) => {

    try {
        const proof = (req.file) ? req.file.filename : null
        const { name, email, phone, meterType, tenamentNo, city, streetAddress, area } = req.body.data
        const status = "Requested"
        const meter = new MeterApply({ name, email, phone, meterType, tenamentNo, city, streetAddress, area, proof, status: status })
        await meter.save();
        res.status(200).json({
            message: "Successfully Added",
            meter: meter
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

})

router.get('/getmeterreq', isAuthenticate, async (req, res) => {
    try {
        const request = await MeterApply.find({ status: "Requested" })
        if (!request) {
            return res.status(404).json({ message: "Meter Request Not Found" })
        }
        else {
            res.status(200).json(request)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.post("/accmeterreq/:_id", isAuthenticate, async (req, res) => {
    try {
        const request = await MeterApply.findById(req.params._id)
        if (!request) {
            return res.status(400).json({ message: "Meter Request  Not Found" })
        }
        else {
            request.status = "Accepted"
            await request.save();
            res.status(200).
                json({
                    success: true,
                    message: "successfully confirmed",
                })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})






module.exports = router