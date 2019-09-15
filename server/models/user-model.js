const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        username: {type: String, required: true},
        password: {type: String, required: true},
        email: {type: String, required: false},
        bio: {type: String, required: false},
        image: {type: String, required: false},
        status: {type: String, required: false, default: '0'}
    },
    { timestamps: true }
)

module.exports = mongoose.model('users', User)