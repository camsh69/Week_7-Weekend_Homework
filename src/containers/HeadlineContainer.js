import React from 'react'
import HeadlineList from '../components/HeadlineList'
import HeadlineFilter from '../components/HeadlineFilter'


const HeadlineContainer = () => {
    return (
        <div>
            <h1>HeadlineContainer</h1>
            <HeadlineFilter/>
            <HeadlineList/>
        </div>
    )
}

export default HeadlineContainer
