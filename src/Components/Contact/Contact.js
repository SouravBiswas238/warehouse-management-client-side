import React from 'react';
import { Button, Form } from 'react-bootstrap';
import MyLocation from '../MyLocation/MyLocation';

const Contact = () => {
    return (
        <div className='pt-3 border bg-secondary'>
            <h3 className='mx-auto text-center'>Contact Us</h3>

            <div className='d-flex'>


                <div className='w-50 p-4'>
                    <Form className='w-100'>
                        <input className='w-100 mb-2' type="text" value=' Name' placeholder='Name' /> <br />
                        <input className='w-100 mb-2' type="email" value='Email' placeholder='Email' /> <br />
                        <input className='w-100 mb-2' type="text" value='Subject' placeholder='Subject' /> <br />
                        <textarea className='w-100 mb-2' name="Message" id="" cols="30" rows="3"></textarea>
                        <button className="btn btn-primary">Submit</button>
                    </Form>
                </div>
                <div className='w-50  p-4'>
                    <MyLocation></MyLocation>
                </div>
            </div>
        </div>
    );
};

export default Contact;