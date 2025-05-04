import React from 'react';
import Header from '../Cpmponents/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Cpmponents/LatestNews';
import Navbar from '../Cpmponents/Navbar';
import LeftAside from '../Cpmponents/HomeLayout/LeftAside';
import RightAside from '../Cpmponents/HomeLayout/RightAside';

const Home = () => {
    return (
        <>
        <div>
            <header>
                <Header></Header>
                <section className='w-10/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-10/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
                </header>
                <main className='w-11/12 mx-auto my-3 
                grid grid-cols-12'>
                    <aside className='col-span-3'> 
                        <LeftAside></LeftAside>
                    </aside>
                    <section className='main col-span-6'>
                   <Outlet></Outlet>
                    </section>
                    <aside  className='col-span-3'>
                        <RightAside></RightAside>
                    </aside>
               <section className='right-nav'></section>
                </main>
          
        </div>
        </>
    );
};

export default Home;