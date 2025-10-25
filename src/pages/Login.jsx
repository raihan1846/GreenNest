import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState("");

    const {signIn} = use(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
      
        signIn(email, password).then(result=>{
            const user = result.user;
           console.log(user);
           navigate(`${location.state ? location.state : "/"}`)
        })
        .catch(error=>{ 
            // console.log(error.message);
            // alert(error.message)
            setError(error.message)
        })

    }
    return (
        <div className="flex justify-center bg-base-200 min-h-screen items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                    <form  onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                            <label className="label">Password</label>
                            <input type="password" name='password' className="input" placeholder="Password" />
                            <div><a className="link link-hover">Forgot password?</a></div>
                            {
                                error && <p className='text-red-400'>{error}</p>
                            }
                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-center mt-4'>Dont't Have An Account ? <Link to="/auth/register" className='text-secondary'>Register</Link></p>
                        </fieldset>
                    </form>
                </div>
        </div>
    );
};

export default Login;