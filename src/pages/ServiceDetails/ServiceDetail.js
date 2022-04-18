import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center'>Welcome To Our Service : {serviceId}</h2>
            <div className='text-center mt-5'>
                <Link to='/checkout'>
                    <button className='btn btn-success'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;