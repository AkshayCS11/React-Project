import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Editprofile.css";
import { editprofile } from '../../actions/editprofile';

function Editprofileform() {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const initialState = { firstname: '', lastname:'', phone: ''};
    const [form, setForm] = useState(initialState);
    const dispatch = useDispatch();
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(editprofile(form, user.result._id, history));
      notify();
    };
  
    const notify = () => toast.info("Profile details updated",{
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <div id="container">
      <ToastContainer />
      <form onSubmit={handleSubmit}>
        <h2 className="heading">Edit Profile</h2>
        <hr />
        <label>First Name</label>
        <input onChange={handleChange} name="firstname" className="profilefirstname" type="text" placeholder="Enter Your First Name" required />
        <br/>
        <label>Last Name</label>
        <input onChange={handleChange} name="lastname" className="profilefirstname" type="text" placeholder="Enter Your Last Name" required />
        <br/>
        {/* <label>Email</label>
        <input onChange={handleChange} name="email" className="email" type="email" placeholder="Enter your email" required />
        <br /> */}
        <label>Phone Number</label>
        <input onChange={handleChange} name="phone" id="phone" type="number" placeholder="Enter your number" required />
        <br />
        <input className="reset" type="reset" value="Reset"/>
        <input className="submit" type="submit" value="Submit"/>
      </form>
    </div>
  )
}

export default Editprofileform