import React, { useEffect, useState } from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useService from '../../hooks/useService';
import Loading from '../Loading/Loading';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useService();

    const navigate = useNavigate();
    const handelManageInventory = () => {
        navigate(`/manage-inventory`);
    }


    if (!services) {
        return <Loading></Loading>
    }
    return (
        <div id="services" className='bg-black mx-auto text-center'>
            <h1 className='text-center f-bold text-light  m-0 py-3 mb-0
        '>Our Services</h1>

            <div className='container'>
                <div className="row">
                    {
                        services.slice(0, 6).map(service => <Service service={service}></Service>)
                    }
                </div>

            </div>
            <button onClick={handelManageInventory} className='text-center btn btn-success m-3'>Manage Inventories</button>
        </div>
    );
};

export default Services;