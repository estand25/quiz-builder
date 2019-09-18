import React from 'react'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Spacing = styled.div`
    padding: 5px;
`

const Holder = styled.div``

const UserLogIn = (props) => {
    return (
        <Holder>
            <Title>{props.title}</Title>
            <Label>User Name: </Label>
            <Spacing>
                <InputText
                    type="text"
                    value={props.usename}
                    onChange={props.onUsernameFun}
                />
            </Spacing>
            <Label>Password: </Label>
            <Spacing>
                <InputText
                    type="password"
                    value={props.password}
                    onChange={props.onPasswordFun}
                />
            </Spacing>
        </Holder>
    )
}

export default UserLogIn