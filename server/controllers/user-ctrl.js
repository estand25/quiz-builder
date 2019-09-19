const User = require('../models/user-model')

createUser = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide Sign-In Information',
        })
    }

    const user = new User(body)

    if(!user){
        return res.status(400).json({
            success: false,
            error: err
        })
    }       
        
    User.findOne({username: req.body.username}, (err, user_) => {
        if(err) {
            console.log(err);
            return res.status(400).json({
                success: false,
                error: err
            })
        }
        
        if(user_) {
            return res.json({
                success: false,
                error: "user exists"
            });

        } else {
            user
                .save()
                .then(() => {
                    return res.status(201).json({
                        success: true,
                        data: user,
                    })
                })
        }

    })
}

updateUser = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to'
        })
    }

    User.findOne({_id: req.params.id}, (err,user) => {
        if(err) {
            return res.status(404).json({
                success: false,
                error: err,
            })
        }

        if(body.username !== undefined)
            user.username = body.username
        else
            user.username = user.username
        
        if(body.email !== undefined)
            user.email = body.email
        else   
            user.email = user.email
        
        if(body.bio !== undefined)
            user.bio = body.bio
        else
            user.bio = user.bio

        if(body.image !== undefined)
            user.image = body.image
        else
            user.image = user.image
        
        if(body.status !== undefined)
            user.status = body.status
        else
            user.status = user.status

        user   
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    data: user,
                })
            })
            .catch( error => {
                return res.status(404).json({
                    success: false,
                    error: error,
                })
            })
    })
}

deleteUser = async(req,res) => {
    await User.findOneAndDelete({ _id: req.params.id }, (err,user) => {
            if(err){
                return res.status(400)
                    .json({
                        success: false,
                        message: err
                    })
            }

            if(!user){
                return res
                    .status(404)
                    .json({
                        success: false,
                        message: 'User not found'
                    })
            }

            return res
                .status(200)
                .json({
                    success: true,
                    data: user
                })
        }
    ).catch(err => console.log(err))
}

getUserById = async (req,res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if(err){
            return res.status(400)
                .json({
                    success: false,
                    error: err
                })
        }

        if(!user){
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'User not found'
                })
        }

        return res
            .status(200)
            .json({
                success: true,
                data: user
            })
    }).catch(err => console.log(err))
}

userSignIn = async (req, res) => {
    const body = req.body

    if(!body.username && 
        !body.password){
        return res.status(400).json({
            success: false,
            error: 'You must provide a username or/and password'
        })
    }

    User.findOne({username: body.username}, (err, _user) => {
        if(err) {
            return res.status(404).json({
                success: false,
                error: err,
            })
        }
        
        if(!_user){
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'User not found'
                })
        } else {
            User.findOne({password: body.password}, (_err,_user_) => {
                if(_err) {
                    return res.status(404).json({
                        success: false,
                        error: _err,
                    })
                }

                if(!_user_){
                    return res
                        .status(404)
                        .json({
                            success: false,
                            error: 'User not found'
                        })
                }
                
                if(_user_.status == "1"){
                    return res
                        .status(404)
                        .json({
                            success: false,
                            error: 'User is already Logged-In'
                        })
                }

                _user_.status = "1"
        
                _user_   
                    .save()
                    .then(() => {
                        return res
                            .status(200)
                            .json({
                                success: true,
                                data: _user_
                            })
                    })
                    .catch( error => {
                        return res.status(404).json({
                            success: false,
                            error: error
                        })
                    })

            })
        }
    })
}

userSignOut = async (req, res) => {
    const body = req.body

    if(!body.username && 
        !body.password){
        return res.status(400).json({
            success: false,
            error: 'You must provide a username or/and password'
        })
    }

    User.findOne({username: body.username}, (err, _user) => {
        if(err) {
            return res.status(404).json({
                success: false,
                error: err,
            })
        }
        
        if(!_user){
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'User not found'
                })
        } else {
            User.findOne({password: body.password}, (_err,_user_) => {
                if(_err) {
                    return res.status(404).json({
                        success: false,
                        error: _err,
                    })
                }

                if(!_user_){
                    return res
                        .status(404)
                        .json({
                            success: false,
                            error: 'User not found'
                        })
                }
                
                if(_user_.status == "0"){
                    return res
                        .status(400)
                        .json({
                            success: false,
                            error: 'User is not Logged-In'
                        })
                }

                _user_.status = "0"
        
                _user_   
                    .save()
                    .then(() => {
                        return res
                            .status(200)
                            .json({
                                success: true,
                                data: _user_
                            })
                    })
                    .catch( error => {
                        return res.status(404).json({
                            success: false,
                            error: error
                        })
                    })

            })
        }
    })
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById,
    userSignIn,
    userSignOut
}