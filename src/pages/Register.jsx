import React, { use } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
    const {createUser, setUser, updateUser} = use(AuthContext)
    const navigate = useNavigate();
    const handleRegister= (e)=>{
     e.preventDefault();
     const form = e.target;
     const name = form.name.value;
     const photo_url = form.photo_url.value;
     const email = form.email.value;
     const password = form.password.value;

     createUser(email,password)
     .then((result)=>{
     const user = result.user;
     updateUser({displayName : name, photoUrl: photo_url}).then(()=>{
        setUser({...user, displayName : name, photoUrl: photo_url})
        navigate("/")
     })
     .catch(error=>{
        console.log(error.message);
        setUser(user)
     });
     
     })
     .catch(error=>{
        console.log(error.message);
     })
    }
    return (
        <div className="flex justify-center bg-base-200 min-h-screen items-center">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
            <form onSubmit={handleRegister} className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input type="text" className="input" name='name' placeholder="Name" />

                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name='photo_url' placeholder="Photo URL..." />

                    <label className="label">Email</label>
                    <input type="email" className="input" name='email' placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" className="input" name='password' placeholder="Password" />

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4" type='submit'>Register</button>
                    <p className='text-center mt-4'>Already Have An Account ? <Link to="/auth/login" className='text-secondary'>Login</Link></p>
                </fieldset>
            </form>
        </div>
</div>
    );
};

export default Register;