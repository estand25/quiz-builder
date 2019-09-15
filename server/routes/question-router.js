const express = require('express')

const QuesetionCtrl = require('../controllers/question-ctrl')

const router = express.Router()

router.post('/question', QuesetionCtrl.createQuestion)
router.put('/question/:id', QuesetionCtrl.updateQuestion)
router.delete('/question/:id', QuesetionCtrl.deleteQuestion)
router.get('/question/:id',  QuesetionCtrl.getQuestionById)
router.get('/question', QuesetionCtrl.getQuestion)

module.exports = router