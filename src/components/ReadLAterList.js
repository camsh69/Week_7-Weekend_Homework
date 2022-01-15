import React from 'react'
import ReadLaterHeadline from './ReadLaterHeadline';

const ReadLaterList = ({readLater, onHeadlineClick, headlineRemove})=> {

    const readLaterList = readLater.map(headline => <ReadLaterHeadline headline={headline} key={headline.id} onHeadlineClick={onHeadlineClick} headlineRemove={headlineRemove} />)

    return (
        <ul>
            {readLaterList}
        </ul>
    )
}

export default ReadLaterList;
