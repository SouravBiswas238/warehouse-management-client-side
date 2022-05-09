import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';


const Inventory = (props) => {

    const { inventoryId } = useParams();
    const [bike, setBike] = useState();
    const [load, setLoad] = useState(false);

    // const { productName, supplierName, price, about, image, quantity, _id } = props.bike;


    useEffect(() => {
        const url = `https://tranquil-beach-35648.herokuapp.com/bikes/${inventoryId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setBike(data))

    }, [load]);

    const handelQuantityUpdate = (event) => {
        console.log('clicked')
    }

    const handelQuantityValue = (event) => {
        event.preventDefault();
        const updateQuantity = event.target.updateQuantity.value;
        const quantity = { updateQuantity };

        //send data to server
        console.log(inventoryId);
        const url = `https://tranquil-beach-35648.herokuapp.com/bikes/${inventoryId}`

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(quantity)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    setLoad(!load);
                }
                alert('user added Successfully!!');
                event.target.reset();
            })
        // console.log(quantity)
    }

    const [user] = useAuthState(auth);
    if (!user || !bike?.image) {
        return <Loading></Loading>
    }




    return (
        <div className='row'>
            <div className="col-md-6 mb-2 ">
                <div className='card bg-secondary'>
                    <div className="card-body bg-secondary text-light">
                        <img className='w-100 mx-auto' src={bike?.image} alt="bike-img" />

                        <h5 className="card-title">{bike?.productName}</h5>
                        <p>price: {bike?.price}</p>
                        <p >Min. Order: <span className='text-warning'>{bike?.quantity}</span> </p>
                        <p className="card-text">{bike?.about}</p>
                        <div className='d-flex justify-content-between'>
                            <p className='d-inline-block text-warning'>Supplier: {bike?.supplierName}</p>
                            <button onClick={handelQuantityUpdate} className="btn btn-warning">Delivered</button>
                        </div>
                        <form onSubmit={handelQuantityValue}>
                            <input className='m-2' type="number" name='updateQuantity' placeholder='Update Quantity' required />
                            <input className='m-2' type="submit" value='Update' />
                        </form>
                    </div>

                </div>
            </div>

            <div className='col-md-6  mb-2 '>

            </div>
        </div>
    );
};

export default Inventory;