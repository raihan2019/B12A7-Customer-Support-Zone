import React from 'react';
import './Navbar.css';
import vect1 from '../../assets/vector1.png';
import vect2 from '../../assets/vector3.png';



const Navbar2 = ({countProgress , countResolve }) => {
    return (
        <div className='flex justify-between p-10 2xl:p-20 text-white gap-5'> 
            <div className={`relative rounded-2xl bannerCard p-10 flex justify-center items-center flex-col w-full`}>
                <img className='absolute left-0' src={vect1} alt="" />
                <img className='absolute right-0' src={vect2} alt="" />
                <h3 className='xl:text-2xl font-medium'>
                    In-Progress
                </h3>
                <h2 className="font-bold text-4xl">
                   {countProgress}
                </h2>
            </div>
            
                <div className={`relative bg-linear-to-r from-[#54CF68] to-[#00827a] rounded-2xl banner-card p-10 flex justify-center items-center w-full flex-col`}>

                    <img className='absolute left-0' src={vect1} alt="" />
                    <img className='absolute right-0' src={vect2} alt=""  />
                    <h3 className='xl:text-2xl font-medium'>
                        Resolved
                    </h3>
                    <h2 className="font-bold text-4xl">
                        {countResolve}
                    </h2>
                </div>
           
            
            
        </div>
    );
};

export default Navbar2;