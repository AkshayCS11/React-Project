import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ADDCUSTOMER } from '../../constants/actionTypes';
import { addcustomer } from '../../actions/addcustomer';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Addcustomer.css";

const initialState = { firstname: '', lastname: '', company:'', email: '', phonenumber: '', website: ''};


const Customerform = () => {

  const [form, setForm] = useState(initialState);
  const dispatch = useDispatch();
  const history = useHistory();

  const notify = () => toast.info("Form submission successfull",{
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });
  
 
    const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addcustomer(form,history));
    notify();      
  };
  
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
   <div id="container">
     <ToastContainer />
     <form onSubmit={handleSubmit}>
        <Box component="span"
             m={1}
             display="flex"
             justifyContent="space-between"
             alignItems="center">
        <h2 className="heading">Add Customer</h2>        
        <Button component={Link} to="/customerupload" variant="contained" color="primary">Upload bulk data</Button>
        </Box>
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
