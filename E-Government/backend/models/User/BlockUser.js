const  mongoose = require("mongoose");
const bcrypt = require('bcrypt')

const blockUserSchema = mongoose.Schema({
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

    

});
blockUserSchema.pre("save", async function(next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 10);
    }

    next();
})


module.exports = mongoose.model("blockUser",blockUserSchema);