import {BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from "./Error"
import Auth from './Auth'
import SideBar from '../components/SideBar'
const Base = ()=>{
    return (
        <>        
            <BrowserRouter>
                <div className='grid grid-cols-12 bg-bgcolor h-full'>
                    {/* Side Bar */}
                    <div className='col-span-2 h-screen'>
                        <SideBar/>
                    </div>
                {/* Main Body here */}
                    <div className='col-span-10 bg-textcolor rounded-l-xl'>
                        <Routes>
                            <Route path='/login' element= {<Auth/>}></Route>
                            <Route path='*' element= {<Error/>}></Route>
                        </Routes>
                    </div>
                

                </div>
            </BrowserRouter>
        </>


    )
}

export default Base