const Score = require('../models/score-model')

createScore = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'You must provide a score',
        })
    }

    const score = new Score(body)

    if(!score){
        return res.status(400).json({
            success: false,
            message: err
        })
    }

    score 
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: score._id,
                message: 'Score Created!',
            })
        })
}

updateScore = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'Your must provide a valid body to update',
        })
    }

    Score.findOne({ _id: req.params.id }, (err, score) => {
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })
        }


        if(body.quizId !== undefined)
            score.quizId = body.quizId
        else
            score.quizId = body.quizId

        if(body.userId !== undefined)    
            score.userId = body.userId
        else
            score.userId = score.userId
        
        if(body.score !== undefined)    
            score.score = body.score
        else
            score.score = score.score
        
        if(score.nonAnswered !== undefined)
            score.nonAnswered = body.nonAnswered
        else
            score.nonAnswered = score.nonAnswered
            
        score
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: score._id,
                    message: 'Score updated!'
                })
            })
            .catch( error => {
                return res.status(404).json({
                    success: false,
                    message: 'Score not updated!'
                })
            })
    })
}

deleteScore = async(req, res) => {
    await Score.findOneAndDelete(
        { _id: req.params.id }, (err, score) => {
            if(err){
                return res.status(400).json({ 
                    success: false, 
                    message: err
                })
            }

            if(!score){
                return res
                    .status(404).json({ 
                        success: false, 
                        message: `Note not found` })
            }

            return res.status(200).json({ 
                success: true, 
                data: score 
            })
        }).catch(err => console.log(err))
}

getScoreById = async (req, res) => {
    await Score.findOne({ _id: req.params.id }, (err, score) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!score){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Note not found` 
                })
        }

        return res.status(200).json({
            success: true, 
            data: score
        })
    }).catch(err => console.log(err))    
}

getScore = async (req, res) => {
    await Score.find({}, (err, score) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!score.length){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Note not found` 
                })
        }

        return res
            .status(200).json({ 
                success: true, 
                data: score 
            })
    }).catch(err => console.log(err))
}

module.exports = {
    createScore,
    updateScore,
    deleteScore,
    getScoreById,
    getScore
}