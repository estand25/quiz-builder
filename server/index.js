const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')

const userRouter = require('./routes/user-router')
const quizRouter = require('./routes/quiz-router')
const questionRouter = require('./routes/question-router')
const userResponseRouter = require('./routes/userResponse-router')
const scoreRouter = require('./routes/score-router')

const app = express()
const apiPost = 3000

app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/api', questionRouter)
app.use('/api', quizRouter)
app.use('/api', scoreRouter)
app.use('/api', userRouter)
app.use('/api', userResponseRouter)

app.listen(apiPost, () => console.log(`Server running on part ${apiPost}`))