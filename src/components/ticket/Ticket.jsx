import React from 'react';
import { FaCircle , FaCalendarAlt } from "react-icons/fa";

const Ticket = ({ticket , handleProgress}) => {
    return (
        
            <button disabled= {ticket.status ==='In Progress' || ticket.status ==='Closed'} onClick={()=>{handleProgress(ticket)}} className='flex gap-2 h-full shadow-xs 2xl:p-5 bg-white rounded-2xl p-4 sm:p-2 lg:p-4  flex-col justify-between'>
                        <div className="heading flex items-center justify-between">
                            <h2 className='xl:text-lg text-lg 2xl:text-2xl font-bold'>{ticket.title}</h2>
                            <div className={`py-2 px-3 rounded-3xl ${ticket.status === "Open" && 'bg-green-400 text-green-900'} ${ticket.status === "In Progress" &&'bg-yellow-400 text-yellow-900'} ${ticket.status === 'Closed' && 'bg-red-400 text-red-800'} flex items-center gap-2`}>
                               {<FaCircle />}{ticket.status}
                            </div>
                        </div>
                        <div className="text-gray-600 text-left">
                            {ticket.description}
                        </div>

                        <div className="card-footer flex justify-between">
                            <div className="1 flex justify-between gap-4">
                                <p className='text-gray-600'>
                                    #{ticket.id}
                                </p>
                                <p className={`${ticket.priority ==='High' && 'text-red-700'} ${ticket.priority ==='Low'&&'text-green-800'} ${ticket.priority === 'Medium' && 'text-amber-600'}`}>
                                    {ticket.priority}
                                </p>

                        
                            </div>
                            <div className="1 text-gray-600 flex justify-between gap-4">
                                <p>
                                    {ticket.customer}
                                </p>
                                <p className='flex items-center gap-2'>
                                    {<FaCalendarAlt />}{ticket.createdAt}
                                </p>
                            </div>
                        </div>
                    </button>
        
    );
};

export default Ticket;