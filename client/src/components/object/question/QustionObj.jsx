import React, { useState, useEffect, useReducer} from 'react'
import styled from 'styled-components'
import QuestionDisplaySection from './QuestionDisplaySection'
import ModifyBtnObj from '../ModifyBtnObj'
import api from '../../../api'

const Wrappper = styled.div`
    padding: 5px 5px 5px 5px;
    border: 1px solid black;
    margin: 10px;
`

const Select = styled.select`
    width: 100%;
    height: 35px;
    background: white;
    color: gray;
    font-size: 14px;
    border: 1px solid black;

    option {
        color: black;
        background: white;
        display: flex;
        white-space: pre;
        min-height: 20px;
        padding: 15px 15px 15px 15px;
    }
`

const questionReduce = (state, action) => {
    switch (action.type) {
        case 'setName': 
            return { ...state, name: action.payload}
        case 'setQOption':
            return { ...state, qOption: action.payload}
        case 'setQoptions':
            return { ...state, qOptions: action.payload}
        case 'setEditStatus':
            return { ...state, editStatus: action.payload}
        case 'setQuizList':
            return { ...state, quizList: action.payload}
        case 'setQuizSelection':
            return { ...state, quizSelection: action.payload}
        case 'setCorrectAnswer':
            return { ...state, correctAnswer: action.payload}
        case 'setPoint':
            return { ...state, point: action.payload}
        case 'setOrder':
            return { ...state, order: action.payload}
        case 'setStatus':
            return { ...state, status: action.payload}
        case 'setQuestionCount':
            return { ...state, questionCount: action.payload}
        default:
            return state
    }
}

