import { FiArrowLeftCircle } from 'react-icons/fi'
import { PiTicket, PiBookOpen, PiAlarm, PiHandshake } from 'react-icons/pi'


import { Link, useLocation } from 'react-router-dom';


const MenuButton = ({ name, route, icon }) => {
    const location = useLocation();

    return (
        <Link to={route}>
            <li className={`w-full px-4 py-2 rounded-lg grid grid-cols-4 items-center place-items-between transition-all duration-300 ease-in lg:gap-2 ${location.pathname === route ? "bg-accentcolor font-base text-xl shadow-2xl shadow-red" : "font-light hover:bg-primary/20"}`}>
                <div className={`text-textcolor ${location.pathname === route ? "text-3xl" : "text-2xl"}`}>{icon}</div>
                <div className='col-span-3'>
                    <h3 className="text-textcolor capitalize">{name}</h3>
                </div>
            </li>
        </Link>
    );
};

console.log("Current path", location.pathname)

const SideBar = ({ toggleSideBar }) => {
    const menuData = [
        { name: "tickets", route: "/", icon: < PiTicket /> },
        { name: "solution bank", route: "/solutions", icon: <PiBookOpen /> },
        { name: "tasks", route: "/tasks", icon: <PiAlarm /> },
        { name: "contacts", route: "/contacts", icon: <PiHandshake /> },
    ]

    return (
        <div className=" w-full h-full  bg-bgcolor">
            <div className='flex flex-col items-center justify-start px-2 lg:px-4'>
                <div className='relative py-6 w-full'>
                    <h3 className="text-3xl font-semibold text-textcolor text-center">Utho</h3>
                    <div onClick={toggleSideBar} className='absolute right-0  top-1/3 text-xl hover:scale-105 transition-all duration-300'>
                        <FiArrowLeftCircle className='text-textcolor text-3xl' />
                    </div>
                </div>
                <ul className='flex flex-col gap-8 w-full px-2'>
                    {menuData.map((item, key) => (
                        <MenuButton key={key} name={item.name} route={item.route} icon={item.icon} />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SideBar;
