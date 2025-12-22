import React, { use, useState } from 'react';
import Status from '../status/Status';

import { toast } from 'react-toastify';
import Ticket from '../ticket/Ticket';


const Tickets = ({customerPromise,handleTaskStatus,countProgress ,cardInfo,setCardInfo, handleInProgress, countResolve ,setCountResolve , resolveInfo , setResolveInfo}) => {
    const ticketsData = use(customerPromise);
    
    const[status , setStatus] = useState(ticketsData);
    
    const handleProgress = (ticket) => {
        handleInProgress(ticket);
        
        const updatedStatus = status.map((s)=>
            s.id === ticket.id ? { ...s, status: "In Progress" } : s
        );
        setStatus(updatedStatus);

        toast(`${ticket.title} is In Progress`)
    
    }
    
    return (
        <div className='grid gap-5 xl:gap-4 px-5 2xl:px-20 pb-10  xl:px-10 xl:grid-cols-3 md:grid-cols-2 mb-4'>
            <div className="md:col-span-2">
              <div className='gap-5 xl:gap-10 grid md:grid-cols-2 items-center'> 
               {
                 status.map(ticket =>

                    <Ticket ticket={ticket} handleProgress={handleProgress}></Ticket>
                  )
                }
              </div> 
            </div>
            <Status countProgress = {countProgress} status = {status} setStatus ={setStatus} resolveInfo ={ resolveInfo} setResolveInfo={setResolveInfo} countResolve = {countResolve} setCountResolve ={setCountResolve} handleTaskStatus= { handleTaskStatus} cardInfo = {cardInfo} setCardInfo={setCardInfo}></Status>
            
        </div>
    );
};

export default Tickets;