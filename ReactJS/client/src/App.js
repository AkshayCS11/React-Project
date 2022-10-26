import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Activate from './components/Auth/Activate'
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';
import ForgotPassword from './components/Auth/ForgotPassword';
import ResetPassword from './components/Auth/ResetPassword';
import Employeeform from './components/Employeeform/AddEmployee';
import Customerform from './components/Customerform/Addcustomer';

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
          <Route path="/auth" exact component={() => <Auth/>} />
          <Route path="/activate" exact component={() => <Activate/>} />
          <Route path="/forgotpassword" exact component={() => <ForgotPassword/>} />
          <Route path="/resetpassword" exact component={() => <ResetPassword/>} />
          <Route path="/employeeform" exact component={Employeeform}/>
          <Route path="/customerform" exact component={Customerform}/>
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
