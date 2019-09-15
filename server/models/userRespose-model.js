const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserResponse = new Schema(
    {
        response: String,
        questionId: String,
        userId: String
    },
    { timestamps: true }
)

module.exports = mongoose.model('userResponse', UserResponse)