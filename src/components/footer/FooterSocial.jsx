import React from 'react';
import { FaFacebook , FaLinkedin, FaGithub,  FaEnvelope} from "react-icons/fa";

const FooterSocial = () => {
    return (
        <div className='justify-self-center text-center md:text-left'>
            <h2 className='text-lg font-medium'>Social Links</h2>
            <ul className='flex flex-col gap-2 mt-5'>
                <li><a href="" className="text-gray-400 flex items-center gap-2"><FaGithub className='text-white' /> @CS —  Github</a></li>
                <li><a href="" className="text-gray-400 flex items-center gap-2"><FaLinkedin className='text-white' /> @CS — LinkedIn</a></li>
                <li><a href="" className="text-gray-400 flex items-center gap-2"><FaFacebook className='text-white' /> @CS — FaceBook</a></li>
                <li><a href="" className="text-gray-400 flex items-center gap-2"><FaEnvelope className='text-white' /> support@cst.com </a></li>
            </ul>
            
        </div>
    );
};

export default FooterSocial;