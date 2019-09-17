import React from 'react'
import styled from 'styled-components'
import OptionObj from '../OptionObj'

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
const QuestionObj = (props) => {
    return (
        <Wrappper>
            <Row>
                <Label>{props.question}</Label>
                <Label>{props.opTitle}{OptionObj(props, props.option)}</Label>
            </Row>
        </Wrappper>
    )
}

export default QuestionObj