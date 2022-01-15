import React from 'react'
import RemoveFromList from './RemoveFromList'
import './Component.css'

const Headline= ({headline, onHeadlineClick, headlineRemove}) => {

    const handleClick = () => onHeadlineClick(headline.webUrl)

    return (
        <li>
            <span className='redHover' onClick={handleClick}>{headline.webTitle}</span>
            <RemoveFromList headline={headline} headlineRemove={headlineRemove} />
        </li>
    )
}

export default Headline;
