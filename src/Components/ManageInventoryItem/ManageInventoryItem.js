import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useService from '../../hooks/useService';

const ManageInventoryItem = (props) => {
    // console.log(props.service);
    const { productName, supplierName, price, about, picture, quantity, _id } = props.service;
    // const navigate = useNavigate();
    // const handelchakeOutId = (_id) => {
    //     navigate(`/inventory/${_id}`);
    // }
    const { handelDelete } = useService();

    return (

        <tbody>
            <tr>
                <td>{
                    1}</td>
                <td>{productName}</td>
                <td>{supplierName}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{_id}</td>
                <td><button className='px-3 d-inline-block' onClick={() => handelDelete(_id)}>delete icon</button></td>
            </tr>

        </tbody>



    );
};

export default ManageInventoryItem;