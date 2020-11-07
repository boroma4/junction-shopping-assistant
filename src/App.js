import './App.css';
import MainPage from "./components/MainPage/MainPage";
import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Profile from "./components/UserProfile/Profile"
function App() {

  const[event, setEvent] = useState(null);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Profile" component={Profile} />
          <Route path="/" >
            <MainPage event={event} setEvent = {setEvent}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
