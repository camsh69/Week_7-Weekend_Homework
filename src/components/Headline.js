import React from 'react'
import './Headline.css'

const Headline= ({headline, onHeadlineClick}) => {

    const handleClick = () => {
        onHeadlineClick(headline.webUrl)
    } 

    return (
        <li onClick={handleClick}>
        {headline.webTitle}
            <p></p>
        </li>
    )
}

export default Headline;
