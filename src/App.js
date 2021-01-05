import React, { createContext } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/LogIn/Login";
import { useState } from "react";
// import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Customer from "./Components/Customer/Customer";
import ServiceList from "./Components/Service/ServiceList";
import Reviews from "./Components/Service/Reviews";
// import AddCourse from "./Components/AddCourse/AddCourse";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCourse from "./Components/AddCourse/AddCourse";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      
        <Switch>
        
          <Route exact path="/">
            <Home />
          </Route>

          {/* <Route path="/auth">
            <Login />
          </Route> */}
          {/* <PrivateRoute path="/home">

          <Home loggInUser={loggedInUser}  setLoggedInUser={setLoggedInUser} />

          

          </PrivateRoute> */}


          <Route path="/customer">

          <Customer loggInUser={loggedInUser}  setLoggedInUser={setLoggedInUser} />

          

          </Route>


          <Route path="/service" >
            <ServiceList loggInUser={loggedInUser}  setLoggedInUser={setLoggedInUser}  />
           
          </Route >

          <Route  path="/addCourse">
            <AddCourse/>
          </Route>

            <Route  path="/review">
            <Reviews />
          </Route>


          <Route  path="*">
            <Home />
          </Route>

        </Switch>

      </Router>
    </UserContext.Provider>
  );
}

export default App;
