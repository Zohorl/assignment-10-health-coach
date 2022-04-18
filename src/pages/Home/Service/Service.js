import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, img, name, price, description } = service;

    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }

    return (
        <div id='service' className='border w-75 text-center rounded-3 p-2 shadow-lg mb-5'>
            <img className='w-100 rounded-3 pb-3' src={img} alt="" />
            <h3>{name}</h3>
            <p>Price : ${price}</p>
            <p><small>{description.length > 150 ? description.slice(0, 150) + '  ...See More' : description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} id='service-btn' className='px-4 rounded-pill border-0 text-dark fs-5'>Book Now</button>
        </div>
    );
};

export default Service;