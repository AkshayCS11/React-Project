import React,{useState} from 'react';
import "./Editprofile.css";
import {Button, Typography, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from '../Navbar/styles';
import { useEffect } from 'react';

function Editprofile() {

  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  
  
  
  return (
    <div id="container">
       <Box component="span"
             m={1}
             display="flex"
             justifyContent="space-between"
             alignItems="center">
        <h2 className="heading">Profile Details</h2>        
        <Button component={Link} to="/editprofileform" variant="contained" color="primary">EDIT PROFILE</Button>
        </Box>
       <hr/>
      <Typography className={classes.userName} variant="h6">Name : {user?.result.name}</Typography>
      <Typography className={classes.userName} variant="h6">Email : {user?.result.email}</Typography>
      <Typography className={classes.userName} variant="h6">Phone Number : {user?.result.phone}</Typography>
    </div>
  )
}

export default Editprofile;