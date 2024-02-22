import { PiCheckFat, PiNotificationFill, PiSpinnerGap, PiTimerFill } from "react-icons/pi";
import KPI from "../components/KPI";
import Table from "../components/Table";
import { usersTicketsData, usersTicketsDataHeaders } from "../constants/ticketsData";
import TicketForm from "../components/TicketForm";
import { useEffect, useState } from "react";

const Tickets = () => {

    const [showForm, setShowForm] = useState(false)
    const [selectedTkt, setSelectedTkt] = useState(null)
    const toggleForm = () => {
        setShowForm(!showForm)
    }

    useEffect(() => {
        if (selectedTkt) {
            setShowForm(true)
        }
        else {
            setShowForm(false)
        }
    }, [selectedTkt])

    console.log(selectedTkt, "Selected Ticket")
    return (
        <section>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                {/* KPIS */}
                <KPI name={"New Tickets"} data={25} icon={<PiNotificationFill className="text-rose-500" />} />
                <KPI name={"Pending"} data={45} icon={<PiTimerFill className="text-yellow-600" />} />
                <KPI name={"Awaiting Confirmation"} data={256} icon={<PiSpinnerGap className="text-blue-200" />} />
                <KPI name={"Resolved"} data={2564} icon={<PiCheckFat className="text-green-500" />} />
            </div>

            <div className="w-full my-6">
                {/* Pass tableHeaders and ticketData as props to the Table component */}
                <Table columns={usersTicketsDataHeaders} data={usersTicketsData} setSelectedTkt={setSelectedTkt} />
                {showForm && <TicketForm data={selectedTkt} toggleForm={toggleForm} />}
            </div>
        </section>
    );
};

export default Tickets;
