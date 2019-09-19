import React from 'react'
import { 
    AddObj,
    ListObj
} from '../components'
import { UserConsumer } from '../hooks/UserContext'

const QuestionInner = (props) => {
    const handleAddQuestion = () => {
        console.log('Add new Question');
    }

    const handleEditQuestion = () => {
        console.log('Edit Question');
    }

    const handleDeleteQuestion = () => {
        console.log('Delete Question');
    }

    return (
        <div>
            <AddObj
                AddObjectName={'Question'}
                onAddHandle={handleAddQuestion}
            />
            <ListObj
                type={'Question'}
                onEditHandle={handleEditQuestion}
                onDeleteHandle={handleDeleteQuestion}
                _id={props._id}
            />
        </div>
    )
}

const Question = props => (
    <UserConsumer>
        {({ data, handleChange }) => (
            <QuestionInner
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

export default Question