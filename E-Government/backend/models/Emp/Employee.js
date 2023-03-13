const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const jwt = require('jsonwebtoken');

const EmpSchema = new mongoose.Schema({
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
    dept :{
        type:String,
        required:true,
    }
})



// generate token
EmpSchema.methods.generateEmpToken = async function () {
    try {
        let emptoken = jwt.sign({ _id: this._id }, process.env.EMP_SECRET_KEY)
        return emptoken;
    } catch (error) {
        console.log(error)
    }
}

const Employee = mongoose.model("Employee", EmpSchema);
module.exports = Employee;