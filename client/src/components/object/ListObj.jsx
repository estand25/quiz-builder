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
        },[props.type]
    )

    const objs = () => {
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
                        score={i.score}
                        nonAnswered={i.nonAnswered}
                        type={props.type}
                    />
                )}
            </div>
        )

    }
    
    return (
        <div>
            {objs()}
        </div>
    )
}

export default ListObj;