import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaUserPlus, FaTrashAlt, FaEdit } from 'react-icons/fa'; // Import icons
import './cards.css';

function Cards() {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* Student List Card */}
        <div className="col-md-3">
          <div className="text-white p-3 text-center" style={{ backgroundColor: '#3498db', borderRadius: '10px' }}>
            <div className="card-title">
              <FaUserAlt size={30} />
              <h5 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Student List</h5>
            </div>
            <div className="card-body">
              <p className="card-text mt-3">
                View the list of all registered students.Browse through records and find student details easily.
              </p>
              <Link className="btn" style={{ backgroundColor: '#1c3f67', color: 'white' }} to="/studentlist">Student List</Link>
            </div>
          </div>
        </div>

        {/* Add Student Card */}
        <div className="col-md-3">
          <div className="text-white p-3 text-center" style={{ backgroundColor: '#2ecc71', borderRadius: '10px' }}>
            <div className="card-title">
              <FaUserPlus size={30} />
              <h5 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Add Student</h5>
            </div>
            <div className="card-body">
              <p className="card-text mt-3">
                Add a new student to the portal. Ensure you provide the necessary details for registration.
              </p>
              <Link className="btn" style={{ backgroundColor: '#1f5723', color: 'white' }} to="/addstudent">Add Student</Link>
            </div>
          </div>
        </div>

        {/* Delete Student Card */}
        <div className="col-md-3">
          <div className="text-white p-3 text-center" style={{ backgroundColor: '#e74c3c', borderRadius: '10px' }}>
            <div className="card-title">
              <FaTrashAlt size={30} />
              <h5 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Delete Student</h5>
            </div>
            <div className="card-body">
              <p className="card-text mt-3">
                Remove a student's record from the portal. Please proceed with caution as this action is permanent.
              </p>
              <Link className="btn" style={{ backgroundColor: '#9b2226', color: 'white' }} to="/deletestudent">Delete Student</Link>
            </div>
          </div>
        </div>

        {/* Update Student Card */}
        <div className="col-md-3">
          <div className="text-white p-3 text-center" style={{ backgroundColor: '#f39c12', borderRadius: '10px' }}>
            <div className="card-title">
              <FaEdit size={30} />
              <h5 style={{ fontWeight: 'bold', marginLeft: '10px' }}>Update Student</h5>
            </div>
            <div className="card-body">
              <p className="card-text mt-3">
                Update the details of a registered student. Make necessary changes to their records.
              </p>
              <Link className="btn" style={{ backgroundColor: '#b96f14', color: 'white' }} to="/updatestudent">Update Student</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
