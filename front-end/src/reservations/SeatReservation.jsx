import React from "react";
import ListTables from "./ListTables";

function SeatReservation({ tables }) {
    return (
        <div>
            <h2 className="pb-3 mt-5 libreFont">Available Tables</h2>
            <ListTables tables={tables} />
        </div>
    )
}

export default SeatReservation;