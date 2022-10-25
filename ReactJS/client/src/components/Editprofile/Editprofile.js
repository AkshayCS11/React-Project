import React from 'react';
import "./Editprofile.css";

function close() {
  document.getElementById('container').hidden = true;
}

function Editprofile() {
  return (
    <div id="container">
     <form>
        <h2 className="heading">Edit Profile</h2>
        <hr />
        <label>Name</label>
        <input className="profilefirstname" type="text" placeholder="Enter your Name" />
        <br/>
        <label>Email</label>
        <input className="email" type="email" placeholder="Enter your email" />
        <br />
        <label>Phone Number</label>
        <input id="phone" type="number" placeholder="Enter your number" />
        <br />
        <input className="reset" type="reset" value="Reset"/>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Editprofile;