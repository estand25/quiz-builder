import React from 'react'
import OptionButton from './OptionButton'
import styled from 'styled-components'
const Holder = styled.div``

const OptionObj = (props) => {
    if(props.options.length === 0 ){
        return (
            <Holder />
        )
    }

    var op = []

    let opt = null;
    let subItem = null;

    for (opt of Object.entries(props.options)) {
        for(var a=1; a < opt.length; a = a + 3){
            subItem = opt[a]
            Object.getOwnPropertyNames(subItem).forEach(val => {
                    op.push(subItem[val])
                }
            )
        }
    }


    return (
        <OptionButton
            option={op}
            onOptionModif={props.onOptionModif}
        />
    )
}

export default OptionObj    

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries