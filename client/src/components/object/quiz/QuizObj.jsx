import React, { useState } from 'react'
import styled from 'styled-components'
import ModifyBtnObj from '../ModifyBtnObj'
import QuizDisplaySection from '../quiz/QuizDisplaySection'
import api from '../../../api'

const Wrappper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`

const QuizObj = (props) => {
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.desc)
    const [status, setStatus] = useState(false)

    const onNameChange = async event => setName(event.target.value)
    const onDescriptionChange = async event => setDescription(event.target.value)
    const onCancel = () => setStatus(false)

    const toEditQuiz = () => {
        var currentStatus = status ? false : true;
        setStatus(currentStatus)
    }
 
    const toDeleteQuiz = async () => {
        if(
            window.confirm(
                'Do you want to delete the ' + 'Quiz' + ' permanently?',
            )
        ) {
            api.deleteQuizById(props._Id)
            window.location.reload()
        }
    }   

    const onEditQuiz = async () => {
        const payload = {
            name,
            description
        }

        await api.updateQuizById(props._Id,payload).then(res => {
            if(res.data.success == true){
                window.alert('Quiz edit successfully !!')
                setStatus(false)
            }
        })
        
    }

    return (
        <Wrappper>
            <ModifyBtnObj 
                Edit={toEditQuiz}
                Delete={toDeleteQuiz}
            />
            <QuizDisplaySection
                name={name}
                nameTitle={'Title: '}
                desc={description}
                descTitle={'Description: '}
                onNameChange={onNameChange}
                onDescriptionChange={onDescriptionChange}
                onEditQuiz={onEditQuiz}
                onCancel={onCancel}
                status={status}
            />
        </Wrappper>
    )
}

export default QuizObj