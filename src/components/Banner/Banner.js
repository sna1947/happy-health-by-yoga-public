import React from 'react';
import img from '../../image/homeimg1.jpg'
const Banner = () => {
    return (
        <div>
            <img className='img-fluid' src={img} alt="" />
        </div>
    );
};

export default Banner;