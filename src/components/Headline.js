import React from 'react'

const Headline= ({headline}) => {
    return (
        <li>
            <a href={headline.webUrl}>{headline.webTitle}</a>
            <p></p>
        </li>
    )
}

export default Headline;
