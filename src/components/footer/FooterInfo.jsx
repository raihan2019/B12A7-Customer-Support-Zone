import React from 'react';

const FooterInfo = () => {
    return (
        <div className='flex flex-col justify-between text-center xl:text-left gap-5 xl:w-[20%]'>
            <h2 className='text-xl font-medium'>
                CS — Ticket System
            </h2>
            <p className='text-gray-400'>
                CS — Ticket System is a simple and efficient platform where customers can easily report their problems, feedback, or feature requests. Customers can see the progress of their reports as they move from Open to In Progress and finally Resolved. 
            </p>
        </div>
    );
};

export default FooterInfo;