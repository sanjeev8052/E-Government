const  mongoose = require("mongoose");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

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
        select:false,
    },

    resetPasswordToken:String,
    resetPasswordExpire: Date

});
BlockUser.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})

BlockUser.methods.matchPassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

BlockUser.methods.generateToken = async function(){
    return jwt.sign({_id:this._id}, process.env.SECRET_KEY)
}

BlockUser.methods.getResetPasswordToken = async function(){

    const resetToken = crypto.randomBytes(20).toString('hex')
    this.resetPasswordToken  = crypto.createHash("sha256").update(resetToken).digest('hex')
    this.resetPasswordExpire = Date.now() + 10 + 60 + 1000 ;
    return resetToken
}

module.exports = mongoose.model("blockUser",BlockUser);