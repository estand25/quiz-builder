import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import apis from '../../api'
import TempObj from './TempObj'

const Holder = styled.div``

const ListObj = (props) => {
    const [objList, setObjList] = useState([])

    useEffect(
        () => {
            console.log(props._id);
            console.log(props.type);

            if(props.type === 'Quiz'){
                apis.getAllQuiz().then(q => {
                    console.log('Quiz');
                    console.log(q.data.data);
                    setObjList(q.data.data)
                })
            } else if(props.type === 'Question') {
                apis.getAllQuestion().then(qu => {
                    console.log('Question');
                    console.log(qu.data.data);  
                    setObjList(qu.data.data)        
                })
            } else {
                apis.getAllScore().then(s => {
                    console.log('Score');
                    console.log(s.data.data);   
                    setObjList(s.data.data)            
                })
            }
        },[props.type, props._id]
    )

    const Objs = () => {
        if(objList.length === 0){
            return <Holder />
        }

        return (
            <div>
                {objList.map((i) => 
                    <TempObj key={i._id}
                        name = {i.name}
                        nameTitle = {'Title: '}
                        desc = {i.description}
                        descTitle = {'Description: '}
                        question = { i.question}
                        questionTitle= {'Question: '}
                        option = {i.options}
                        opTitle = {'Question Options: '}
                        cAnswerTitle={'Correct Answer: '}
                        cAnswer={i.answer}
                        qQuiz={i.quizId}
                        qQuizTitle={'Quiz: '}
                        score = {'Score: ' + i.score}
                        sQuizTitle = {'Quiz: '}
                        sQuestionCount ={'Question Count: '}
                        nonAnswered = {i.nonAnswered}
                        quizId = {i._id}
                        type = {props.type}
                    />
                )}
            </div>
        )

    }
    
    return (
        <Objs />
    )
}

export default ListObj;