import React from 'react';
import Navbar from '../components/Nabvar/Navbar';
import Footer from '../components/Footer/Footer';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto my-3'>
             <Navbar></Navbar>
            </header>
            <main>

            </main>
            <footer>
             <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;