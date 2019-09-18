import React from 'react'
import { signInUser } from '../utilities'
import { UserSign } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignInInner = (props) => {
    const handleCreateUser = async (payload) => {     
        await signInUser(payload, props)        
    }

    return (
        <UserSign
            {...props}
            title={'Sign-In'}
            btnAccept={'Sign-In'}
            onPayloadCreation={handleCreateUser}
            onDirectTo={'/'}
            onCancelDirectTo={'/'}
            onLogInInfo={'1'}
        />
    )
}

const UserSignIn = props => (
    <UserConsumer>
        {({ data, handleChange }) => (
            <UserSignInInner
                {...props}
                username={data.username}
                password={data.password}
                email={data.email}
                _id={data._id}
                updateAccount={handleChange}
            />
        )}    
    </UserConsumer>
)

export default UserSignIn

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669