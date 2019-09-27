import React from 'react'
import { 
    ListObj
} from '../components'
import { UserConsumer } from '../hooks/UserContext'

const ScoreInner = (props) => {
    return (
        <div>
            <ListObj
                type={'Score'}
                _id={props._id}
            />
        </div>
    )
}

const Score = props => (
    <UserConsumer>
        {({data, handleChange}) => (
            <ScoreInner
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

export default Score