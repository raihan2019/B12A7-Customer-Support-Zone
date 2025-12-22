import React from 'react';
import { toast } from 'react-toastify';
import TaskStatus from './TaskStatus';
import ResolveStatus from './ResolveStatus';

const Status = ({cardInfo, countResolve, countProgress , status, setStatus ,setCardInfo, handleTaskStatus , resolveInfo , setResolveInfo }) => {

    const handleTask = (t) =>{
        handleTaskStatus();

        setCardInfo(cardInfo.filter(card => card.id !== t.id));

       setResolveInfo([...resolveInfo , t]);

       console.log(resolveInfo,length);

       const updatedStatus = status.filter((s)=>
            s.id !== t.id 
        );
        setStatus(updatedStatus);

        toast(`${t.title} is Resolved`)
        
    }

    return (
        <div className='md:col-span-2 xl:col-span-1 '>
            <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-1'>

                <TaskStatus cardInfo={cardInfo} countProgress={countProgress} handleTask={handleTask}></TaskStatus>
                
                <ResolveStatus countResolve={countResolve} resolveInfo={resolveInfo}></ResolveStatus>
            </div>
        </div>
    );
};

export default Status;