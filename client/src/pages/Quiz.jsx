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
const Holder = styled.div``

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`
const Label = styled.label`
    margin: 5px;
`
const Spacing = styled.div`
    padding: 5px;
`

const AddSectionInner = (props) => {
    if(props.addStatus){
        return (
            // <div>
                <QuizModifyObj 
                    name={props.name}
                    description={props.description}
                    onNameChange={props.onNameChange}
                    onDescriptionChange={props.onDescriptionChange}
                />
                // <Add onClick={props.addNewQuiz}>{'Add'}</Add>
                //<Cancel href={'/about'}>{'Cancel'}</Cancel>
            //</div>
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
        console.log('Add new Quiz');
        console.log(currentStatus);

        var currentStatus = addStatus ? false : true;
        setAddStatus(currentStatus)
    }

    const handleEditQuiz = () => {
        console.log('Edit Quiz');
    }

    const handleDeleteQuiz = () => {
        console.log('Delete Quiz');
    }

    const onNameChange = async event => setName(event.target.value)
    const onDescriptionChange = async event => setDescription(event.target.value)

    const addNewQuiz = async () => {
        const payload = {
            name,
            description 
        }

        await api.insertQuiz(payload).then(res => {
            if(res.data.success == true){
                setAddStatus(false)
                setName('')
                setDescription('')
                window.alert('Quiz created successfully !!')
                setText('Re-Quiz')
            }
        })
    }

    const AddSection = () => {
        if(addStatus){
            return (
                <div>
                    <QuizModifyObj 
                        name={name}
                        description={description}
                        onNameChange={onNameChange}
                        onDescriptionChange={onDescriptionChange}
                    />
                    <Add onClick={addNewQuiz}>{'Add'}</Add>
                    <Cancel href={'/about'}>{'Cancel'}</Cancel>
                </div>
            )
        } else {
            return <Blank />
        }
    }

    return (
        <div>
            <AddObj
                AddObjectName={'Quiz'}
                onAddHandle={handleAddQuiz}
            />
            <AddSection />
            <ListObj 
                type={text}
                onEditHandle={handleEditQuiz}
                onDeleteHandle={handleDeleteQuiz}
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