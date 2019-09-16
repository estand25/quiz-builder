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
    console.log(props.option);
    
    return (
        <Wrappper>
            <Row>
                <Label>{props.question}</Label>
                {/* <Row>
                    {props.options.map((o) => 
                        <Label>
                            {o}
                        </Label>
                    )}
                </Row>
                <Label>{props.options}</Label> */}
                <Label>{optionObj(props.option)}</Label>
            </Row>
        </Wrappper>
    )
}

// const optionObj = (option) => {
//     console.log(option);
//     return (
//         <Label>{option}</Label>
//     )
// }

const optionObj = (option) => {
    console.log(option);
    return (
        Object.entries(option).map(key =>        
            <Label key={key}>[key]</Label>    
        )
    )

    // return Object.entries(option).map(([key,value]) => (
    //     <Label key={key}>
    //         {value}
    //     </Label>
    // ))

    // return Object.keys(option).map((key,value) =>{
    //     <Label key={key}>
    //         {value}
    //     </Label>
    // })
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