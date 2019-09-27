import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import apis from '../../api'
import TempObj from './TempObj'

const Holder = styled.div``

const ListObj = (props) => {
    const [objList, setObjList] = useState([])

    useEffect(
        () => {
            if(props.type === 'Quiz'){
                apis.getAllQuiz().then(q => {
                    console.log('Quiz');
                    // console.log(q.data.data);
                    setObjList(q.data.data)
                })
            } else if(props.type === 'Question') {
                apis.getAllQuestion().then(qu => {
                    console.log('Question');

                    var questions = qu.data.data
                    var quQuiz = qu.data.dataExtra
                    // console.log(quQuiz);
                    

                    for(var i=0; i < questions.length; i++){
                        questions[i].quizName = quQuiz[i].quizName[0]
                        questions[i].quizDescription = quQuiz[i].quizDescription[0]
                    }
                    // console.log(questions);
                    
                    setObjList(questions)
                })
            } else {
                apis.getAllScore().then(s => {
                    console.log('Score');
                    // console.log(s.data.data);   
                    setObjList(s.data.data)            
                })
            }
        },[props.type]
    )

    const Objs = () => {
        if(objList.length === 0){
            return <Holder />
        }

        return (
            <div>
                {objList.map((i) => 
                    <TempObj key={i._id}
                        name={i.name}
                        desc={i.description}
                        question={i.question}
                        option={i.options}
                        cAnswer={i.answer}
                        qQuiz={i.quizName}
                        qPoint={i.point}
                        qOrder={i.order}
                        qStatus={i.status}
                        qQuizId={i.quizId}
                        score={i.score}
                        nonAnswered={i.nonAnswered}
                        quId={i._id}
                        sId={i._id}
                        qId={i.quizId}
                        type={props.type}
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