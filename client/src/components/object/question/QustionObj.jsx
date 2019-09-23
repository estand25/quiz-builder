import React, {useState} from 'react'
import styled from 'styled-components'
import QuestionDisplaySection from './QuestionDisplaySection'
import ModifyBtnObj from '../ModifyBtnObj'

const Wrappper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`

const QuestionObj = (props) => {
    const [status, setStatus ] = useState(false)

    const toEditQuestion = () => {
        console.log('Edit Question');
        var currentStatus = status ? false : true;
        setStatus(currentStatus)
    }

    const toDeleteQuestion = async () => {
        console.log('Delete Question');
    }

    return (
        <Wrappper>
            <ModifyBtnObj 
                Edit={toEditQuestion}
                Delete={toDeleteQuestion}
            />
            <QuestionDisplaySection
                questionTitle={'Question: '}
                question={props.question}
                opTitle={'Question Options: '}
                options={props.option}
                cAnswerTitle={'Correct Answer: '}
                cAnswer={props.cAnswer}
                qQuizTitle={'Quiz: '}
                qQuiz={props.qQuiz}
                qPointTitle={'Point: '}
                qPoint={props.qPoint}
                qOrderTitle={'Order: '}
                qOrder={props.qOrder}
                qStatusTitle={'Status: '}
                qStatus={props.qStatus}
            />
        </Wrappper>
    )
}

export default QuestionObj