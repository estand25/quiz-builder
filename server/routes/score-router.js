const express = require('express')

const ScoreCtrl = require('../controllers/score-ctrl')

const router = express.Router()

router.post('/score', ScoreCtrl.createScore)
router.put('/score/:id', ScoreCtrl.updateScore)
router.delete('/score/:id', ScoreCtrl.deleteScore)
router.get('/score/:id', ScoreCtrl.getScoreById)
router.get('/score', ScoreCtrl.getScore)

module.exports = router