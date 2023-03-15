const  mongoose = require("mongoose");

const BlockUser = mongoose.Schema({
    avatar: {
        type: String,
        public_id: String,
        url: String
    },
    name: {
        type: String,
        required: [true],
    },
    phone: {
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

    gender: String,
    DOB: Date,
    houseName: String,
    societyName: String,
    Address: String,
    city: String,
    state: String,
    aadhaarId: Number,

});

module.exports = mongoose.model("blockUser",BlockUser);