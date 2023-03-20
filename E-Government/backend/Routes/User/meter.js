const express = require('express');
const MeterApply = require('../../models/Services/MeterApply');
const router = express.Router();
const cloudinary = require('cloudinary')
const multer = require('multer')
// router.post('/meterApplyReq', async (req, res) => {
//     try {

//         const file = req.files.image

//         if (!file) {
//             return res.send('file not found ')
//         }

//         const { name, email, phone, meterType, tenamentNo, city, streetAddress, area } = req.body

//         const { public_id, url } = await cloudinary.uploader.upload(file.tempFilePath, {
//             folder: "meter_proof"
//         })


//         const data = {
//             name,
//             email,
//             phone,
//             meterType,
//             tenamentNo,
//             city,
//             streetAddress,
//             area,
//             proof:{
//                 url:url,
//                 public_id:public_id
//             }
//         }
//         const meter = await MeterApply.create(data)

//         res.send(user)
//     } catch (error) {
//         res.send(error)
//     }


// })

// For Multer Storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../PDF/Meter')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname)
    }
})

const upload = multer({ storage: storage })

router.post('/req', upload.single('myFile'), async (req, res) => {

    try {
        const proof = (req.file) ? req.file.filename : null
        const { name, email, phone, meterType, tenamentNo, city, streetAddress, area } = req.body
        const meter = new MeterApply({ name, email, phone, meterType, tenamentNo, city, streetAddress, area, proof })
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



module.exports = router