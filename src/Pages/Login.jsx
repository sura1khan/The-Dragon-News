import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div>
        <div className="hero bg-base-200 ">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-4xl font-bold">Login now!</h1>
      <p className="py-4 text-accent font-mono " >
       Delivaring fast, accurate and unbiased news stories.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <p > <Link className='border-b-2' to="/auth/forgot"> Forgot password?</Link></p>
        
          <button  className="btn btn-neutral mt-4">Login</button>
          <p className='text-center text-primary'>Don't have an account ?
            <Link className='text-secondary border-b-2' to="/auth/register">Register</Link></p>
        </fieldset>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;