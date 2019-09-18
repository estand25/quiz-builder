import React from 'react'
import OptionButton from './OptionButton'

const OptionObj = (props,option) => {
    var op = []

    for (const [key, value] of Object.entries(option)) {
        for(const [key1, value1] of Object.entries(value)) {
            op.push(value1) 
        }
    }

    return (
        <OptionButton
            option={op}
            onLabelOnClick={props.onLabelOnClick}
        />
    )
}

export default OptionObj    

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries