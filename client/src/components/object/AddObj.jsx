import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const AddBtn = styled.div.attrs({
    className: 'btn btn-primary',
})`
    margin: 15px 15px 15px 15px;
`

const AddObj = (props) => {
    return (
        <Wrapper>
            <AddBtn onClick={props.onAddHandle}>
                Add {props.AddObjectName}
            </AddBtn>
        </Wrapper>
    )
}

export default AddObj