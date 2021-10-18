import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Yoga from '../Yoga/Yoga';

const YogaAll = () => {
    const [yogaall, setYogaAll] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sna1947/yogason/main/yogason.js')
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => setYogaAll(data))
    },[]);
    return (
        <div className='container'>
            <Row xs={1} md={3} >
            {
                yogaall.map(yoga=><Yoga
                key={yoga.id}
                yoga={yoga}
                ></Yoga>)
            }
            </Row>
        </div>
    );
};

export default YogaAll;