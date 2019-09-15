const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Quiz = new Schema(
    {
        name: String,
        description: String,
        type: {type: String, default: 'picker'},
        status: { type: Number, default: 1 }
    },
    { timestamps: true }   
)

module.exports = mongoose.model('quizzes', Quiz)