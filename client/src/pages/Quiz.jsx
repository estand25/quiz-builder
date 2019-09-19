import React, { useState } from 'react'
import { 
    AddObj,
    ListObj,
    QuizModifyObj
} from '../components'
import { UserConsumer } from '../hooks/UserContext'
import styled from 'styled-components'
import api from '../api'

const Blank = styled.div``

const Add = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
` 

const Cancel = styled.button.attrs({
    className: 'btn btn-danger',
})`
    margin 15px 15px 15px 5px;
`

const AddSection = (props) => {
    if(props.addStatus){
        return (
            <div>
                <QuizModifyObj 
                    name={props.name}
                    description={props.description}
                    onNameChange={props.onNameChange}
                    onDescriptionChange={props.onDescriptionChange}
                />
                <Add onClick={props.addNewQuiz}>{'Add'}</Add>
                <Cancel onClick={props.onCancel}>{'Cancel'}</Cancel>
            </div>
        )
    } else {
        return <Blank />
    }
}
const QuizInner = (props) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [addStatus, setAddStatus] = useState(false)
    const [text, setText] = useState('Quiz')

    const handleAddQuiz = () => {
        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
    }

    const onNameChange = async event => setName(event.target.value)
    const onDescriptionChange = async event => setDescription(event.target.value)

    const addNewQuiz = async () => {
        const payload = {
            name,
            description 
        }

        console.log(payload);
        
       await api.insertQuiz(payload).then(res => {
            if(res.data.success === true){
                setAddStatus(false)
                setName('')
                setDescription('')
                window.alert('Quiz created successfully !!')
                setText('Quiz')
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
            <AddSection 
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