import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useService from '../../hooks/useService';

const AddItem = () => {

    const { services, setServices } = useService()



    const handelAddUser = event => {
        event.preventDefault();
        const productName = event.target.productName.value;
        const supplierName = event.target.supplierName.value;
        const price = event.target.price.value;
        const about = event.target.about.value;
        const image = event.target.image.value;
        const quantity = event.target.quantity.value;

        const bike = { productName, supplierName, price, about, image, quantity };
        // post data to server

        fetch('https://tranquil-beach-35648.herokuapp.com/bike', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bike),
        })
            .then(res => res.json())
            .then(data => {
                // console.log('success', data);
                const { response } = data;
                const newBikes = [...services, data];
                setServices(newBikes);
                if (response.insertedId) {
                    toast("your data booked");
                    event.target.reset();
                }

            })


    }
    return (
        <div className='w-md-50 mx-auto p-2'>
            <form onSubmit={handelAddUser} >
                <input className='mb-2 w-100' type="text" name='productName' placeholder='Product name' required />
                <input className='mb-2 w-100' type="text" name='supplierName' placeholder='Supplier name' required />
                <input className='mb-2 w-100' type="text" name='price' placeholder='Price' required />
                <textarea className='mb-2 w-100' name="about" id="" cols="20" rows="5"></textarea>
                <input className='mb-2 w-100' type="text" name='image' placeholder='Image Url' required />
                <input className='mb-2 w-100' type="number" name='quantity' placeholder='Quantity' required />
                <input className='mb-2 w-100' type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default AddItem;