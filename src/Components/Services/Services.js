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
        <div id="services" className='bg-black'>
            <h1 className='text-center f-bold text-light  m-0 py-3 mb-0
        '>Our Services</h1>

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