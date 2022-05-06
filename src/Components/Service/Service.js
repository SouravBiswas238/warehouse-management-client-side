import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, about, picture, prize, _id } = props.service;
    const navigate = useNavigate();
    const handelchakeOutId = (_id) => {
        navigate(`/inventory/${_id}`);
    }
    return (


        <div className="col-md-4 mb-2 ">
            <div className='card bg-secondary'>
                <div className="card-body bg-secondary text-light">
                    <img className='w-100 mx-auto' src={picture} alt="bike-img" />

                    <h5 className="card-title">{name}</h5>
                    <p>price: {prize}</p>
                    <p>Min. Order: {prize}</p>
                    <p className="card-text">{about.slice(0, 30)}.....</p>
                    <div className='d-flex justify-content-between'>
                        <p className='d-inline-block text-warning'>Supplier: {name}</p>
                        <button onClick={() => handelchakeOutId(_id)} className="btn btn-warning">Update</button>
                    </div>

                </div>
            </div>
        </div>



    );
};

export default Service;