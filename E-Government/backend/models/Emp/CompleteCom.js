const mongoose = require("mongoose");


const CompleteSchema = mongoose.Schema({
    city: {
        type:String,
        required:true
    },
    streetAddress: {
        type:String,
        required:true
    },
    area: {
        type:String,
        required:true
    },
    complaintDesc: {
        type:String,
        required:true
    },
    dept:{
        type:String,
        required:true
    },
    emp:{
        type:String,
        required:true
    },
})

const CompleteComplaint = mongoose.model("completecomplaint", CompleteSchema)
module.exports = CompleteComplaint