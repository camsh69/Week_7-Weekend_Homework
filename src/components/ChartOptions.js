import React, {useState } from 'react'

const ChartOptions = ({selectDonut, select3D}) => {

    const handleNormalClick = () => {
        selectDonut(false);
        select3D(false);
    }

    const handleDonutClick = () => {
        selectDonut(true);
        select3D(false);

    }

    const handleIs3DClick = () => {
        selectDonut(false);
        select3D(true);
    }

    return (
        <>
            <button type='button' onClick={handleNormalClick}>Normal</button>
            <button type='button' onClick={handleDonutClick}>Donut</button>
            <button type='button' onClick={handleIs3DClick}>3D</button>
        </>
    )
}

export default ChartOptions;
