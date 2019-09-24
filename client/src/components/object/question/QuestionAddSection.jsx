import React from 'react'
import styled from 'styled-components'
import QuestionModifyObj from '../question/QuestionModifyObj'

const Holder = styled.div``

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

const QuestionAddSection = (props) => {
    if(props.status){       
        return(
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
                />     
                <Add onClick={props.onAddNewQuestion}>{'Add'}</Add>
                <Cancel onClick={props.onCancel}>{'Cancel'}</Cancel>
            </div>   
        )
    } else {
        return(
            <Holder />
        )
    }
}

export default QuestionAddSection