import React, { useEffect, useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('generated.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div id="services" className='bg-light'>
            <h1 className='text-center f-bold text-dark  m-0 pt-3 mb-0
        '>WHAT WE OFFER</h1>
            <p className='text-danger text-center'>Our Services</p>

            <div className='container'>
                <div className="row">
                    {
                        services.map(service => <Service service={service}></Service>)
                    }
                </div>

            </div>

        </div>
    );
};

export default Services;