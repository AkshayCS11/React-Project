import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADDCUSTOMER } from '../../constants/actionTypes';
import { addcustomer } from '../../actions/addcustomer';
import "./Addcustomer.css";

const initialState = { firstName: '', lastName: '', company:'', email: '', phonenumber: '', website: ''};


const Customerform = () => {

  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addcustomer(form,history));
  };
  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
   <div id="container">
     <form onSubmit={handleSubmit}>
        <h2 className="heading">Add Customer</h2>
        <hr />
        <label>Customer Type</label>
        <input name="customertype" onChange={handleChange} className="business" type="radio" value="Business" required /> Business
        <input name="customertype" onChange={handleChange} className="individual" type="radio" value="Individual" /> Individual
        <br />
        <label>First Name</label>
        <input name="firstname" className="customerfirstname" onChange={handleChange} type="text" placeholder="First Name" required/>
        <br/>
        <label>Last Name</label>
        <input name="lastname" className="customerlastname" onChange={handleChange} type="text" placeholder="Last Name" required/>
        <br />
        <label>Company Name</label>
        <input name="company" className="companyname" onChange={handleChange} type="text" placeholder="Enter Company Name" required/>
        <br />
        <label>Customer Email</label>
        <input name="email" className="customeremail" onChange={handleChange} type="email" placeholder="Enter email" required/>
        <br />
        <label>Customer Phone Number</label>
        <input name="phonenumber" id="phone" type="number" onChange={handleChange} placeholder="Enter phone number" required />
        <br />
        <label>Website</label>
        <input name="website" className="website" onChange={handleChange} type="text" placeholder="Website"/>
        <br />
        <input className="reset" type="reset" value="Reset"/>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Customerform;