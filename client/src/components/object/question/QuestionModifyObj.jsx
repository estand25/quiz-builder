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
const QuestionModifyObj = (props) => {
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
                <Label>{'Options: '}{props.options.length === 0 ? '' : OptionObj(props, props.options)}</Label>
            </Spacing>
            <Spacing>
                <Label>
                    {'Correct Answer: '}
                </Label>
                <props.onCorrectAnswerList />
            </Spacing>
            <Spacing>
                <Label>
                    {'Quiz: '}
                </Label>
                <props.onQuizList />
            </Spacing>
            <Spacing>
                <Label>
                    {'Point: '}
                </Label>
                <props.onPintList />
            </Spacing>
            <Spacing>
                <Label>
                    {'Order: '}
                </Label>
                <props.onOrder />
            </Spacing>
            <Spacing>
                <Label>
                    {'Status: '}
                </Label>
                <props.onStatus />
            </Spacing>
        </Holder>
    )
}

export default QuestionModifyObj