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

const Edit = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
` 

const Cancel = styled.button.attrs({
    className: 'btn btn-danger',
})`
margin 15px 15px 15px 5px;
`
const QuestionDisplaySection = (props) => {
    if(!props.editStatus){
        var oAnswer = ''

        let option = null;
        let subItem = null;

        for(option of Object.entries(props.options)){ 
            subItem = option[1]       
            if(Object.getOwnPropertyNames(subItem).toString() === props.cAnswer){
                Object.getOwnPropertyNames(subItem).forEach(val =>
                        oAnswer = subItem[val]
                )
            }
        }
    
        return(
            <Row>
                <Label>{'Question: '}
                    {props.name}
                </Label>
                <Label>{'Question Options: '}
                    {OptionObj(props, props.options)}
                </Label>
                <Label>{'Correct Answer: '}
                    <GeneralButton>
                        {oAnswer}
                    </GeneralButton>
                </Label>
                <Label>{'Quiz: '}
                    {props.qQuiz}
                </Label>
                <Label>{'Point: '}
                    {props.qPoint}
                </Label>
                <Label>{'Order: '}
                    {props.qOrder}
                </Label>
                <Label>{'Status: '}
                    {props.qStatus === "0" ? "Turn Off":"Turn On"}
                </Label>
            </Row>
        ) 
    } else {
        return (
            <div>
                <QuestionModifyObj
                    name={props.name}
                    onNameChange={props.onNameChange}
                    option={props.option}
                    onOptionAdd={props.onOptionAdd}
                    onOptionAdding={props.onOptionAdding}
                    options={props.options}
                    onCorrectAnswerList={props.onCorrectAnswerList}
                    onQuizList={props.onQuizList}
                    onPintList={props.onPintList}
                    onOrder={props.onOrder}
                    onStatus={props.onStatus}
                    onOptionModif={props.onOptionModif}
                /> 
                <Edit onClick={props.onEditQuestion}>{'Edit'}</Edit>
                <Cancel onClick={props.onCancel}>{'Cancel'}</Cancel>
            </div>
        )
    }
  
}

export default QuestionDisplaySection