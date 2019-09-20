import React from 'react'
import styled from 'styled-components'
import OptionObj from '../OptionObj'

const Holder = styled.div``

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Label = styled.label`
    margin: 5px;
`

const Spacing = styled.div`
    padding: 5px;
`

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
            <Holder>
                <Label>{'Question: '}</Label>
                <Spacing>
                    <InputText
                        type="text"
                        value={props.name}
                        onChange={props.onNameChange}
                    />
                </Spacing>
                <Spacing>
                    <InputText
                        type="text"
                        value={props.option}
                        onChange={props.onOptionAdd}
                        onKeyDown={props.onOptionAdding}
                    />
                <Label>{props.optionsTitle}{props.options.length == 0? '' :OptionObj(props, props.options)}</Label>
                </Spacing>
                <Add onClick={props.addNewQuestion}>{'Add'}</Add>
                <Cancel onClick={props.onCancel}>{'Cancel'}</Cancel>
            </Holder>
        )
    } else {
        return(
            <Holder />
        )
    }
}

export default QuestionAddSection