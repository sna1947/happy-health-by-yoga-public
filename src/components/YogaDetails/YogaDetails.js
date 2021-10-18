import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './YogaDetails.css'

const YogaDetails = () => {
    const {yogaId} = useParams();
    const [yoga, setYoga] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/sna1947/yogason/main/yogason.js')
        .then(res => res.json())
        .then(data =>{
            const p = data.find(d=>d.id==yogaId)
            setYoga(p)
        })
    },[yogaId]);
    return (
        <div className='card-bd' >
        <Card.Body className='yoga-details'>
            {/* <Card.Title> <h4>Yoga: {name}</h4></Card.Title> */}
            <Card.Text>
                <img className='yogaImgDtls' src={yoga.img} alt="" />
                <h4>Serial: {yoga.id}</h4>
                <h5>Yoga: {yoga.name}</h5>
                <h6>Benefit: {yoga.benefit}</h6>
                <h6>Style: {yoga.style}</h6>
            </Card.Text>
           <button className='bg-warning  text-danger fw-bold rounded'><Link to='/home'>Home</Link></button>
        </Card.Body>
    </div>
    );
};

export default YogaDetails;