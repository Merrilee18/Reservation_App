import React, { useState } from "react";
import ErrorAlert from "../layout/ErrorAlert";
import DashboardButtons from "./DashboardButtons";
import ListDailyReservations from "../reservations/ListDailyReservations";
import ListTables from "../reservations/ListTables";

/**
 * Defines the dashboard page.
 * @param date
 *  the date for which the user wants to view reservations.
 * @returns {JSX.Element}
 */
function Dashboard({ 
  date,
  reservations,
  reservationsError,
  loadReservations,
  tablesError,
  tables
}) {
  // const [reservations, setReservations] = useState([]);
  // const [reservationsError, setReservationsError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(date);

  return (
    <main>
      <h1 className="pb-3 libreFont">Dashboard</h1>

      {/* buttons for navigating through the reservation dates */}
      <DashboardButtons
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        date={date}
      />

      <div className="d-md-flex m-3">
        <br />
        <h4 className="montFont">Reservations for {date}</h4>
      </div>


      {/* {JSON.stringify(reservations)} */}

      <div>
        {(reservations.length === 0) ? (
          <div className="d-md-flex m-3">
            <h3 className="montFont">No reservations to show</h3>
          </div>
        ) :
        <ListDailyReservations reservations={reservations} /> }
      </div>
      <h3 className="montFont">Tables</h3>
      <div>
        <ListTables tables={tables} />
      </div>
      <ErrorAlert error={reservationsError} />
      {/* This error is getting thrown when dashboard is initially loaded. Why? */}
    </main>
  );
}

export default Dashboard;
