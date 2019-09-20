import React from 'react'
import styled from 'styled-components'
import OptionObj from '../OptionObj'
import ModifyBtnObj from '../ModifyBtnObj'
import api from '../../../api'

const Wrappper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`
const Row = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`
const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const GeneralButton = styled.button`
    color: gray;
    font-size: 1em;
    margin: 5px;
    padding: 5px;
    border: 2px solid gray;
    border-radius: 3px;
`;

const OptionObjSelect = (props) => {
    var oAnswer = ''

    for(const option of Object.entries(props.options)){
        var item = option[1]
        
        if(Object.getOwnPropertyNames(item).toString() === props.cAnswer){
            Object.getOwnPropertyNames(item).forEach(
                function(val){
                    // console.log(item[val]);
                    oAnswer = item[val]
                }
            )
        }
    }

    var quizName = ''
    // api.getQuizById(props.qQuiz).then(res => {
    //     if(res.data.success == true){
    //         var quiz = res.data.data

    //         quizName = quiz.name

    //         console.log(quiz);
    //         console.log(quizName);

            
    //     }
    // })
           
    return(
        <Row>
            <Label>{props.question}</Label>
            <Label>{props.opTitle}{OptionObj(props, props.options)}</Label>
            <Label>{props.cAnswerTitle}
                <GeneralButton>{oAnswer}</GeneralButton>
            </Label>
            <Label>{props.qQuizTitle}
                {props.qQuiz}
            </Label>
        </Row>
    ) 
}

const QuestionObj = (props) => {
    return (
        <Wrappper>
            <ModifyBtnObj 
                Edit={props.onEditHandle}
                Delete={props.onDeleteHandle}
            />
            <OptionObjSelect
                question={props.question}
                opTitle={props.opTitle}
                cAnswerTitle={props.cAnswerTitle}
                cAnswer={props.cAnswer}
                qQuizTitle={props.qQuizTitle}
                qQuiz={props.qQuiz}
                options={props.option}
            />
        </Wrappper>
    )
}

export default QuestionObj