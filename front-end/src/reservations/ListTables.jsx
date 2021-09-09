import React from "react";
import { Link } from "react-router-dom";
import TableDetails from "./TableDetails";

function ListTables({ tables }) {
  function handleDelete() {
    alert("ya deleted");
  }

  function handleSeat() {
    alert("seat us please");
  }

  const reservation_id = 1;

  return (
    <div>
      <div className="d-md-flex m-3">

      </div>
      <ul>
        {tables.map((table, index) => {
          return (
            <div key={index}>
              <li key={table.table_id}>Table Name: {table.table_name}</li>
              <li>Capacity: {table.capacity}</li>
              <li>
                {`Status: ${table.reservation_id ? "Occupied" : "Available"}`}
              </li>

              <button onClick={handleDelete} className="btn btn-danger mt-4">
                Delete Table
              </button>
              <hr />
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ListTables;
