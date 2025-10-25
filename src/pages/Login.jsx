    import React, { use, useEffect, useState } from 'react';
    import { Link, useLocation, useNavigate } from 'react-router';
    import { AuthContext } from '../provider/AuthProvider';
    import { toast, ToastContainer } from 'react-toastify';
    import {  sendPasswordResetEmail } from 'firebase/auth';

    const Login = () => {
        const [error, setError] = useState("");
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
        const [showPassword, setShowPassword] = useState(false);

        const { signIn,  googleSignIn, auth } = use(AuthContext);
        const location = useLocation();
        const navigate = useNavigate();
        // console.log(location);

        const handleLogin = (e) => {
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;

            signIn(email, password).then(result => {
                const user = result.user;
                navigate(`${location.state ? location.state : "/"}`)
                toast.success("Successfully Loged In!!")
            })
                .catch(error => {
                    toast.error("Login Faild!!")
                    setError(error.message)
                })

        }
    
        const handleForgotPassword = () => {
            if (!email) {
                toast.warn("Please enter your email first!");
                return;
            }
            const actionCodeSettings = {
                url: "https://enchanting-klepon-398bce.netlify.app",
                handleCodeInApp: false,
            };
            sendPasswordResetEmail(auth, email, actionCodeSettings)
                .then(() => {
                    toast.success("Password reset email sent! Check your Gmail inbox.");
                })
                .catch((err) => {
                    toast.error("" + err.message);
                });
        }
       
         // Google login
         const handleGoogleLogin = async () => {
            try {
                const result = await googleSignIn();
                const user = result.user;
                console.log("Google User:", user);
                console.log("Provider Data:", user.providerData);
                toast.success("Google Sign in successfully");
                navigate(location.state?.from || "/");
            } catch (err) {
                console.error("Google Sign-In Error:", err);
                toast.error("Google sign in faild " + err.message);
            }
        };

        return (
            <div className="flex justify-center bg-base-200 min-h-screen items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                    <form onSubmit={handleLogin} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
                            <label className="label">Password</label>
                            <input type={showPassword ? "text" : "password"} name='password' className="input" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="ml-2 text-green-600 font-medium"
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                            <div><button className="link link-hover" onClick={handleForgotPassword}>Forgot password?</button></div>

                            <button className="btn btn-neutral mt-4">Login</button>
                            <p className='text-center mt-4'>Dont't Have An Account ? <Link to="/auth/register" className='text-secondary'>Register</Link></p>
                            <div className="divider">OR</div>

                            <button
                                type="button"
                                onClick={handleGoogleLogin}
                                className="btn btn-outline btn-google mt-4 w-full"
                            >
                                Continue with Google
                            </button>
                            <ToastContainer></ToastContainer>

                        </fieldset>
                    </form>
                </div>
            </div>
        );
    };

    export default Login;