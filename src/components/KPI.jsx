
const KPI = ({ name, data, icon }) => {
    return (
        <div className="w-full md:max-w-72 min-h-40 bg-bgcolor rounded-xl shadow-3xl shadow-primary/30 text-textcolor p-4  flex flex-col justify-between items-between">


            <div className="text-lg font-semibold h-full">
                {name}
            </div>
            <div className="flex items-center justify-between  h-full pb-6">

                <span>{data}</span>
                <div className="text-2xl">
                    {icon}
                </div>

            </div>

        </div>
    )
}

export default KPI;