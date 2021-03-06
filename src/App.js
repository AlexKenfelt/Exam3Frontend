import React, { useState,useEffect } from "react"
import facade from "./facades/apiFacade";
import LoggedIn from "./Loggedin";
import LogIn from "./components/Login";
import Home from './components/home';
import Header from './components/header';
import User from "./components/user";
import Admin from "./components/admin";
import Fitness from "./components/Fitness";
import Trip from "./components/Trip";
import Guide from "./components/Guide";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch, 
  NavLink,
  Prompt
} from "react-router-dom";



 

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('All is good ... so far');

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setErrorMessage('Logged out.')
  };


  return (
    <div>
  <Header facade={facade} loggedIn={loggedIn} />
  <Switch>
    <Route exact path="/">
    <Home
              logout={logout}
              loggedIn={loggedIn}
              setLoggedIn={setLoggedIn}
              facade={facade}
              setErrorMessage={setErrorMessage}
            />
    </Route>
    <Route exact path="/user">
    {facade.hasUserAccess('user', loggedIn) && 
              <User facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>
    <Route exact path="/admin">
    {facade.hasUserAccess('admin', loggedIn) && 
              <Admin facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>
    <Route path="/fitness">
      <Fitness facade={facade} setErrorMessage={setErrorMessage} />
    </Route>


    <Route path="/trip">
    {facade.hasUserAccess('user', loggedIn) && 
      <Trip facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>


    <Route path="/guide">
    {facade.hasUserAccess('admin', loggedIn) && 
      <Guide facade={facade} setErrorMessage={setErrorMessage} />}
    </Route>
  </Switch>
    </div>
  );
 
}
export default App;
