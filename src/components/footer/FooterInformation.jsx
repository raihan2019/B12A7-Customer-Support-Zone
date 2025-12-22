import React from 'react';

const FooterInformation = () => {
    return (
        <div className='justify-self-center text-center md:text-left'>
            <h2 className='text-lg font-medium'>Information</h2>
            <ul className='flex flex-col gap-2 mt-5'> 
                <li><a href="" className="text-gray-400">Privacy Policy</a></li>
                <li><a href="" className="text-gray-400">Terms & Conditions</a></li>
                <li><a href="" className="text-gray-400">Join Us</a></li>
            </ul>
            
        </div>
    );
};

export default FooterInformation;