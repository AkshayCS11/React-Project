import React from 'react'
import './Employeetable.css';

function Employeetable() {
  return (
    <div className="displayData">
    <table>
      <thead>
        <td>
          {/* {keys.map((key) => (
            <th>{tableHead[key]}</th>
          ))} */}
          First Name
        </td>
        <td>Last Name</td>
        <td>Gender</td>
        <td>Date of Birth</td>
        <td>Email</td>
        <td>Phone Number</td>
        <td>Address</td>
        <td>City</td>
        <td>State</td>
        <td>Postal Code</td>
        <td>Country</td>
      </thead>
      <tbody>
        {/* {tableBody.map((row) => (
          <tr>
            {keys.map((key) => (
              <td>{row[key]}</td>
            ))}
          </tr>
        ))} */}
      </tbody>
    </table>
  </div>
  )
}

export default Employeetable;