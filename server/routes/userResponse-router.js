const express = require('express')

const UserResponseCtrl = require('../controllers/userResponse-ctrl')

const router = express.Router()

router.post('/userResponse', UserResponseCtrl.createUserResponse)
router.put('/userResponse/:id', UserResponseCtrl.updateUserResponse)
router.delete('/userResponse/:id', UserResponseCtrl.deleteUserResponse)
router.get('/userResponse/:id', UserResponseCtrl.getUserResponseById)
router.get('/userResponse', UserResponseCtrl.getUserResponse)

module.exports = router