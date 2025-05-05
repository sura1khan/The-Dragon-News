import React from 'react';
import { Link } from 'react-router';

const Forgot = () => {
    return (
        <div>
         <div className="hero bg-base-200 ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-2xl font-bold ">Create New Password</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Usename</label>
          <input type="username" className="input" placeholder="Username" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <label className="label"> Confirm Password</label>
          <input type="password" className="input" placeholder=" Confirm Password" />
     
        
          <button className="btn btn-neutral  mt-4"><Link  to="/auth/login"> Reset Password</Link></button>
        
         
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Forgot;