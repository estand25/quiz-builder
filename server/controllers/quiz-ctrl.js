const Quiz = require('../models/quiz-model')

createQuiz = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'You must provide a Quiz',
        })
    }

    const quiz = new Quiz(body)

    if(!quiz){
        return res.status(400).json({
            success: false,
            message: err
        })
    }

    quiz 
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: quiz._id,
                message: 'Quiz Created!',
            })
        })
}

updateQuiz = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'Your must provide a valid body to update',
        })
    }

    Quiz.findOne({ _id: req.params.id }, (err, quiz) => {
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })
        }

        if(body.name !== undefined)  
            quiz.name = body.name
        else
            quiz.name = quiz.name

        if(body.description !== undefined) 
            quiz.description = body.description
        else    
            quiz.description = quiz.description

        if(body.type !== undefined) 
            quiz.type = body.type
        else   
            quiz.type = quiz.type

        if(body.status !== undefined) 
            quiz.status = body.status
        else 
            quiz.status = quiz.status

        quiz
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: quiz._id,
                    message: 'Quiz updated!'
                })
            })
            .catch( error => {
                return res.status(404).json({
                    success: false,
                    message: error
                })
            })
    })
}

deleteQuiz = async(req,res) => {
    await Quiz.findOneAndDelete({ _id: req.params.id }, (err, quiz) => {
            if(err){
                return res.status(400).json({ 
                    success: false, 
                    message: err
                })
            }

            if(!quiz){
                return res
                    .status(404)
                    .json({ 
                        success: false, 
                        message: `Quiz not found` 
                    })
            }

            return res
                .status(200)
                .json({ 
                    success: true, 
                    data: quiz 
                })
        }).catch(err => console.log(err))
}

getQuizById = async (req, res) => {
    await Quiz.findOne({ _id: req.params.id }, (err, quiz) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!quiz){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Note not found` 
                })
        }

        return res.status(200).json({
            success: true, 
            data: quiz
        })
    }).catch(err => console.log(err))    
}

getQuiz = async (req, res) => {
    await Quiz.find({}, (err, quiz) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!quiz.length){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Note not found` 
                })
        }

        return res
            .status(200).json({ 
                success: true, 
                data: quiz 
            })
    }).catch(err => console.log(err))
}

module.exports = {
    createQuiz,
    updateQuiz,
    deleteQuiz,
    getQuizById,
    getQuiz
}