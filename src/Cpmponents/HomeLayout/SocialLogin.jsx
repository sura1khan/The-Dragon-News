import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { IoLogoGithub } from 'react-icons/io';

const SocialLogin = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Login With</h2>
       <div className='space-y-3'>
        <button className='btn btn-outline btn-secondary w-full'>
        <FcGoogle size={24} /> Login with google</button>
        <button className='btn btn-outline btn-primary w-full'>
        <IoLogoGithub size={24}/> Login with GitHub</button>

       </div>
        </div>
    );
};

export default SocialLogin;