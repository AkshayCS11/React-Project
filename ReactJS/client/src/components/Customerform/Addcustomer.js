import React from 'react';
import "./Addcustomer.css";

function close() {
  document.getElementById('container').hidden = true;
}

function Customerform() {
  return (
   <div id="container">
     <form>
        <h2 className="heading">Add Customer</h2>
        <hr />
        <label>Customer Type</label>
        <input name="customertype" className="business" type="radio" value="Male" required /> Business
        <input name="customertype" className="individual" type="radio" value="Female" /> Individual
        <br />
        <label>First Name</label>
        <input className="customerfirstname" type="text" placeholder="First Name" required/>
        <br/>
        <label>Last Name</label>
        <input className="customerlastname" type="text" placeholder="Last Name" required/>
        <br />
        <label>Company Name</label>
        <input className="companyname" type="text" placeholder="Enter Company Name" required/>
        <br />
        <label>Customer Email</label>
        <input className="customeremail" type="email" placeholder="Enter email" required/>
        <br />
        <label>Customer Phone Number</label>
        <input id="phone" type="number" placeholder="Enter phone number" required />
        <br />
        <label>Website</label>
        <input className="website" type="text" placeholder="Website"/>
        <br />
        <input className="reset" type="reset" value="Reset"/>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Customerform;
