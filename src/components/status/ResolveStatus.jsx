import React from 'react';

const ResolveStatus = ({countResolve, resolveInfo}) => {
    return (
        <div className="resolve-status md:row-start-1 md:col-start-1 xl:row-start-2 xl:col-span-1  mb-4">
                    <h2 className="text-2xl mb-4 font-bold">
                        Resolved Status
                    </h2>
                    <h3 className={`text-gray-500 ${countResolve !== 0 && 'hidden'}`}>No resolved tasks yet</h3>
                    {
                        resolveInfo.map(ticket => 
                            
                            <div className="status-container p-4 bg-[#E0E7FF] rounded-2xl mb-4">
                                <h3 className="text-xl font-medium mb-2">
                                    {ticket.title}
                                </h3>

                                
                            </div>
                        )
                    }
        </div>
    );
};

export default ResolveStatus;