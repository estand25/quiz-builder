import React from 'react'
import styled from 'styled-components'

const GeneralButton = styled.button`
    color: gray;
    font-size: 1em;
    margin: 5px;
    padding: 5px;
    border: 2px solid gray;
    border-radius: 3px;
`;

const OptionButtons = (props) => {
    return (
        Object.entries(props.option).map(([key,value]) => (
                <GeneralButton 
                    key={key} 
                    onClick={props.onOptionModif}>
                    {value}
                </GeneralButton>
            )
        )
    )
}

export default OptionButtons
