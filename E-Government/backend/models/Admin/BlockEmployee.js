const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const BlockEmpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true

    },
    gender: {
        type: String,
        required: true

    },
    phone: {
        type: Number,
        required: true

    },
    password: {
        type: String,
        required: true

    },
   
})



const Bloackemployee = mongoose.model("Blockemployee", BlockEmpSchema);
module.exports = Bloackemployee;