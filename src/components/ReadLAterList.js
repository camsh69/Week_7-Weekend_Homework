import React from 'react'
import ReadLaterHeadline from './ReadLaterHeadline';

const ReadLAterList = ({readLater, onHeadlineClick,})=> {

    const readLaterList = readLater.map(headline => <ReadLaterHeadline headline={headline} key={headline.id} onHeadlineClick={onHeadlineClick} />)

    return (
        <ul>
            {readLaterList}
        </ul>
    )
}

export default ReadLAterList;
