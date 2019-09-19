import React from 'react'
import { updateUser } from '../utilities'
import { UserSignUpProfile } from '../components'
import { UserConsumer } from '../hooks/UserContext'

const UserProfileInner = (props) => {
    const handleUpdateUser = async (id, payload) => {
        await updateUser(id, props, payload)
    } 

    return (
        <UserSignUpProfile
            {...props}
            title={'User Profile'}
            btnAccept={'Update Profile'}
            onDirectTo={'/about'}
            onCancelDirectTo={'/about'}
            onPayloadUpdate={handleUpdateUser}
        />
    )
}

const UserProfile = props => (
    <UserConsumer>
        {({ data, handleChange }) => (
            <UserProfileInner
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

export default UserProfile