const Question = require('../models/question-model')
const Quiz = require('../models/quiz-model')

createQuestion = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'You must provide a question',
        })
    }

    const question = new Question(body)

    if(!question){
        return res.status(400).json({
            success: false,
            message: err
        })
    }

    question 
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: question._id,
                message: 'Question Created!',
            })
        })
}

updateQuestion = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'Your must provide a valid body to update',
        })
    }

    Question.findOne({ _id: req.params.id }, (err, question) => {
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })
        }

        if(body.answer !== undefined)
            question.answer = body.answer
        else   
            question.answer = question.answer
        
        if(body.options !== undefined)
            question.options = body.options
        else
            question.options = question.options
        
        if(body.quizId !== undefined)
            question.quizId = body.quizId
        else
            question.quizId = question.quizId

        if(body.status !== undefined)
            question.status = body.status
        else
            question.status = question.status

        if(body.question !== undefined)
            question.question = body.question
        else
            question.question = question.question

        if(body.order !== undefined)
            question.order = body.order
        else
            question.order = question.order

        if(body.point !== undefined)
            question.point = body.point
        else
            question.point = question.point

        question
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: question._id,
                    message: 'Question updated!'
                })
            })
            .catch( error => {
                return res.status(404).json({
                    success: false,
                    message: 'Question not updated!'
                })
            })
    })
}

deleteQuestion = async (req, res) => {
    await Question.findOneAndDelete(
        { _id: req.params.id }, (err, question) => {
            if(err){
                return res.status(400).json({ 
                    success: false, 
                    message: err
                })
            }

            if(!question){
                return res
                    .status(404).json({ 
                        success: false, 
                        message: `Note not found` })
            }

            return res.status(200).json({ 
                success: true, 
                data: question 
            })
        }).catch(err => console.log(err))
}

getQuestionById = async (req, res) => {
    await Question.findOne({ _id: req.params.id }, (err, question) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!question){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Question not found` 
                })
        }

        Quiz.findOne({_id: question.quizId}, (err1, quiz) =>{
            if(err1){
                return res.status(400).json({ 
                    success: false, 
                    message: err1
                })
            }
    
            if(!quiz){
                return res
                    .status(404).json({ 
                        success: false, 
                        message: `Quiz for question not found` 
                    })
            }

            var nQues = {}
            nQues.quizName = quiz.name
            nQues.quizDescription = quiz.description
            
            return res.status(200).json({
                success: true, 
                data: question,
                dataExtra: nQues
            })
            
        })
    }).catch(err => console.log(err))    
}

getQuestion = async (req, res) => {
    await Question.find({}, (err, question) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!question.length){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Note not found` 
                })
        }

        var nQues = []
        Quiz.find({}, (err1, quizzies) => {
            if(err1){
                return res.status(400).json({ 
                    success: false, 
                    message: err1
                })
            }
    
            if(!quizzies.length){
                return res
                    .status(404).json({ 
                        success: false, 
                        message: `Quiz for questions not found` 
                    })
            }
            var nQue = {}
            var i = question.map(b => b.quizId)
            
            for(var id of i){
                nQue.quizName = quizzies.filter(a => a._id == id).map(q => q.name)
                nQue.quizDescription = quizzies.filter(a => a._id == id).map(q => q.description)
                nQues.push(nQue)
            }

            return res
                .status(200).json({ 
                    success: true, 
                    data: question,
                    dataExtra: nQues
                })
        })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuestion,
    updateQuestion,
    deleteQuestion,
    getQuestionById,
    getQuestion
}