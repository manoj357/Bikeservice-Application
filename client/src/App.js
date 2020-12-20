import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './routers/privateroute' 
//pages
import Home from './components/pages/home'
//user
import Register from './components/user/register'
import Login from './components/user/Login'
import Forgetpassword from './components/user/register'
import Resetpassword from './components/user/resetpassword'
import Activate from './components/user/activate'


//dashboard

import Admindashbaord from './components/Dashboard/admindashboard' 
import Userdashboard from './components/Dashboard/userdashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path="/login"><Login/></Route>
        <Route exact path="/register"><Register/></Route>
        <Route exact path="/forget"><Forgetpassword/></Route>
        <Route exact path="/home"><Home/></Route>
        <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
         <Route exact path="/userdashboard"><Userdashboard/></Route>
         <Route exact path="/admindashboard"><Admindashbaord/></Route>
      </Switch>
     
      </BrowserRouter>
    
  
     
    </div>
  );
}

export default App;
