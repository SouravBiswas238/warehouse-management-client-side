import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Inventory = (props) => {

    const { inventoryId } = useParams();
    const [service, setService] = useState();

    useEffect(() => {
        const url = `https://tranquil-beach-35648.herokuapp.com/bikes/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))

    }, [])


    const [user] = useAuthState(auth);
    if (!user || !service?.picture) {
        return <Loading></Loading>
    }



    return (
        <div className="col-md-6 mb-2 ">
            <div className='card bg-secondary'>
                <div className="card-body bg-secondary text-light">
                    <img className='w-100 mx-auto' src={service?.picture} alt="bike-img" />

                    <h5 className="card-title">{service?.name}</h5>
                    <p>price: {service?.prize}</p>
                    <p>Min. Order: {service?.prize}</p>
                    <p className="card-text">{service?.about}</p>
                    <div className='d-flex justify-content-between'>
                        <p className='d-inline-block text-warning'>Supplier: {service?.name}</p>
                        <button className="btn btn-warning">Delivered</button>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Inventory;