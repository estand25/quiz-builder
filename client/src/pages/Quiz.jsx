import React, { useState } from 'react'
import { 
    AddObj,
    ListObj
} from '../components'
import { UserConsumer } from '../hooks/UserContext'
import QuizAddSection from '../components/object/quiz/QuizAddSection'
import api from '../api'

const QuizInner = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [addStatus, setAddStatus] = useState(false)
    const [text, setText] = useState('Quiz')

    const onNameChange = async event => setName(event.target.value)
    const onDescriptionChange = async event => setDescription(event.target.value)

    const handleAddQuiz = () => {
        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
    }

    const addNewQuiz = async () => {
        const payload = {
            name,
            description 
        }
        
       await api.insertQuiz(payload).then(res => {
            if(res.data.success === true){
                setAddStatus(false)
                setName('')
                setDescription('')
                setText('Quiz')
                window.alert('Quiz created successfully !!')
                window.location.href = '/quiz'
            }
        })
    }

    return (
        <div>
            <AddObj
                AddObjectName={'Quiz'}
                onAddHandle={handleAddQuiz}
            />
            <QuizAddSection 
                name={name}
                description={description}
                onNameChange={onNameChange}
                onDescriptionChange={onDescriptionChange}
                addNewQuiz={addNewQuiz}
                addStatus={addStatus}
                onCancel={handleAddQuiz}
            />
            <ListObj 
                type={text}
                _id={props._id}
            />
        </div>
    )
}

const Quiz = props => (
    <UserConsumer>
        {({data, handleChange}) => (
            <QuizInner
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

export default Quiz