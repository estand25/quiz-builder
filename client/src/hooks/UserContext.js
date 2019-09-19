import React from 'react'
import ls from 'local-storage'

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

class UserProvider extends React.Component {
    state = {
        _id: ls.get('_id') ||'',
        username: ls.get('username') || '',
        password: ls.get('password') || '',
        email: ls.get('email') || ''
    }

    updateAccount = payload => {
        ls.set('_id', payload._id)
        ls.set('username', payload.username)
        ls.set('password', payload.password)
        ls.set('email', payload.email)

        this.setState({
            _id: ls.get('_id') || payload._id,
            username: ls.get('username') || payload.username,
            password: ls.get('password') || payload.password,
            email: ls.get('email') || payload.email
        })
    }

    render (){
        const context = {
            data: this.state,
            handleChange: this.updateAccount
        }

        return (
            <UserContext.Provider value={context}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserProvider