import React from 'react'
import { logOutUser } from '../utilities'
import { UserSign } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserSignOutInner = (props) => {
    const handleSignOutUserWithId = async (payload) => {
        await logOutUser(payload, props)
    }

    return (        
        <UserSign
            {...props}
            title={'Sign Out'}
            btnAccept={'Sign Out'}
            onPayloadUser={handleSignOutUserWithId}
            onDirectTo={'/about'}
            onCancelDirectTo={'/about'}
            onLogInInfo={'0'}
        />
    )
}

const UserSignOut = props => (
    <UserConsumer>
        {({ data, handleChange }) => (
            <UserSignOutInner
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

export default UserSignOut

//https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669