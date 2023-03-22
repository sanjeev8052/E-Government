const express = require('express');
const multer = require('multer');
const router = express.Router();
const { isAuthenticate } = require('../../middlewares/Adminmiddle');
const Cast = require('../../models/Services/CastCer');
const { sendEmail } = require('../../middlewares/sendEmail')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'PDF')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

// For Add Cast Request
router.post('/castreq', upload.single('file'), async (req, res) => {

    try {
        const proof = (req.file) ? req.file.filename : null
        const data = req.body.data
        const object = JSON.parse(data)
        const randomNum = Math.floor(Math.random() * 1000000) + 1;

        const { name, email, phone, address, fatherName, motherName, cast } = object
        //    console.log(object)
        const status = "Requested"
        const castcer = new Cast({ name, email, phone, address, fatherName, motherName, cast, proof, status: status, uniqueId: randomNum })
        await castcer.save();
        res.status(200).json({
            message: "Successfully Added",
            castcer: castcer
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }

})

// For Get Cast cer Request
router.get('/getcastreq', isAuthenticate, async (req, res) => {
    try {
        const request = await Cast.find({ status: "Requested" })
        if (!request) {
            return res.status(404).json({ message: "Cast Certificate Request Not Found" })
        }
        else {
            res.status(200).json(request)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Accept Request
router.post("/acccastcerreq/:_id", isAuthenticate, async (req, res) => {
    try {
        const request = await Cast.findById(req.params._id)
        if (!request) {
            return res.status(400).json({ message: "Cast Certificate Request  Not Found" })
        }
        else {
            request.status = "Accepted"
            await request.save();
            res.status(200).
                json({
                    success: true,
                    message: "successfully Accepted Cast Certificae Request",
                })
            const message = `Your Cast Certificate Request is Accepted and Here is the ID is ${request.uniqueId} For Download Certificate`
            await sendEmail({
                email: request.email,
                subject: "Cast Certificate Accepted...",
                message
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

// For Reject Request
router.delete("/rejcastcerreq/:_id", isAuthenticate, async (req, res) => {
    try {
        const request = await Cast.findById(req.params._id)
        if (!request) {
            return res.status(400).json({ message: "Cast Cretificate Request Not Found" })
        }
        const rejectmeter = await Cast.deleteOne({ _id: req.params._id })

        res.status(200).json({
            success: true,
            message: "Successfully Rejected Cast Certificate Request"

        })
        const message = `Your Cast Certificate Request is Rejected Because of Proof is not Valid`
        await sendEmail({
            email: request.email,
            subject: "Cast Certificate Rejected...",
            message
        });
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/getacccastcerreq', isAuthenticate, async (req, res) => {
    try {
        const request = await Cast.find({ status: "Accepted" })
        if (!request) {
            return res.status(404).json({ message: "Cast Certificate Request Not Found" })
        }
        else {
            res.status(200).json(request)
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})


module.exports = router