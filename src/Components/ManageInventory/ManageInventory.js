import React from 'react';
import { Table } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useService from '../../hooks/useService';
import Loading from '../Loading/Loading';
import ManageInventoryItem from '../ManageInventoryItem/ManageInventoryItem';

const ManageInventory = () => {

    const { services } = useService();
    const navigate = useNavigate();

    const handelAddItem = () => {
        navigate(`/product-add-form`);
    }

    const [user] = useAuthState(auth);
    if (!user) {
        return <Loading></Loading>
    }



    return (
        <div id="services" className='bg-black'>
            <div className='container'>
                <button onClick={handelAddItem} className='float-end m-3 btn btn-secondary'>Added Item +</button>
                <h1 className='text-center f-bold text-light  m-0 py-3 mb-0'>Manage Services </h1>

            </div>
            <div className='container'>
                <div className="">

                    <Table responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Supplier Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Product Id</th>
                                <th>Delete Item</th>
                            </tr>

                        </thead>
                        {
                            services.map(service => <ManageInventoryItem key={service._id} service={service}></ManageInventoryItem>)
                        }
                    </Table>

                </div>

            </div>
        </div>
    );
};

export default ManageInventory;