import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';
import UpsmartLogo from '../../images/UpsmartLogo.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const User = (JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  // const admin = false
  // // const [admin, setAdmin] = useState(false)
  
 
    
  //   if(User&&User.result){
  //     if(User.result.isAdmin){
  //       console.log(User.result.isAdmin)
  //       // setAdmin((prevIsSignup) => !prevIsSignup);

    
  //       admin =true
  //     }
  //   }
  
    
  


  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/signin');

    setUser(null);
    
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
    
    
  }, [location]);

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Link to="/" className={classes.brandContainer}>
        <img component={Link} to="/" src={UpsmartLogo} alt="icon" height="45px" title='Logo ' />
      </Link>
      <Toolbar>
      {user?.result?(
        <div>
        <Button style={{marginLeft: '30rem', display: "row"}} component={Link} to="/employeeform" title='Add employees' variant="contained" color="primary">Add Employee</Button>
        <Button style={{marginLeft: '10px', display: "row"}} component={Link} to="/customerform" title='Add customers'  variant="contained" color="primary">Add Customer</Button>
        </div>):('')}
      </Toolbar>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <div className={classes.profile}>
            <Avatar component={Link} to="/profile" title='User Profile' className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
            <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
          </div>
        ) : (
          <Button component={Link} to="/signin" variant="contained" color="primary">Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
