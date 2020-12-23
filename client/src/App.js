import React from 'react';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

//pages
import Home from './components/pages/home'
//user
import Register from './components/user/register'
import Login from './components/user/Login'
import Forgetpassword from './components/user/forgetpassword'
import Resetpassword from './components/user/resetpassword'
import Activate from './components/user/activate'
import Adminlogin from './components/admin/adminlogin'

//dashboard

import Admindashbaord from './components/Dashboard/admindashboard' 
import Userdashboard from './components/Dashboard/userdashboard';
//routers
import PrivateRoute from '././routers/privateroute'
import AdminRoute from './routers/adminroute'

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
    
      <Switch>
      <Route exact path="/home"><Home/></Route>
     <Route exact path="/login"><Login/></Route>
     <Route exact path="/register"><Register/></Route>
     <Route path='/users/password/reset/:token' exact render={props => <Resetpassword {...props} />} />
     <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
     <Route exact path="/autosparezlogin"><Adminlogin/></Route>
     <Route exact path="/forgetpassword"><Forgetpassword/></Route>
     <PrivateRoute path="/userdashboard" exact component={Userdashboard} />
     <AdminRoute  path="/adminprivate" exact component={Admindashbaord}/>
   
  
    
      </Switch>
     
      </BrowserRouter>
    
  
     
    </div>
  );
}

export default App;
