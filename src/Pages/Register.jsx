import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
      <div className="hero bg-base-200 ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register Your Account</h1>
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
         
         
          <button className="btn btn-neutral mt-4">Register Now</button>
          <p className='text-center text-primary'>Already Have an Account? 
            <Link className='text-secondary border-b-2' to="/auth/login">Log In.</Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;