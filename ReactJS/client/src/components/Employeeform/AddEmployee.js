import React from 'react';
import "./AddEmployee.css";

function close() {
  document.getElementById('container').hidden = true;
}

function Employeeform() {
  return (
    <div id="container">
     <form>
        <h2 className="heading">Add Employee</h2>
        <hr />
        <label>First Name</label>
        <input className="firstname" type="text" placeholder="First Name" />
        <br/>
        <label>Last Name</label>
        <input className="lastname" type="text" placeholder="Last Name" />
        <br />
        <label>Gender</label>
        <input className="male" type="radio" value="Male" /> Male
        <input className="female" type="radio" value="Female" /> Female
        <br />
        <label>Date Of Birth</label>
        <input className="DOB" type="text" placeholder="MM/DD/YYYY" onfocus="(this.type='date')"/>
        <br />
        <label>Email</label>
        <input className="email" type="email" placeholder="Enter your email" />
        <br />
        <label>Phone Number</label>
        <input id="phone" type="number" placeholder="Enter your number" />
        <br />
        <label>Address</label>
        <input className="adLine1" type="text" placeholder="Address"/>
        <br />
        
        <label>City</label>
        <input className="city" type="text" placeholder="City/District"/>
        <br />
        <label>State</label>
        <input className="state" type="text" placeholder="State/Province"/>
        <br />
        <label>Postal Code</label>
        <input className="postcode" type="text" placeholder="Postal Code"/>
        <br />
        <label>Country</label>
        <input className="country" type="text" placeholder="Country"/>
        <br />
        <input className="reset" type="reset" value="Reset"/>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Employeeform;
