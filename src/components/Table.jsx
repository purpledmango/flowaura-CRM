const Table = ({ columns, data, setSelectedTkt }) => {
    const triggerTktSelect = (data) => {
        setSelectedTkt(data)
    }
    return (
        <div className="overflow-x-scroll overflow-y-scroll">
            <table className="table-auto min-w-full">
                <thead className="text-textcolor bg-bgcolor">
                    <tr>
                        {columns.map((item, key) => (
                            <th key={key} className="text-left px-4 py-2">
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody className="text-gray-800 w-full">
                    {data.map((rowData, key) => (
                        <tr key={key} onClick={() => triggerTktSelect(rowData)} className="bg-bgcolor/20 hover:bg-bgcolor/30 transiton-all duration-150 ease-out hover:scale-[101%] border-b-[1px] border-bgcolor/40">
                            <td className="mx-auto px-6 py-4">
                                #{rowData.ticketId}
                            </td>
                            <td className="mx-auto px-6 py-4">
                                {rowData.customerName}
                            </td>
                            <td className="mx-auto px-6 py-4">
                                {rowData.ticketName}
                            </td>
                            <td className="mx-auto px-6 py-4">
                                {rowData.assignedTo}
                            </td>
                            <td className="mx-auto px-6 py-4">
                                {rowData.sla}
                            </td>
                            <td className="mx-auto px-6 py-4">
                                {rowData.status}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
