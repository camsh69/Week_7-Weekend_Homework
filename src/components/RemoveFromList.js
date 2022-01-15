import React from 'react'

const RemoveFromList = ({headline, headlineRemove}) => {
    
    const handleOnClick = () => headlineRemove(headline);

    return (
        <button className='remove' onClick={handleOnClick}>-</button>
    )
}

export default RemoveFromList;
