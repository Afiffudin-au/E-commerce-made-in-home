import React, { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './header/Header';
import Home from './home/Home'
import Login from './login/Login'
import Favorite from './favoriteProduct/Favorite';
import ShoopingCard from './shoopingCart/ShoopingCard';
import { useStateValue } from './stateProvider/StateProvider';
import { auth } from './firebase';
import {Elements} from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';
import Orders from './orders/Orders';
const promise = loadStripe('pk_test_51HUql0HC4PtuoUpoe0QpdBj5B4QZQal9T20liaUTamQJdiChOnojCvskMfUML2ztOByzrET6YO4DB8T15TTy05va00aevLtERG')
function App() {
  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    const unsubsribe = auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type : 'SET_USER',
          user : authUser
        })
      }else{
        //user logout
        dispatch({
          type : 'SET_USER',
          user : null
        })
      }
    })
    return ()=>{
      unsubsribe()
    }
  },[])
  return (
    <Router> 
      <div className="App">
      <Switch>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/favorite">
          <Favorite/>
        </Route>
        <Route path="/cart">
          <Elements stripe={promise}>
            <ShoopingCard/>
          </Elements>
        </Route>
        <Route path="/">
          <Header/>
          <Home/>
        </Route>
      </Switch> 
      </div>
    </Router>
  );
}

export default App;
