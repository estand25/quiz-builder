import React, { useState } from 'react'
import styled from 'styled-components'
import ModifyBtnObj from '../ModifyBtnObj'
import {
    QuizModifyObj
} from '../../index'
import api from '../../../api'

const Wrappper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`
const Row = styled.div`
    margin: 5px;
    display: flex;
    flex-direction: column;
    flex-basis: 100%;
    flex: 1;
`
const Label = styled.label`
    margin: 1px;
    font-size: 20px;
`

const Blank = styled.div``

const Edit = styled.button.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 5px;
` 

const Cancel = styled.button.attrs({
    className: 'btn btn-danger',
})`
    margin 15px 15px 15px 5px;
`

const DisplaySection = (props) => {
    if(!props.status){
        return (
            <Row>
                <Label>{props.name}</Label>
                <Label>{props.desc}</Label>
            </Row>
        )
    } else {
        return (
            <div>
                <QuizModifyObj 
                    name={props.name}
                    description={props.desc}
                    onNameChange={props.onNameChange}
                    onDescriptionChange={props.onDescriptionChange}
                />
                <Edit onClick={props.addNewQuiz}>{'Edit'}</Edit>
                <Cancel onClick={props.onCancel}>{'Cancel'}</Cancel>
            </div>
        )
    }
}

const QuizObj = (props) => {
    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.desc)
    const [status, setStatus] = useState(false)

    const toEditQuiz = () => {
        console.log('Edit Quiz');
        var currentStatus = status ? false : true;
        setStatus(currentStatus)
    }
 
    const handleDeleteQuiz = async () => {
        console.log('Delete Quiz: ' + props.quizId);

        if(
            window.confirm(
                'Do you want to delete the ' + 'Quiz' + 'permanently?',
            )
        ) {
            api.deleteQuizById(props.quizId)
            window.location.reload()
        }
    }   

    const handleEditQuiz = async () => {
        const payload = {
            name,
            description
        }

        console.log(payload);

        await api.updateQuizById(props.quizId,payload).then(res => {
            if(res.data.success == true){
                window.alert('Quiz edit successfully !!')
                setStatus(false)
            }
        })
        
    }

    const onNameChange = async event => setName(event.target.value)
    const onDescriptionChange = async event => setDescription(event.target.value)

    return (
        <Wrappper>
            <ModifyBtnObj 
                Edit={toEditQuiz}
                Delete={handleDeleteQuiz}
            />
            <DisplaySection
                name={name}
                desc={description}
                onNameChange={onNameChange}
                onDescriptionChange={onDescriptionChange}
                status={status}
            />
        </Wrappper>
    )
}

export default QuizObj