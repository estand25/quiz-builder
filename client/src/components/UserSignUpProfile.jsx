import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
` 

const CancelButton = styled.a.attrs({
    className: 'btn btn-danger',
})`
    margin 15px 15px 15px 5px;
`

const Spacing = styled.div`
    padding: 5px;
`

const UserSignUpProfile = (props) => {
    const [_username, setUserName] = useState(props.username)
    const [password, setPassword] = useState(props.password)
    const [email, setEmail] = useState(props.email)
    const _id = props._id

    const handleChangeInputUsername = async event => {
        setUserName(event.target.value)
    }

    const handleChangeInputPassword = async event => {
        setPassword(event.target.value)
    }

    const handleChangeInputEmail = async event => {
        setEmail(event.target.value)
    }

    const onClick = () => {
        const payload = {
            username: _username || props.username,
            password: password || props.password,
            email: email || props.email
        }
      
        if(props.onUserType === "0"){
            props.onPayloadCreation(payload)
        }
        else {
            props.onPayloadUpdate(_id, payload)
        }

        setUserName('')
        setPassword('')
        setEmail('')

        window.location.href = props.onDirectTo
    }

    return (
        <Wrapper>
            <Title>{props.title}</Title>
            <Label>User Name: </Label>
            <Spacing>
                <InputText
                    type="text"
                    value={_username}
                    onChange={handleChangeInputUsername}
                />
            </Spacing>
            <Label>Password: </Label>
            <Spacing>
                <InputText
                    type="password"
                    value={password}
                    onChange={handleChangeInputPassword}
                />
            </Spacing>
            <Label>Email: </Label>
            <Spacing>
                <InputText
                    type="text"
                    value={email}
                    onChange={handleChangeInputEmail}
                />
            </Spacing>
            <Button onClick={onClick}>{props.btnAccept}</Button>
            <CancelButton href={props.onCancelDirectTo}>Cancel</CancelButton>     
        </Wrapper>
    )
}

export default UserSignUpProfile