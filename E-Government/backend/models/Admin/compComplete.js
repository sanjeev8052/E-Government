const mongoose = require('mongoose')

const compCompleteSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    complaintType: {
        type: String,
        require: true
    },
    city: {
        type: String,
        require: true
    },
    streetAddress: {
        type: String,
        require: true
    },
    area: {
        type: String,
        require: true
    },
    pincode: {
        type: Number,
        require: true
    },
    complaintDesc: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    empName: {
        name: String,
        require: true
    },
    empEmail: {
        email: String,
        require: true
    }
})


module.exports = mongoose.model("compComplete", compCompleteSchema)