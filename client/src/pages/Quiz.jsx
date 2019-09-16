import React from 'react'
import { 
    AddObj,
    ListObj
} from '../components'

const Quiz = () => {
    return (
        <div>
            <AddObj
                AddObjectName={'Quiz'}
            />
            <ListObj 
                type={"Quiz"}
            />
        </div>
    )
}

export default Quiz