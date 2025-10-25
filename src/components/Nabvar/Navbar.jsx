import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    // console.log(user);
    const handleLogout = () => {
        logOut().then(() => {
            toast.success("You Logout successfully..")
        })
            .catch((error) => {
                toast.error("Faild Logout!!")
            })
    }
    const links = (
        <>
            <li><a href="/">Home</a></li>
            <li><a href="/plants">Plants</a></li>
            <li><a href="/my-profile">My Profile</a></li>
        </>
    );
    return (
        <div className="navbar bg-base-100 shadow-sm mb-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-green-400 text-xl">GreenNest</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <details>
                                <summary className="flex items-center gap-2">
                                    <img
                                        src={user?.photoURL || "https://i.postimg.cc/3JmM6C0G/default-avatar.png"}
                                        alt="user-avatar"
                                        className="w-8 h-8 rounded-full object-cover"
                                    />
                                    {user?.displayName || "User"}
                                </summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    {
                                        user ?
                                            <li><Link className='btn btn-primary px-10' onClick={handleLogout}>Logout</Link></li>

                                            :
                                            <> <li><Link className='btn btn-primary px-10 my-1' to="/auth/login">Login</Link></li>
                                                <li><Link className='btn btn-secondary px-10' to="/auth/register">Registration</Link></li>
                                            </>
                                    }
                                    <ToastContainer></ToastContainer>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;