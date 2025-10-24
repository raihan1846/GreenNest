import React from 'react';
import { FaInstagram, FaFacebookF, FaPinterestP } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-base-300 '>
            <footer className="flex justify-between sm:footer-horizontal bg-base-300 text-base-content p-10 w-11/12 mx-auto py-3">
                <nav className='flex flex-col space-y-2'>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">About</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Privacy Policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaInstagram size={24} />
                        </a>
                        <a>
                            <FaFacebookF size={24} />
                        </a>
                        <a>
                            <FaPinterestP size={24} />
                        </a>
                    </div>
                </nav>
               
            </footer>
            <div>
                    <p className='text-center p-3'>© 2025 GreenNest. All rights reserved.</p>
                </div>
        </div>
    );
};

export default Footer;