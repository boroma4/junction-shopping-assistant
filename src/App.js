import './App.css';
import MainPage from "./components/MainPage/MainPage";
import Profile from "./components/UserProfile/Profile"

import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import HistogramGraph from './components/Graphs/HistogramGraph';

function App() {

  const[event, setEvent] = useState(null);
  const [productList,setProductList] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Checkout" >
            <CheckoutPage cart={productList} setProductList={setProductList}/>
          </Route>
          <Route exact path="/Profile">
            <Profile
                productList={productList}
                setProductList={setProductList}
            />
          </Route>
          <Route path="/Histogram">
            <HistogramGraph/>
          </Route>
          <Route path="/" >
            <MainPage event={event} setEvent={setEvent}
                      productList={productList}
                      setProductList={setProductList}
                      isSignedIn={isSignedIn}
                      setIsSignedIn={setIsSignedIn}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
