import React from "react";
import { Link } from "react-router-dom";

function ListDailyReservations({ reservations }) {

        let reservationList = reservations.map((res) => {
            return (
              <ul key={res.reservation_id}>
                <h4 className="mt-4">
                  {res.first_name} {res.last_name}
                </h4>
                <span>
                  <li>Mobile Number: {res.mobile_number}</li>
                  <li>Date: {res.reservation_date}</li>
                  <li>Time: {res.reservation_time}</li>
                  <li>Group Size: {res.people}</li>
                  <li>Status: {res.status}</li>
                </span>
                <div className="row">
                <div className="col">
                  <Link to={`reservations/${res.reservation_id}/edit`}>
                    <button className="btn btn-success mr-4 mt-4">
                      Update Reservation
                    </button>
                  </Link>
                </div>
                <div className="col text-right">
                  {/* <button className="btn btn-danger mt-4" onClick={handleDelete}>
                  <span class="oi oi-trash"></span>
                  </button> */}
                </div>
                </div>
                <hr></hr>
              </ul>
            );
          });
          return reservationList;
        }

  export default ListDailyReservations;