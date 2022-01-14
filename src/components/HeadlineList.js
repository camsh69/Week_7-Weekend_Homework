import React from 'react'
import Headline from './Headline'

const HeadlineList = ({headlines, index}) => {
    
    const headlineNodes = headlines.map(headline => {
        return <Headline headline={headline} key={headline.id} />
    })
    
    return (
        <div>
            <h2>HeadlineList</h2>
            <ul>
                {headlineNodes}
            </ul>
        </div>
    )
}

export default HeadlineList;
