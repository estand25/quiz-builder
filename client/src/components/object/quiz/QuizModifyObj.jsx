import React from 'react'
import styled from 'styled-components'

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

const QuizModifyObj = (props) => {
    return (
        <Holder>
            <Label>{'Title:'}</Label>
            <Spacing>
                <InputText
                    type="text"
                    value={props.name}
                    onChange={props.onNameChange}
                />
            </Spacing>
            <Label>{'Description: '}</Label>
            <Spacing>
                <InputText
                    type="text"
                    value={props.description}
                    onChange={props.onDescriptionChange}
                />
            </Spacing>
        </Holder>
    )
}

export default QuizModifyObj