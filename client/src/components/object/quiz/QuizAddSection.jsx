import React from 'react'
import styled from 'styled-components'
import {
    QuizModifyObj
} from '../../index'

const Blank = styled.div``

const Add = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
` 

const Cancel = styled.button.attrs({
    className: 'btn btn-danger',
})`
    margin 15px 15px 15px 5px;
`

const QuizAddSection = (props) => {
    if(props.addStatus){
        return (
            <div>
                <QuizModifyObj 
                    name={props.name}
                    description={props.description}
                    onNameChange={props.onNameChange}
                    onDescriptionChange={props.onDescriptionChange}
                />
                <Add onClick={props.addNewQuiz}>{'Add'}</Add>
                <Cancel onClick={props.onCancel}>{'Cancel'}</Cancel>
            </div>
        )
    } else {
        return <Blank />
    }
}

export default QuizAddSection