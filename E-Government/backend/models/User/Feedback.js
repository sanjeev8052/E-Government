const mongoose = require("mongoose");
const FeedbackSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    feedback: {
        type: String,
        required: [true, 'Feedback is required'],
    },
    date:Date
})

const Feedback = mongoose.model("feedback", FeedbackSchema)
module.exports = Feedback