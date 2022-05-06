import React from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {

    const { inventoryId } = useParams();


    return (
        <div>

            <p>this is inventory {inventoryId} </p>
        </div>
    );
};

export default Inventory;