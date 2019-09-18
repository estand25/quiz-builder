import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    font-size: 20px;
    text-align: right;
    padding: 1px;
    margin: 5px;
`
const Column = styled.div`
    display: flex;
    flex-direction: row;
    margin: 5px;
`

const Edit = styled(Button)`
    color: blue;
`

const Delete = styled(Button)`
    color: red;
`

const ModifyBtnObj = (props) => {
    return(
        <Column>
            <Edit onClick={props.Edit}>{'Edit'}</Edit>
            <Delete onClick={props.Delete}>{'Delete'}</Delete>
        </Column>
    )
}

export default ModifyBtnObj