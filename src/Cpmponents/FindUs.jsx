import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
         <h2 className='font-bold mb-5'>   Find us on </h2>
        <div>
        <div className="w-full join join-vertical ">
  <button className="justify-start bg-base-100 btn join-item hover:bg-base-200"><FaFacebook></FaFacebook> Facebook </button>
  <button className="justify-start bg-base-100 btn join-item hover:bg-base-200"><FaTwitter></FaTwitter> Twitter</button>
  <button className="justify-start bg-base-100 btn join-item hover:bg-base-200"><FaInstagram></FaInstagram> Instagram</button>
</div>
        </div>
        
        
        </div>
    );
};

export default FindUs;