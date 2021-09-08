import React from "react";
import TableDetails from "./TableDetails";


function ListTables({ tables }) {

    console.log(tables)


    return (
        <div>
            <div className="d-md-flex m-3">
            <h3 className="montFont">Tables</h3>
            </div>
            <ul>
                {tables.map((table, index) => {
                    return (
                <div key={index}>
                    <li key={table.table_id}>
                        Table Name: {table.table_name}
                    </li>
                    <li>
                        Capacity: {table.capacity}
                    </li>
                    <li>
                        {`Status: ${table.reservation_id ? "Occupied" : "Available"}`}
                    </li>
                    <hr />
                </div>
                    )
                })}
            </ul>
        </div>
)}


export default ListTables;