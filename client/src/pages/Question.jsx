import React, { useEffect, useReducer} from 'react'
import styled from 'styled-components'
import { 
    AddObj,
    ListObj
} from '../components'
import { UserConsumer } from '../hooks/UserContext'
import api from '../api'
import QuestionAddSection from '../components/object/question/QuestionAddSection'

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
const initialState = {
    name: '',
    qOption: '',
    qOptions: [],
    addStatus: false,
    quizList: [],
    quizSelection: '',
    correctAnswer: '',
    point: 0,
    order: 0,
    status: '',
    questions: 0    
}

const questionReduce = (state, action) => {
    switch (action.type) {
        case 'setName': 
            return { ...state, name: action.payload}
        case 'setQOption':
            return { ...state, qOption: action.payload}
        case 'setQoptions':
            return { ...state, qOptions: action.payload}
        case 'setAddStatus':
            return { ...state, addStatus: action.payload}
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

const QuestionInner = (props) => {
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
                            i.name = state.quizSelection)
                    
                    dispatch({type: 'setQuestionCount', payload: allQuestionForCurrentSelectQuiz.length })
                }
            })
        },[state.quizSelection]
    )

    const onOptionAdd = e => {  
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

    const handleAddQuestion = () => {
        var curentStatus = state.addStatus ? false : true;

        dispatch({type: 'setAddStatus', payload: curentStatus})
        dispatch({type: 'setName', payload: ''})
        dispatch({type: 'setName', payload: ''})
        dispatch({type: 'setQOption', payload: ''})
        dispatch({type: 'setQoption', payload: []})
    }

    const handleCorrectAnswerList = () => { 
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

    const handleQuizList = () => {
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

    const handlePointList = () => {
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
    
    const handleOrder = () => {        
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
    
    const handleStatus = () => {
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

    const addNewQuestion = async() => {       
        const payload = {
            answer: state.correctAnswer,
            options: state.qOptions,
            quizId: state.quizSelection,
            question: state.name,
            status: state.status,
            order: state.order,
            point: state.point,
        }
        
        await api.insertQuestion(payload).then(res => {
            if(res.data.success === true){
                dispatch({type: 'setAddStatus', payload: false})
                dispatch({type: 'setCorrectAnswer', payload: ''})
                dispatch({type: 'setQuizSelection', payload: ''})
                dispatch({type: 'setName', payload: ''})
                dispatch({type: 'setStatus', payload: 0})
                dispatch({type: 'setOrder', payload: 0})
                dispatch({type: 'setPoint', payload: 0})

                window.alert('Question created successfully !!')
                window.location.reload()
            }
        })
    }

    return (
        <div>
            <AddObj
                AddObjectName={'Question'}
                onAddHandle={handleAddQuestion}
            />
            <QuestionAddSection
                status={state.addStatus}
                name={state.name}
                onNameChange={event => dispatch({type: 'setName', payload: event.target.value})}
                option={state.qOption}
                onOptionAdd={event => dispatch({type: 'setQOption', payload: event.target.value})}
                options={state.qOptions}
                onOptionAdding={onOptionAdd}
                onAddNewQuestion={addNewQuestion}
                onCancel={handleAddQuestion}
                onCorrectAnswerList={handleCorrectAnswerList}
                onQuizList={handleQuizList}
                onPintList={handlePointList}
                onOrder={handleOrder}
                onStatus={handleStatus}
            />
            <ListObj
                type={'Question'}
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