const express = require('express');
const MeterApply = require('../../models/Services/MeterApply');
const router = express.Router();
const cloudinary = require('cloudinary')

router.post('/meterApplyReq', async (req, res) => {
    try {
        
        const file = req.files.image
        
        if (!file) {
            return res.send('file not found ')
        }
        
        const { name, email, phone, meterType, tenamentNo, city, streetAddress, area } = req.body
        
        const { public_id, url } = await cloudinary.uploader.upload(file.tempFilePath, {
            folder: "meter_proof"
        })
        
     
        const data = {
            name,
            email,
            phone,
            meterType,
            tenamentNo,
            city,
            streetAddress,
            area,
            proof:{
                url:url,
                public_id:public_id
            }
        }
        const meter = await MeterApply.create(data)

        res.send(user)
    } catch (error) {
        res.send(error)
    }


})


module.exports = router