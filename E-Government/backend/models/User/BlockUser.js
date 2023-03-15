const  mongoose = require("mongoose");

const BlockUser = mongoose.Schema({
    name: {
        type: String,
        required: [true,'Name is required'],
    },
    mobile: {
        type: Number,
        required: true,
     
    },
    email: {
        type: String,
        required: true,
        
    },
    password: {
        type: String,
        required: true,
       
    },
});

module.exports = mongoose.model("blockUser",BlockUser);