import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Activate from './components/Auth/Activate'
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Employeeform from './components/Employeeform/AddEmployee';
import Customerform from './components/Customerform/Addcustomer';
import Employeeupload from './components/Employeeform/EmployeeUpload';
import Customerupload from './components/Customerform/CustomerUpload';
import Editprofile from './components/Editprofile/Editprofile';
import Editprofileform from './components/Editprofile/Editprofileform';
import SignIn from './components/Auth/signin'
import SignUp from './components/Auth/Auth';


const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />

          <Route path="/signup" exact component={() => <SignUp/>} />
          <Route path="/signin" exact component={() => <SignIn/>} />
          <Route path="/activate" exact component={() => <Activate/>} />
          <Route path="/forgotpassword" exact component={() => <ForgotPassword/>} />
          <Route path="/resetpassword" exact component={() => <ResetPassword/>} />
          <Route path="/employeeform" exact component={Employeeform}/>
          <Route path="/customerform" exact component={Customerform}/>
          <Route path="/employeeupload" exact component={Employeeupload}/>
          <Route path="/customerupload" exact component={Customerupload}/>
          <Route path="/profile" exact component={Editprofile}/>
          <Route path="/editprofileform" exact component={Editprofileform}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
