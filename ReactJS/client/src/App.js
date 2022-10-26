import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import Employeeform from './components/Employeeform/AddEmployee';
import Customerform from './components/Customerform/Addcustomer';
import Editprofile from './components/Editprofile/Editprofile';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Activate from './components/Auth/Activate'
import Employeeupload from './components/Employeeform/EmployeeUpload';
import Customerupload from './components/Customerform/CustomerUpload';

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
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path="/employeeform" exact component={Employeeform}/>
          <Route path="/customerform" exact component={Customerform}/>
          <Route path="/editprofile" exact component={Editprofile}/>
          <Route path="/forgotpassword" exact component={() => <ForgotPassword/>} />
          <Route path="/resetpassword" exact component={() => <ResetPassword/>} />
          <Route path="/activate" exact component={() => <Activate/>} />
          <Route path="/employeeupload" exact component={Employeeupload}/>
          <Route path="/customerupload" exact component={Customerupload}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
