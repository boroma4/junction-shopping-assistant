import './App.css';
import MainPage from "./components/MainPage/MainPage";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Profile from './components/UserProfile/Profile';

function App() {
  return (
    <Router>
      <div className="App">
        <switch>
          <Route path="/" component={MainPage} />
          <Route path="/Profile" component={Profile} />
        </switch>
      </div>
    </Router>
  );
}

export default App;
