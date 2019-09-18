import React from 'react'
import { Link } from 'react-router-dom'
import { UserConsumer } from '../hooks/UserContext'

const Auth = () => (
    <UserConsumer>
        {({ data }) => (
            <AuthInfo
                username={data.username}
            />
        )}
    </UserConsumer>
)

const AuthInfo = (props) => {
    if(props.username !== ''){
        return (
            <div>
                <Link to="/userProfile" className="nav-link">{props.username}</Link>
                <Link to="/signOut" className="nav-link">Sign-Out</Link>
            </div>
        )
    } else {
        return (
            <div>
                <Link to="/signUp" className="nav-link">Sign-Up</Link>
                <Link to="/signIn" className="nav-link">Sign-In</Link>
            </div>
        )
    }
}

export default Auth