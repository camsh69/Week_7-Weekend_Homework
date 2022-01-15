import React from 'react'
import Headline from './Headline'

const HeadlineList = ({headlines, onHeadlineClick, headlineAdd}) => {
    
    const headlineNodes = headlines.map(headline => <Headline headline={headline} key={headline.id} onHeadlineClick={onHeadlineClick} headlineAdd={headlineAdd}/>)
    
    return (
            <ul>
                {headlineNodes}
            </ul>
    )
}

export default HeadlineList;
