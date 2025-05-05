import React from 'react';
import swimmingImg from"../../assets/swimming.png";
import ClassImg from "../../assets/class.png";
import PlayImg from"../../assets/playground.png";
const Qzone = () => {
    return (
        <div className='bg-base-200 p-2 rounded-lg'>
            <h2 className='font-bold'>QZone</h2>
       <div>
        <img src={swimmingImg} alt="" />
        <img src={ClassImg} alt="" />
        <img src={PlayImg} alt="" />
       </div>
        </div>
    );
};

export default Qzone;