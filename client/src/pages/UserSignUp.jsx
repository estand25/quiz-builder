import React from 'react'
import { createUser } from '../utilities'
import { UserSignUpProfile } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignUpInner = (props) => {
    const handleCreateUser = async (payload) => {        
        await createUser(payload, props)
    }

    return (
        <UserSignUpProfile
            {...props}
            title={'Sign-Up'}
            btnAccept={'Sign-Up'}
            onDirectTo={'/about'}
            onCancelDirectTo={'/about'}
            onPayloadCreation={handleCreateUser}
            onUserType={'0'}
        />
    )
}

const UserSignUp = props => (
    <UserConsumer>
        {({ data, handleChange}) => (
            <UserSignUpInner
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

export default UserSignUp

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669