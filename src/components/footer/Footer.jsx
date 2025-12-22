import React from 'react';
import FooterInfo from './FooterInfo';
import FooterCompany from './FooterCompany';
import FooterServices from './FooterServices';
import FooterInformation from './FooterInformation';
import FooterSocial from './FooterSocial';
import FooterCopyright from './FooterCopyright';

const Footer = () => {
    return (
        <div className='bg-black text-gray-300  '>
            <div className='flex flex-col xl:flex-row p-10 2xl:p-20 2xl:pb-10 text-white justify-between gap-10'>

                <FooterInfo></FooterInfo>
                <div className="xl:w-[80%] grid grid-cols-2 md:grid-cols-4 gap-5 justify-between">

                    <FooterCompany></FooterCompany>
                    <FooterServices></FooterServices>
                    <FooterInformation></FooterInformation>
                    <FooterSocial></FooterSocial>
                </div>
                
            </div>
           
            <FooterCopyright></FooterCopyright>
        </div>
    );
};

export default Footer;