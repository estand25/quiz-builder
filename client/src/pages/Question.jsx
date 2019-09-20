import React, { useState} from 'react'
import { 
    AddObj,
    ListObj
} from '../components'
import { UserConsumer } from '../hooks/UserContext'
import QuestionAddSection from '../components/object/question/QuestionAddSection'


const QuestionInner = (props) => {
    const [name, setName] = useState(props.question)
    const [qOption, setQOption] = useState(props.option)
    const [qOptions, setQoptions] = useState([])
    const [addStatus, setAddStatus] = useState(false)
    const [text, setText] = useState('Question')

    const onNameChange = event => setName(event.target.value)
    const onOptionChange = event => setQOption(event.target.value)
    const onOptionAdd = e => {  
        if(e.key === 'Enter'){
            var items = qOptions
            if(qOptions.length === 0){
                var k = 0;
                var ks = (k+10).toString(36)
                var item = {
                    [ks]: e.target.value
                }

                items.push(item)
                setQOption('')
                console.log(items);
                setQoptions(items)
            } else {               
                var ks = (items.length+10).toString(36)
                var item = {
                    [ks]: e.target.value
                }

                items.push(item)
                setQOption('')
                setQoptions(items)
            }
            console.log(qOptions);
            
        }
    }

    const handleAddQuestion = () => {
        var curentStatus = addStatus ? false : true;
        setAddStatus(curentStatus)
        setName('')
        setQOption('')
        setQoptions([])
    }

    const addNewQuestion = async() => {
        const payload = {

        }
    }

    const handleEditQuestion = () => {
        console.log('Edit Question');
    }

    const handleDeleteQuestion = () => {
        console.log('Delete Question');
    }

    return (
        <div>
            <AddObj
                AddObjectName={'Question'}
                onAddHandle={handleAddQuestion}
            />
            <QuestionAddSection
                status={addStatus}
                name={name}
                onNameChange={onNameChange}
                option={qOption}
                onOptionAdd={onOptionChange}
                options={qOptions}
                optionsTitle={'Options: '}
                onOptionAdding={onOptionAdd}
                addNewQuestion={addNewQuestion}
                onCancel={handleAddQuestion}
            />
            <ListObj
                type={'Question'}
                onEditHandle={handleEditQuestion}
                onDeleteHandle={handleDeleteQuestion}
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