import React from 'react'
import { 
    AddObj,
    ListObj
} from '../components'

const Question = () => {
    return (
        <div>
            <AddObj
                AddObjectName={'Question'}
            />
            <ListObj
                type={'Question'}
            />
        </div>
    )
}

export default Question