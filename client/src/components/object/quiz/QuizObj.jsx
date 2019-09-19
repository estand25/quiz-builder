import React from 'react'
import styled from 'styled-components'
import ModifyBtnObj from '../ModifyBtnObj'

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

const QuizObj = (props) => {
    return (
        <Wrappper>
            <ModifyBtnObj 
                Edit={props.onEditHandle}
                Delete={props.onDeleteHandle}
            />
            <Row>
                <Label>{props.name}</Label>
                <Label>{props.desc}</Label>
            </Row>
        </Wrappper>
    )
}

export default QuizObj