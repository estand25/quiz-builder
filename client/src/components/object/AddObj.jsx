import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const AddButton = styled.div.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 15px;
`

const AddObj = (props) => {
    const addNewObject = () =>{
        console.log("adding new Object " + props.AddObjectName);
    }

    return (
        <Wrapper>
            <AddButton onClick={addNewObject}>Add {props.AddObjectName}</AddButton>
        </Wrapper>
    )
}

export default AddObj