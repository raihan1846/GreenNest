import React from 'react';
import Navbar from '../components/Nabvar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet , useNavigation } from 'react-router';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header className='w-11/12 mx-auto my-3'>
             <Navbar></Navbar>
            </header>
            <main>
              {
                state == "loading" ? <Loading></Loading> : <Outlet></Outlet>
              }
            </main>
            <footer>
             <Footer></Footer>
            </footer>
        </div>
    );
};

export default HomeLayout;