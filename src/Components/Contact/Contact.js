import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='mt-3 bg-light'>
            <h3 className='mx-auto text-center'>Contact Us</h3>
            <div className='w-50 p-4'>
                <Form className='w-100'>
                    <input className='w-100' type="text" value=' Name' placeholder='Name' /> <br />
                    <input className='w-100' type="email" value='Email' placeholder='Email' /> <br />
                    <input className='w-100' type="text" value='Subject' placeholder='Subject' /> <br />
                    <textarea className='w-100' name="Message" id="" cols="30" rows="3"></textarea>
                </Form>
            </div>

        </div>
    );
};

export default Contact;