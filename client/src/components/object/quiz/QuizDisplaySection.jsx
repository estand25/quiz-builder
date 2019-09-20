import React from 'react'
import styled from 'styled-components'
import {
    QuizModifyObj
} from '../../index'

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

const QuizDisplaySection = (props) => {
    if(!props.status){
        return (
            <Row>
                <Label>{props.nameTitle}{props.name}</Label>
                <Label>{props.descTitle}{props.desc}</Label>
            </Row>
        )
    } else {
        return (
            <div>
                <QuizModifyObj 
                    name={props.name}
                    description={props.desc}
                    onNameChange={props.onNameChange}
                    onDescriptionChange={props.onDescriptionChange}
                />
                <Edit onClick={props.onEditQuiz}>{'Edit'}</Edit>
                <Cancel onClick={props.onCancel}>{'Cancel'}</Cancel>
            </div>
        )
    }
}

export default QuizDisplaySection