import {PiArrowLineLeft} from 'react-icons/pi'
const SideBar = ({toggleSideBar})=>{

    const menuData = [
        {
            name:"tickets",
            route: "/tickets"
        },
        {
            name:"solution bank",
            route: "/solutions"
        },
        {
            name:"tasks",
            route: "/tasks"
        },
        {
            name:"contacts",
            route: "/contacts"
        },
    ]

    return(

        <div className="relative w-full h-full bg-bgcolor text-textcolor">
         <h3 className="text-xl font-semibold">Utho</h3>
         <div onClick={toggleSideBar} 
         className='absolute right-0 pr-4 pt-4  top-0 text-xl hover:scale-105 transition-all duration-300' ><PiArrowLineLeft/></div>   
            <ul>
                {menuData.map((item, key)=>{
                    return (
                        <li key={key}>{item.name}</li>
                    )
                })}

            </ul>
        </div>
    )

}
export default SideBar;