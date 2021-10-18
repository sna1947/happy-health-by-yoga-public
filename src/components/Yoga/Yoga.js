import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Yoga.css'

const Yoga = (props) => {
    const {id,img,name,benefit,style} = props.yoga;
    const url = `/yoga/${id}`;

    return (
        <div className='yoga'>
            <Card.Body >
                {/* <Card.Title> <h4>Yoga: {name}</h4></Card.Title> */}
                <Card.Text>
                    <img className='card-img' src={img} alt="" />
                    <h4>Serial: {id}</h4>
                    <h5>Yoga: {name}</h5>
                    {/* <h6>Benefit: {benefit}</h6> */}
                    <h6>Style: {style}</h6>
                </Card.Text>
               {/* <Link to={`/food/${id}`}></Link> */}
               {/* <Link to={url}>visit me</Link> */}
               <button className='bg-warning  text-danger fw-bold rounded'><Link to={url}>visit me</Link></button>
            </Card.Body>
        </div>
    );
};

export default Yoga;