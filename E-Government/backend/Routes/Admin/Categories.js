const express = require('express')
const router = express.Router();
const { body, validationResult, } = require('express-validator');
const { isAuthenticate } = require("../../middlewares/Adminmiddle");
const { ComplaintCat } = require('../../models/Admin/Categories');

router.post('/addcomplaint', [
    body('complainttype', "Plaese Fill the field").notEmpty()
], isAuthenticate, async (req, res) => {
    // if there are error then send bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(404).json({ errors: errors.array() });
    }

    const { complainttype } = req.body;

    const chcomplainttype = await ComplaintCat({complainttype})

    try {
        if (chcomplainttype) {
            res.status(400).json({ error: "ComplaintType is already Exist" })
        }
        else {
            const add = await ComplaintCat.create({ complainttype})
            add.save();
            res.status(201).json()
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

module.exports = router