const QuestionObj = (props) => {
    const initialState = {
        name: props.question,
        qOption: '',
        qOptions: props.option,
        editStatus: false,
        quizList: [],
        quizSelection: props.qQuizId,
        correctAnswer: props.cAnswer,
        point: props.qPoint,
        order: props.qOrder,
        status: props.qStatus,
        questions: 0,
        _Id: props._Id    
    }

    const [state, dispatch] = useReducer(questionReduce, initialState)

    useEffect(
        () => {
            api.getAllQuiz().then(q =>{
                if(q.data.success === true){
                    var quiz = q.data.data.map(i => (
                        {   _id: i._id, 
                            name: i.name, 
                            description: i.description
                        })
                    )
                    
                    dispatch({type:'setQuizList', payload: quiz})
                }
            })

            api.getAllQuestion().then(qu => {
                if(qu.data.success === true){
                    var allQuestionForCurrentSelectQuiz =
                        qu.data.data.map(i =>
                            i.name = props.qQuiz)
                    
                    dispatch({type: 'setQuestionCount', payload: allQuestionForCurrentSelectQuiz.length })
                }
            })
        },[props.qQuiz]
    )

    const toEditQuestion = () => {
        var currentStatus = state.editStatus ? false : true;
        dispatch({type: 'setEditStatus', payload: currentStatus})
    }

    const toDeleteQuestion = async () => {
        if(
            window.confirm(
                'Do you want to delete the question permanently?',
            )
        ) {
            api.deleteQuestionById(state._Id)
            window.location.reload()
        }
    }

    const onOptionAdding = e => {
        if(e.key === 'Enter'){
            var items = state.qOptions
            if(state.qOptions.length === 0){
                var k = 0;
                var ks = (k+10).toString(36)
                var item = {
                    [ks]: e.target.value
                }

                items.push(item)
                dispatch({type: 'setQOption', payload: ''})
                dispatch({type: 'setQoptions', payload: items})
            } else {               
                ks = (items.length+10).toString(36)
                item = {
                    [ks]: e.target.value
                }

                items.push(item)
                dispatch({type: 'setQOption', payload: ''})
                dispatch({type: 'setQoptions', payload: items})
            }
        }
    }

    const onCorrectAnswerList = () => {
        var correctAnswerList = []
        for(const option of Object.entries(state.qOptions)){        
            for(var a=1; a < option.length; a = a + 3){
                Object.getOwnPropertyNames(option[a]).forEach(
                    function(val){                                              
                        correctAnswerList.push({
                            _id: val,
                            name: option[a][val]
                        });                        
                    }
                )
            }
        }

        return (
            <Select
                value={state.correctAnswer}
                onChange={event => dispatch({type: 'setCorrectAnswer', payload: event.target.value})}>
                <option value="" hidden>
                    - Select One -
                </option>
                {correctAnswerList.map((q) =>
                        <option key={q._id} value={q._id}>
                            {q.name}
                        </option>
                    )
                }
            </Select>
        )
    }

    const onQuizList = () => {
        return (
            <Select
                value={state.quizSelection}
                onChange={event => dispatch({type: 'setQuizSelection', payload:  event.target.value})}>
                <option value="" hidden>
                    - Select One -
                </option>
                    {state.quizList.map((q) =>
                        <option key={q._id} value={q._id}>
                            {q.name}
                        </option>         
                    )}
            </Select>
        )
    }

    const onPointList = () => {
        var pointList =  [] 
        for(var i=0; i <= 100; i = i + 5){
            pointList.push({
                _id: i,
                name: i
            })
        }

        return (
            <Select
                value={state.point}
                onChange={event => dispatch({type:'setPoint', payload: event.target.value})}
            >
                <option value="" hidden>
                    - Select One -
                </option>
                {pointList.map((q) =>
                        <option key={q._id} value={q.name}>
                            {q.name}
                        </option>
                    )
                }
            </Select>
        )
    }

    const onOrder = () => {
        var orderList =  [] 
        for(var i=0; i < state.questionCount; i++){
            orderList.push({
                _id:i,
                name:i
            })
        }
        
        return (
            <Select
                value={state.order}
                onChange={event => dispatch({type: 'setOrder', payload: event.target.value})}
            >
                <option value="" hidden>
                    - Select One -
                </option>
                {orderList.map((q) =>
                        <option key={q._id} value={q.name}>
                            {q.name}
                        </option>
                    )
                }
            </Select>  
        )          
    }

    const onStatus = () => {
        var statusList = [] 
        for(var i=0;i < 2; i++){
            statusList.push({
                _id:i,
                name: i == 0? "Turned Off": "Turn On"
            })
        }

        return (
            <Select
                value={state.status}
                onChange={event => dispatch({type: 'setStatus', payload: event.target.value})}
            >
                <option value="" hidden>
                    - Select One -
                </option>
                {statusList.map((q) =>
                        <option key={q._id} value={q._id}>
                            {q.name}
                        </option>
                    )
                }
            </Select>
        )      
    }

    const onEditQuestion = async() => {
        const payload = {
            answer: state.correctAnswer,
            options: state.qOptions,
            quizId: state.quizSelection,
            question: state.name,
            status: state.status,
            order: state.order,
            point: state.point
        }        

        await api.updateQuestionById(state._Id, payload).then(res => {
            if(res.data.success === true){
                dispatch({type: 'setEditStatus', payload: false})
                dispatch({type: 'setCorrectAnswer', payload: ''})
                dispatch({type: 'setQuizSelection', payload: ''})
                dispatch({type: 'setName', payload: ''})
                dispatch({type: 'setStatus', payload: 0})
                dispatch({type: 'setOrder', payload: 0})
                dispatch({type: 'setPoint', payload: 0})

                window.alert('Question edit successfully !!')
                window.location.reload()
            }
        })
    }

    const onCancel = () => {
        dispatch({type: 'setEditStatus', payload: false})
    }

    return (
        <Wrappper>
            <ModifyBtnObj 
                Edit={toEditQuestion}
                Delete={toDeleteQuestion}
            />
            <QuestionDisplaySection
                name={state.name}
                onNameChange={event => dispatch({type: 'setName', payload: event.target.value})}
                option={state.option}
                onOptionAdd={event => dispatch({type: 'setQOption', payload: event.target.value})}
                onOptionAdding={onOptionAdding}                
                options={state.qOptions}
                cAnswer={props.cAnswer}
                onCorrectAnswerList={onCorrectAnswerList}
                qQuiz={props.qQuiz}
                onQuizList={onQuizList}
                qPoint={props.qPoint}
                onPintList={onPointList}
                qOrder={props.qOrder}
                onOrder={onOrder}
                qStatus={props.qStatus}
                onStatus={onStatus}
                editStatus={state.editStatus}
                onEditQuestion={onEditQuestion}
                onCancel={onCancel}

            />
        </Wrappper>
    )
}

export default QuestionObj