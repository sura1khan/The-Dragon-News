import React from 'react';
import { NavLink } from 'react-router';
import user from "../assets/user.png"

const Navbar = () => {
    return (
        <>
           <div className='flex justify-between items-center'>
           <div></div>
           <div className='nav flex gap-5 text-accent '>
            <NavLink to="/">Home </NavLink>
            <NavLink to="/about">About </NavLink>
            <NavLink to="/career">Career </NavLink>
            </div>
            <div className='login-btn flex gap-3'> 
                <img className='w-[30%] h-[80%]' src={user} alt="user-img" />
            <button className='btn btn-primary  px-8'>Log In</button>
        </div>
        </div>
        </>

    );
};

export default Navbar;