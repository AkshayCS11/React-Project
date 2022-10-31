import React,{ useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addemployee } from '../../actions/addemployee';
import { ADDEMPLOYEE } from '../../constants/actionTypes';
import { Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./AddEmployee.css";


const initialState = { firstname: '', lastname: '', gender: '', dob: '', email: '', number: '', address: '', city: '', state: '', postcode:'', country: ''};

const Employeeform = () =>  {

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
  dispatch(addemployee(form,history));
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
        <h2 className="heading">Add Employee</h2>        
        <Button component={Link} to="/employeeupload" variant="contained" color="primary">Upload bulk data</Button>
        </Box>
        <hr />
        <label>First Name</label>
        <input name="firstname" className="firstname" onChange={handleChange} type="text" placeholder="First Name" required />
        <br/>
        <label>Last Name</label>
        <input name="lastname" className="lastname" onChange={handleChange} type="text" placeholder="Last Name" required />
        <br />
        <label>Gender</label>
        <input name="gender" className="male" onChange={handleChange} type="radio" value="Male" required /> Male
        <input name="gender" className="female" onChange={handleChange} type="radio" value="Female" /> Female
        <br />
        <label>Date Of Birth</label>
        <input name="dob" className="DOB" onChange={handleChange} type="text" placeholder="MM/DD/YYYY" required/>
        <br />
        <label>Email</label>
        <input name="email" className="email" onChange={handleChange} type="email" placeholder="Enter your email" required />
        <br />
        <label>Phone Number</label>
        <input name="number" id="phone" onChange={handleChange} type="number" placeholder="Enter your number" required />
        <br />
        <label>Address</label>
        <input name="address" className="adLine1" onChange={handleChange} type="text" placeholder="Address" required/>
        <br />
        
        <label>City</label>
        <input name="city" className="city" onChange={handleChange} type="text" placeholder="City/District" required/>
        <br />
        <label>State</label>
        <input name="state" className="state" onChange={handleChange} type="text" placeholder="State/Province" required/>
        <br />
        <label>Postal Code</label>
        <input name="postcode" className="postcode" onChange={handleChange} type="text" placeholder="Postal Code" required/>
        <br />
        <label>Country</label>
        <input name="country" className="country" onChange={handleChange} type="text" placeholder="Country" required/>
        <br />
        <input className="reset" type="reset" value="Reset"/>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
      
  )
}


export default Employeeform;
