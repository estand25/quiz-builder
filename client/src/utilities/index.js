import api from '../api'

export const createUser = async (payload, props) => {
    await api.insertUser(payload).then(res => {
        if(res.data.success === true){
            var user = res.data.data;  

            const updateUserStorage = {
                _id: user._id,
                username: user.username,
                password: user.password,
                email: user.email
            }

            props.updateAccount(updateUserStorage)
            window.alert('User created successfully !!')
        }
    }).catch(err => {
        console.log(err);
    })
}

export const logOutUser = async (payload, props) => {
    await api.getUserById(props._id).then(i => {
        if(i.data.success === true && i.data.data.status === 1){
            api.SignOutUser(payload).then(res => {
                signOutLocalSession(props)
            })
        } else {
            signOutLocalSession(props)
        }
    }).catch(i => {
        signOutLocalSession(props)
    })
}

export const updateUser = async (id, props, payload) => {
    await api.updateUserById(id, payload).then(r => {
        if(r.data.success === true){
            var user = r.data.data;

            const updateUserStorage = {
                _id: user._id,
                username: user.username,
                password: user.password,
                email: user.email
            }

            props.updateAccount(updateUserStorage)
            window.alert('User Information Updated Successfully !!')
        }
    }).catch(err => {
        console.log(err);
        window.alert(err.error)
    })
}

export const signInUser = async (payload, props) => {
    await api.SignInUser(payload).then(r => {
        if(r.data.success === true){
            updateUserLocalSession(r.data.data, props)
        }
    }).catch(ii => {
        api.getUserById(props._id).then(i => {
            if(i.data.success === true){
                updateUserLocalSession(i.data.data, props)
            }
        }).catch(a => {
            window.alert(a.error);

        })
    })
}

const signOutLocalSession = async (props) => {
    const updateUserStorage = {
        _id: '',
        username: '',
        password: '',
        email: ''
    }

    props.updateAccount(updateUserStorage)
    window.alert('User Successfully Sign-out!!')
}

const updateUserLocalSession = async (user, props) => {
    const updateUserStorage = {
        _id: user._id,
        username: user.username,
        password: user.password,
        email: user.email
    }

    console.log(user);
    console.log(props);        

    props.updateAccount(updateUserStorage)
    window.alert('User Successfully Sign-In!!')
}
