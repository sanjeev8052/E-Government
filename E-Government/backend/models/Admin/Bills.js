const mongoose = require('mongoose')

const billSchema = mongoose.Schema({
    billType:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:true
    },
    tenamentNo:{
        type:Number,
        required:true
    },
    streetAddress:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    date:Date,
    status:String,

})

const Bills = mongoose.model("bills" ,billSchema)
module.exports = Bills