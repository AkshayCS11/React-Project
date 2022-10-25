import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addemployee } from '../../actions/addemployee';
import { ADDEMPLOYEE } from '../../constants/actionTypes';
import "./AddEmployee.css";


const initialState = { firstName: '', lastName: '', gender: '', dob: '', email: '', number: '', address: '', city: '', state: '', postcode:'', country: ''};

const Employeeform = () =>  {

const [form, setForm] = useState(initialState);
const dispatch = useDispatch();
const history = useHistory();

const handleSubmit = (e) => {
  e.preventDefault();
  dispatch(addemployee(form));
};

const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div id="container">
     <form onsubmit={handleSubmit}>
        <h2 className="heading">Add Employee</h2>
        <hr />
        <label>First Name</label>
        <input name="firstname" className="firstname" onchange="handleChange" type="text" placeholder="First Name" required />
        <br/>
        <label>Last Name</label>
        <input name="lastname" className="lastname" onchange="handleChange" type="text" placeholder="Last Name" required />
        <br />
        <label>Gender</label>
        <input name="gender" className="male" onchange="handleChange" type="radio" value="Male" required /> Male
        <input name="gender" className="female" onchange="handleChange" type="radio" value="Female" /> Female
        <br />
        <label>Date Of Birth</label>
        <input name="dob" className="DOB" onchange="handleChange" type="text" placeholder="MM/DD/YYYY" required/>
        <br />
        <label>Email</label>
        <input name="email" className="email" onchange="handleChange" type="email" placeholder="Enter your email" required />
        <br />
        <label>Phone Number</label>
        <input name="number" id="phone" onchange="handleChange" type="number" placeholder="Enter your number" required />
        <br />
        <label>Address</label>
        <input name="address" className="adLine1" onchange="handleChange" type="text" placeholder="Address" required/>
        <br />
        
        <label>City</label>
        <input name="city" className="city" onchange="handleChange" type="text" placeholder="City/District" required/>
        <br />
        <label>State</label>
        <input name="state" className="state" onchange="handleChange" type="text" placeholder="State/Province" required/>
        <br />
        <label>Postal Code</label>
        <input name="postcode" className="postcode" onchange="handleChange" type="text" placeholder="Postal Code" required/>
        <br />
        <label>Country</label>
        <input name="country" className="country" onchange="handleChange" type="text" placeholder="Country" required/>
        <br />
        <input className="reset" type="reset" value="Reset"/>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}


export default Employeeform;
