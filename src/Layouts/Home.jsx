import React from 'react';
import Header from '../Cpmponents/Header';
import { Outlet } from 'react-router';
import LatestNews from '../Cpmponents/LatestNews';
import Navbar from '../Cpmponents/Navbar';
import LeftAside from '../Cpmponents/HomeLayout/LeftAside';
import RightAside from '../Cpmponents/HomeLayout/RightAside';
import FindUs from '../Cpmponents/FindUs';
import Qzone from '../Cpmponents/HomeLayout/Qzone';

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
                <main className='w-11/12 mx-auto my-3 gap-5
                grid grid-cols-12'>
                    <aside className='col-span-3'> 
                        <LeftAside></LeftAside>
                    </aside>
                    <section className='main col-span-6'>
                   <Outlet></Outlet>
                    </section>
                    <aside  className='col-span-3 space-y-5'>
                        <RightAside></RightAside>
                        <FindUs></FindUs>
                        <Qzone></Qzone>
                    </aside>
               <section className='right-nav'></section>
                </main>
          
        </div>
        </>
    );
};

export default Home;