import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import api from '../../../api'

const Wrappper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`
const Label = styled.label`
    margin: 5px;
    font-size: 20px;
`

const ScoreObj = (props) => {
    const [quizTitle, setQuiz] = useState('')
    const [questionCount, setQuestionCount] = useState('')

    useEffect(
        () => {
            api.getAllQuestion().then(q => {
                var allQuestion = q.data.data

                var allScoreQuestion = allQuestion
                    .filter(al => al.quizId === props.qId)
                    
                setQuestionCount(allScoreQuestion.length)              
            })
            
            api.getQuizById(props.qId).then(q => {              
                setQuiz(q.data.data.name);
            })
        },[props.qId]
    )

    return (
        <Wrappper>
            <Label>{'Score: '}{props.score}</Label>
            <Label>{'Quiz: '}{quizTitle}</Label>
            <Label>{'Question Count: '}{questionCount}</Label>
        </Wrappper>
    )
}

export default ScoreObj