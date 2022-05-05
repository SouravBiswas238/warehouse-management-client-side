import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div className='bg-dark'>
            <footer className="d-flex justify-content-between mx-5 ">
                <div className="m-2">
                    <span className="text-muted">copy right © 2022</span>
                </div>

                <div className="nav d-flex text-muted">


                    <img className=' w-10 m-2' src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" alt="" />
                    <img className='w-10 m-2' src="https://www.logo.wine/a/logo/Instagram/Instagram-Logo.wine.svg" alt="" />

                    <img className='w-10 m-2' src="https://pnggrid.com/wp-content/uploads/2021/05/Facebook-logo-2021.png" alt="" />
                </div >


            </footer >
        </div>
    );
};

export default Footer;
