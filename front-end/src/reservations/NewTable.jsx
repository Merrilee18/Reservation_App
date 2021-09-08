import React, { useState } from "react";

function NewTable(){

    function handleSubmit() {
        alert("Ya submitted")
    }

    function handleCancel() {
        alert("ya cancelled")
    }

    const [formFields, setFormFields] = useState({
        table_name: "",
        reservation_id: "",
        capacity: "",

      });

    return (
<div className="bootstrap-iso">
      <div className="container-fluid">
        <h2 className="pt-5 libreFont">New Table</h2>
        <div className="row">
          <div className="col-md-6 col-sm-6 col-xs-12">
            <form onSubmit={handleSubmit} method="post">
              {/* {errorList()} */}
              <div className="form-group">
                <label className="control-label requiredField" htmlFor="name">
                  Table Name
                  <span className="asteriskField">*</span>
                </label>
                <input
                  className="form-control"
                  id="first_name"
                  name="name"
                  type="text"
                  onChange={(e) =>
                    setFormFields({ ...formFields, first_name: e.target.value })
                  }
                />
              </div>
              <div className="form-group ">
                <label className="control-label requiredField" htmlFor="name1">
                  Capacity
                  <span className="asteriskField">*</span>
                </label>
                <input
                  className="form-control"
                  id="last_name"
                  name="name1"
                  type="text"
                  onChange={(e) =>
                    setFormFields({ ...formFields, last_name: e.target.value })
                  }
                />
              </div>

              <div className="form-group">
                <div>
                  <button
                    className="btn btn-primary mr-4"
                    name="submit"
                    type="submit"
                  >
                    <span className="oi oi-check mr-2"></span>
                    Submit
                  </button>
                  <button
                    onClick={handleCancel}
                    className="btn btn-danger"
                    type="button"
                  >
                    <span className="oi oi-circle-x mr-2"></span>
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    )
}

export default NewTable;