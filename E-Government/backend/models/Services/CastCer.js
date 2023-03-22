const mongoose = require('mongoose')

const CastSchema = mongoose.Schema({
    uniqueId: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: Number,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    fatherName: {
        type: String,
        require: true
    },
    motherName: {
        type: String,
        require: true
    },
    proof: {
        type: String,
        require: true
    },
    cast: {
        type: String,
        require: true
    },
    status: String
})

const Cast = mongoose.model("cast", CastSchema)
module.exports = Cast