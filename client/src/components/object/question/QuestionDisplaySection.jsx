import React from 'react'
import styled from 'styled-components'
import OptionObj from '../OptionObj'
import QuestionModifyObj from '../question/QuestionModifyObj'

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


const QuestionDisplaySection = (props) => {
    if(!props.status){
        var oAnswer = ''

        for(const option of Object.entries(props.options)){        
            if(Object.getOwnPropertyNames(option[1]).toString() === props.cAnswer){
                Object.getOwnPropertyNames(option[1]).forEach(
                    function(val){
                        oAnswer = option[1][val]
                    }
                )
            }
        }
    
        return(
            <Row>
                <Label>{props.questionTitle}
                    {props.question}
                </Label>
                <Label>{props.opTitle}
                    {OptionObj(props, props.options)}
                </Label>
                <Label>{props.cAnswerTitle}
                    <GeneralButton>
                        {oAnswer}
                    </GeneralButton>
                </Label>
                <Label>{props.qQuizTitle}
                    {props.qQuiz}
                </Label>
                <Label>{props.qPointTitle}
                    {props.qPoint}
                </Label>
                <Label>{props.qOrderTitle}
                    {props.qOrder}
                </Label>
                <Label>{props.qStatusTitle}
                    {props.qStatus == "0" ? "Turn Off":"Turn On"}
                </Label>
            </Row>
        ) 
    } else{
        return (
            <div>
                <QuestionModifyObj

                />
            </div>
        )
    }
  
}

export default QuestionDisplaySection