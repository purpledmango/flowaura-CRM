import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { PiXCircle } from 'react-icons/pi';
import formatDate from '../utlis/timeAgoFomatter';

const TicketForm = ({ data, toggleForm }) => {
    const [ticketData, setTicketData] = useState({
        ticketId: "",
        ticketName: "",
        status: "",
        assignedTo: "",
    });

    useEffect(() => { if (data) { setTicketData(data) } }, [data])


    const handleStatusChange = (event) => {
        const { name, value } = event.target;
        setTicketData({ ...ticketData, [name]: value });
    };

    return (
        <motion.div
            initial={{ x: 416 }}
            animate={{ x: 0 }}
            exit={{ x: 416 }}
            className="fixed top-4 right-0 h-full w-full md:w-[50%] ">
            <div className="h-full w-full p-4 md:p-6 rounded-xl bg-gray-300/60  backdrop-blur-2xl shadow-xl border-2 border-bgcolor shadow-bgcolor/30">
                <PiXCircle className='text-4xl text-bgcolor mb-6' onClick={toggleForm} />
                <form className='flex flex-col items-between justify-between text-bgcolor'>
                    <div className='flex  justify-between items-center'>
                        <div className='flex flex-col items-start'>
                            <span className='font-bold text-xl'> #{ticketData.ticketId}</span>
                            <h2 className='text-2xl font-light'>{ticketData.ticketName}</h2>
                        </div>

                        <div className='py-6'>
                            <div className='flex gap-2 items-center'>
                                <label className='font-semibold'>Status</label>
                                <select name="status" value={ticketData.status} onChange={handleStatusChange}
                                    className='bg-accentcolor text-textcolor p-2 rounded'
                                >
                                    <option value="awaiting">Awaiting</option>
                                    <option value="in progress">In Progress</option>
                                    <option value="resolved">Resolved</option>
                                </select>
                            </div>
                            <div>
                                <label>Assigned To</label> {ticketData.assignedTo}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        {ticketData.replies && ticketData.replies.map((item, key) => {
                            return <div className='bg-primary  rounded-xl p-4'>
                                <div className='text-lg text-gray-200 font-extralight'> {item.content}</div>
                                <div className='flex items-center justify-between py-4 text-sm'>

                                    <span className='font-bold text-textcolor'>{item.sender}</span>
                                    <span className='font-light text-white'>{formatDate(item.time)}</span>

                                </div>

                            </div>
                        })}
                    </div>
                    <div className='flex justify-center w-full items-end h-full my-6'>
                        <label>
                            Respond
                        </label>
                        <textarea type="text" className='w-full rounded-xl'>

                        </textarea>
                    </div>
                </form>
            </div>
        </motion.div>
    );
};

export default TicketForm;
