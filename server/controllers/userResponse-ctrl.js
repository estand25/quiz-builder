const UserResponse = require('../models/userRespose-model')

createUserResponse = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'You must provide a UserResponse',
        })
    }

    const userResponse = new UserResponse(body)

    if(!userResponse){
        return res.status(400).json({
            success: false,
            message: err
        })
    }

    userResponse 
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: userResponse._id,
                message: 'UserResponse Created!',
            })
        })
}

updateUserResponse = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            message: 'Your must provide a valid body to update',
        })
    }

    UserResponse.findOne({ _id: req.params.id }, (err, userResponse) => {
        if(err){
            return res.status(404).json({
                success: false,
                message: err
            })
        }

        if(body.response !== undefined)
            userResponse.response = body.response
        else
            userResponse.response = userResponse.response
        
        if(body.questionId !== undefined)
            userResponse.questionId = body.questionId
        else
            userResponse.questionId = userResponse.questionId
        
        if(body.userId !== undefined)
            userResponse.userId = body.userId
        else
            userResponse.userId = userResponse.userId

        userResponse
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: userResponse._id,
                    message: 'UserResponse updated!'
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

deleteUserResponse = async(req, res) => {
    await UserResponse.findOneAndDelete(
        { _id: req.params.id }, (err, userResponse) => {
            if(err){
                return res.status(400).json({ 
                    success: false, 
                    message: err
                })
            }

            if(!userResponse){
                return res
                    .status(404).json({ 
                        success: false, 
                        message: `Note not found` })
            }

            return res.status(200).json({ 
                success: true, 
                data: userResponse 
            })
        }).catch(err => console.log(err))
}

getUserResponseById = async (req, res) => {
    await UserResponse.findOne({ _id: req.params.id }, (err, userResponse) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!userResponse){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Note not found` 
                })
        }

        return res.status(200).json({
            success: true, 
            data: userResponse
        })
    }).catch(err => console.log(err))    
}

getUserResponse = async (req, res) => {
    await UserResponse.find({}, (err, userResponse) => {
        if(err){
            return res.status(400).json({ 
                success: false, 
                message: err
            })
        }

        if(!userResponse.length){
            return res
                .status(404).json({ 
                    success: false, 
                    message: `Note not found` 
                })
        }

        return res
            .status(200).json({ 
                success: true, 
                data: userResponse 
            })
    }).catch(err => console.log(err))
}

module.exports = {
    createUserResponse,
    updateUserResponse,
    deleteUserResponse,
    getUserResponseById,
    getUserResponse
}