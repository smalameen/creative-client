import React, { createContext } from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/LogIn/Login";
import { useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Customer from "./Components/Customer/Customer";
import ServiceList from "./Components/Service/ServiceList";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>
          
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute path="/auth">
          <Home/>
          </PrivateRoute>
          <PrivateRoute path="/customer">
          <Customer/>
          </PrivateRoute>
          <Route  path="/customer/service">
            <ServiceList/>
           
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
