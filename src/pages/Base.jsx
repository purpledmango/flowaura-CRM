import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./Error";
import Auth from './Auth';
import SideBar from '../components/SideBar';
import { useState } from 'react';
import { PiArrowLineLeftBold } from 'react-icons/pi';

const Base = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true); // Provide an initial value for sideBarOpen

    const toggleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    console.log("Side bar status", sideBarOpen)

    return (
        <>        
            <BrowserRouter>
                <div className='grid grid-cols-12 bg-bgcolor h-full'>
                    {/* Side Bar */}
                    <div className={`h-screen relative ${sideBarOpen ? "block md:block md:col-span-2": "hidden"}`}>
                        <SideBar toggleSideBar={toggleSideBar} />
                        {!sideBarOpen && <PiArrowLineLeftBold className='text-bgcolor text-3xl absolute top-0'/>}

                    </div>
                    {/* Main Body here */}
                    <div className={`col-span-12 bg-textcolor rounded-l-xl p-3 md:p-6 ${sideBarOpen ? "md:col-span-10 ": "md:col-span-12"}`}>
                        <Routes> {/* Import Routes from react-router-dom */}
                            <Route path='/login' element={<Auth />} />
                            <Route path='*' element={<Error />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
};

export default Base;
