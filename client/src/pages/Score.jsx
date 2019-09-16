import React from 'react'
import { 
    AddObj,
    ListObj
} from '../components'

const Score = () => {
    return (
        <div>
            <AddObj
                AddObjectName={'Score'}
            />
            <ListObj
                type={'Score'}
            />
        </div>
    )
}

export default Score