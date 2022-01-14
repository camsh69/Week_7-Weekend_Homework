import React from 'react'
import Headline from './Headline'

const HeadlineList = ({headlines}) => {
    
    const headlineNodes = headlines.map(headline => {
        return <Headline headline={headline} key={headline.id} />
    })
    
    return (
        <div>
            <ul>
                {headlineNodes}
            </ul>
        </div>
    )
}

export default HeadlineList;
