import React from 'react';

const TaskStatus = ({cardInfo , countProgress , handleTask}) => {
    return (
        <div>
            <div className="task-status md:col-start-2 xl:col-span-1 mb-4">
                    <h2 className="text-2xl mb-4 font-bold">
                        Task Status
                    </h2>
                    <h3 className={`text-gray-500 ${countProgress !== 0 && 'hidden'} mb-4`}>Select a ticket to add to Task Status</h3>
                    {
                        cardInfo.map(ticket => 

                            <div className="status-container p-4 bg-white rounded-2xl mb-4">
                                <h3 className="text-xl text-center font-medium mb-2">
                                    {ticket.title}
                                </h3>

                                <button disabled = {ticket.status === "Closed"} onClick={()=>{handleTask(ticket)}} className="bg-[#02A53b] text-[#fff] no-shadow w-full text-center justify-center p-2 flex flex-1 rounded-xl">
                                    Complete
                                </button>
                            </div>
                        )
                    }
                </div>
        </div>
    );
};

export default TaskStatus;