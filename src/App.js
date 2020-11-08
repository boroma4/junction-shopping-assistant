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
  const [purchaseHistory, setPurchaseHistory] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userSettings, setUserSettings] = useState({save:false, eco:false, emails: false});

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/Checkout" >
            <CheckoutPage
                cart={productList}
                setProductList={setProductList}
                setPurchaseHistory={setPurchaseHistory}
                purchaseHistory={purchaseHistory}
                userSettings={userSettings}
            />
          </Route>
          <Route exact path="/Profile">
            <Profile
                productList={productList}
                purchaseHistory={purchaseHistory}
                setProductList={setProductList}
                userSettings ={userSettings}
                setUserSettings={setUserSettings}
            />
          </Route>
            <Route exact path="/Profile/Budget">
              <Profile
                  productList={productList}
                  purchaseHistory={purchaseHistory}
                  setProductList={setProductList}
                  userSettings ={userSettings}
                  setUserSettings={setUserSettings}
                  tab={1}
              />
          </Route>
          <Route path="/" >
            <MainPage event={event} setEvent={setEvent}
                      productList={productList}
                      setProductList={setProductList}
                      isSignedIn={isSignedIn}
                      setIsSignedIn={setIsSignedIn}
                      userSettings={userSettings}
                      purchaseHistory={purchaseHistory}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
