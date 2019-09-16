import React from 'react'
import styled from 'styled-components'

const Wrappper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
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

const SubLabel = styled.label`
    margin: 1px;
    font-size: 20px;
    border: 1px solid black;
    padding: 5px;
`

const quizObj = (props) => {
    return (
        <Wrappper>
            <Row>
                <Label>{props.name}</Label>
                <Label>{props.desc}</Label>
            </Row>
        </Wrappper>
    )
}

const questionObj = (props) => {
    // console.log(props.option);
    // for (const [key, value] of Object.entries(props.option)) {
    //     console.log(`${key} ${value}`);
    //     console.log(Object.entries(value));
    //     for(const [key1, value1] of Object.entries(value)) {
    //         // console.log();
    //         console.log(`${key1} ${value1}`);
    //     }
    // }

    return (
        <Wrappper>
            <Row>
                <Label>{props.question}</Label>
                <Label>{optionObj(props.option)}</Label>
            </Row>
        </Wrappper>
    )
}
const optionObj = (option) => {
    var op = []
    
    for (const [key, value] of Object.entries(option)) {
        for(const [key1, value1] of Object.entries(value)) {
            op.push(value1) 
        }
    }

    // console.log(op);

    return Object.entries(op).map(([key,value]) => (
        <SubLabel key={key} onClick={onLabelOnClick}>
            {value}
        </SubLabel>
    ))
}

const onLabelOnClick = () => {    
    console.log('onLabelOnClick');
} 

const scoreObj = (props) => {
    return (
        <Wrappper>
            <Row>
                <Label>{props.score}</Label>
            </Row>
        </Wrappper>
    )
}

const objs = (props) => {
    if(props.type === 'Quiz'){
        return quizObj(props)
    } else if(props.type === 'Question'){
        return questionObj(props)
    } else {
        return scoreObj(props)
    }
}

const TempObj = (props) => {
    return (
        objs(props)
    )
}

export default TempObj