import React from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ManageInventoryItem = (props) => {
    const { name, about, picture, prize, _id } = props.service;
    const navigate = useNavigate();
    const handelchakeOutId = (_id) => {
        navigate(`/inventory/${_id}`);
    }


    return (

        <tbody>
            <tr>
                <td>{
                    1}</td>
                <td>{name}</td>
                <td>{name}</td>
                <td>{name}</td>
                <td>{_id}</td>
                <td><button className='px-3 d-inline-block' onClick={() => console.log("a")}>delete icon</button></td>
            </tr>

        </tbody>



    );
};

export default ManageInventoryItem;