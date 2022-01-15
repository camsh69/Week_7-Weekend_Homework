import React from 'react'
import RemoveFromList from './RemoveFromList'
import './Headline.css'

const Headline= ({headline, onHeadlineClick}) => {

    const handleClick = () => onHeadlineClick(headline.webUrl)

    return (
        <li>
            <span className='redHover' onClick={handleClick}>{headline.webTitle}</span>
            <RemoveFromList headline={headline}/>
        </li>
    )
}

export default Headline;
