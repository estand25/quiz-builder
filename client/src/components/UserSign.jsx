import React, { useState } from 'react'
import UserLogIn from './UserLogIn'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
    border: 1px;
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

const Holder = styled.div``

const LogInInfo = (props) => {
    if(props.onFieldShowLogIn === '1') {
        return (
            <UserLogIn 
                username={props.username}
                onUsernameFun={props.onUsernameFun}
                password={props.password}
                onPasswordFun={props.onPasswordFun}
            />
        )
    } else {
        return (
            <Holder />
        )
    }
}

const UserSign = (props) => {
    const [_userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleChangeInputUsername = async event => {
        setUserName(event.target.value)
    }

    const handleChangeInputPassword = async event => {
        setPassword(event.target.value)
    }

    const onClick = () => {
        const payload = {
            username: _userName || props.username, 
            password: password || props.password
        }

        if(props.onLogInInfo === '1') {
            props.onPayloadCreation(payload)
        } else {   
            console.log(payload);
            
            props.onPayloadUser(payload)
        }

        setUserName('')
        setPassword('')

        window.location.href = props.onDirectTo
    }

    return (
        <Wrapper>
            <LogInInfo
                title={props.title}
                usename={_userName}
                onUsernameFun={handleChangeInputUsername}
                password={password}
                onPasswordFun={handleChangeInputPassword}
                onFieldShowLogIn={props.onLogInInfo}
            />
            <Button onClick={onClick}>{props.btnAccept}</Button>
            <CancelButton href={props.onCancelDirectTo}>Cancel</CancelButton>
        </Wrapper>
    )
}

export default UserSign