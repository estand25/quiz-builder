import React from 'react'
import { 
    AddObj,
    ListObj
} from '../components'
import { UserConsumer } from '../hooks/UserContext'

const ScoreInner = (props) => {
    const handleAddQuestion = () => {
        console.log('Add new Score');
    }

    const handleEditScore = () => {
        console.log('Edit Score');
    }

    const handleDeleteScore = () => {
        console.log('Delete Score');
    }

    return (
        <div>
            <AddObj
                AddObjectName={'Score'}
                onAddHandle={handleAddQuestion}
            />
            <ListObj
                type={'Score'}
                onEditHandle={handleEditScore}
                onDeleteHandle={handleDeleteScore}
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