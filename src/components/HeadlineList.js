import React from 'react'
import Headline from './Headline'

const HeadlineList = ({headlines, onHeadlineClick}) => {
    
    const headlineNodes = headlines.map(headline => {
        return <Headline headline={headline} key={headline.id} onHeadlineClick={onHeadlineClick}/>
    })
    
    return (
            <ul>
                {headlineNodes}
            </ul>
    )
}

export default HeadlineList;
