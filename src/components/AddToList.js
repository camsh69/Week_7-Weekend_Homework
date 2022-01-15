import React from 'react'

const AddToList = ({headline, headlineAdd}) => {

    const handleOnClick = () => headlineAdd(headline);

    return (
        <button className='add' onClick={handleOnClick}>+</button>
    )
}

export default AddToList;
