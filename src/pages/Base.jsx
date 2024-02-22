import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Error from "./Error";
import Auth from './Auth';
import SideBar from '../components/SideBar';
import { useState } from 'react';
import { PiArrowLineLeftBold } from 'react-icons/pi';
import Tickets from './Tickets';
import SolutionBank from './SolutionBank';
import Taks from './Taks';
import Contacts from './Contacts';
import Footer from '../components/Footer';
import Hud from '../components/Hud';

const Base = () => {
    const [sideBarOpen, setSideBarOpen] = useState(true); // Provide an initial value for sideBarOpen

    const toggleSideBar = () => {
        setSideBarOpen(!sideBarOpen);
    };

    console.log("Side bar status", sideBarOpen)

    return (
        <>
            <BrowserRouter>
                <div className='grid grid-cols-12 bg-textcolor h-full'>
                    {/* Side Bar */}
                    <div className={`h-full md:col-span-2 ${sideBarOpen ? " md:block hidden" : "hidden "}`}>
                        <SideBar toggleSideBar={toggleSideBar} />
                        {!sideBarOpen && <PiArrowLineLeftBold className='text-bgcolor text-3xl absolute top-0' />}

                    </div>
                    {/* Main Body here */}
                    <div className={`col-span-12 bg-textcolor rounded-l-xl px-3 md:px-6   ${sideBarOpen ? "md:col-span-10 " : "md:col-span-12"}`}>
                        <Hud />
                        <Routes> {/* Import Routes from react-router-dom */}
                            <Route path='/login' element={<Auth />} />
                            <Route path='/' element={<Tickets />} />
                            <Route path='/solutions' element={<SolutionBank />} />
                            <Route path='/tasks' element={<Taks />} />
                            <Route path='/contacts' element={<Contacts />} />
                        </Routes>
                    </div>
                </div>
                <Footer />
            </BrowserRouter>
        </>
    );
};

export default Base;
