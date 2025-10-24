import React from 'react';
import Navbar from '../components/Nabvar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3'>
             <Navbar></Navbar>
            </header>
            <main>
              <Outlet></Outlet>
            </main>
            <footer>
             <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;