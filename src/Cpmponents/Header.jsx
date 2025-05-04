import React from 'react';
import logo from "../assets/logo.png";
import { format } from 'date-fns'; 



const Header = () => {
    return (
        <div className='flex justify-center
         flex-col items-center gap-3'>
        <img className='w[400px] mt-5' src={logo} alt="" />
        <p className='text-accent '>Journalism without Fear or Fevour</p>
       
        <p className='poppins text-accent'> 
            {format(new Date(),"EEEE, MMMM dd, yyyy")}</p>
        </div>
    );
};

export default Header;