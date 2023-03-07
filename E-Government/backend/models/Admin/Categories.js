const mongoose = require("mongoose")

const complaintCatSchema = new mongoose.Schema({
    comlaintType : {
        type:String,
        required : true
    }
})
const billsCatSchema = new mongoose.Schema({
    billsCat: {
        type:String,
        required : true
    }
})

const CertificateCatSchema = new mongoose.Schema({
    certificateCat : {
        type:String,
        required : true
    }
})
const MeterCatSchema = new mongoose.Schema({
    meterCat : {
        type:String,
        required : true
    }
})


 export const ComplaintCat = mongoose.model("complaintcat" , complaintCatSchema)
 export const BillsCat = mongoose.model("billscat" , billsCatSchema)
 export const CertificateCat = mongoose.model("certificatecat" , CertificateCatSchema)
 export const MeterCat = mongoose.model("metercat" , MeterCatSchema)