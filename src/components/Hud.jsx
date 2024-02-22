import React from 'react'
import { PiBell, PiMagnifyingGlass, PiUserCircle } from 'react-icons/pi'
import { useLocation } from 'react-router-dom'

const Hud = () => {
    const location = useLocation()
    return (
        <section className='mb-3 capitalize'>
            <div className='px-6 py-4 bg-gray-200/50 flex items-center justify-between'>
                <div>
                    <span >{location.pathname}</span>
                </div>
                <div className='text-3xl flex justify-end gap-2 items-center'>
                    <PiMagnifyingGlass />
                    <PiBell />
                    <PiUserCircle />
                </div>
            </div>
        </section>
    )
}

export default Hud
