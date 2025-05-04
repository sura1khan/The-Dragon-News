import React from 'react';
import Marquee from "react-fast-marquee";
const LatestNews = () => {
    return (
       <>
       <div className='flex bg-base-200 p-3  rounded-lg'>
        <p  className='text-base-100 px-2
        rounded-md bg-secondary '>Latest</p>
        <p className='font-bold '><Marquee className='flex gap-5' 
        pauseOnHover={true} speed={50}>Lorem, ipsum dolor 
            sit amet ipsum dolor sit amet ipsum dolor sit..  </Marquee> </p>
       </div>
       
       </>
    );
};

export default LatestNews;