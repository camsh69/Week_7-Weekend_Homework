import React from 'react'
import AddToList from './AddToList'
import './Headline.css'

const Headline= ({headline, onHeadlineClick, headlineAdd}) => {

    const handleClick = () => onHeadlineClick(headline.webUrl)

    return (
        <li>
            <span className='redHover' onClick={handleClick}>{headline.webTitle}</span>
            <AddToList headline={headline} headlineAdd={headlineAdd}/>
        </li>
    )
}

export default Headline;
