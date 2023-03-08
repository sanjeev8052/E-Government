const express = require('express')
const router = express.Router();
const { body, validationResult, } = require('express-validator');
const { isAuthenticate } = require("../../middlewares/Adminmiddle");
const { ComplaintCat } = require('../../models/Admin/Categories');

router.post('/addcomplaint', [
    body('complaintType', "Plaese Fill the field").notEmpty()
], isAuthenticate, async (req, res) => {
    // if there are error then send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { complaintType } = req.body;

    const chcomplainttype = await ComplaintCat.findOne({ complaintType })

    try {
        if (chcomplainttype) {
            res.status(400).json({ error: "ComplaintType is already Exist" })
        }
        else {
            const add = await ComplaintCat.create({ complaintType })
            add.save();
            res.status(201).json({
                success: true,
                message: "Succefully Added"
            })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

router.get('/getcomplaintcat', isAuthenticate, async (req, res) => {
    try {
        const complaintcat = await ComplaintCat.find({})
        res.status(200).send(complaintcat)
    } catch (error) {
        res.status(500).json({ success: false, Error: error.message })
    }
})


router.delete("/deletecomplaintcat/:_id", isAuthenticate, async (req, res) => {
    try {
        const complaintcat = await ComplaintCat.findById(req.params._id)
        if (!complaintcat) {
            res.status(401).json({
                success: true,
                message: "Complaint Category Not Found"
            })
        }
        const deletecat = await ComplaintCat.deleteOne({ _id: req.params._id })
        
        res.status(200).json({
            success: true,
            message: "Su1ccessfully Delete Complaint Category "
            
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
})
module.exports = router