const SideBar = ()=>{

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

        <div className="w-full h-full bg-bgcolor text-textcolor">
            Side bar

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