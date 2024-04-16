const mongoose = require("mongoose")
const SubmissionSchema = new mongoose.Schema(
    {
        sleepAccessory: {
            type: String, 
            required: true,
            unique: false
        }
    }, {timestamps: true}
)

const Submission = mongoose.model("Submission", SubmissionSchema)
module.exports = Submission