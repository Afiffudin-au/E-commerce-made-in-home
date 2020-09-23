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
function App() {
  const [{},dispatch] = useStateValue()
  useEffect(()=>{
    console.log("odkf")
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
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/favorite">
          <Favorite/>
        </Route>
        <Route path="/cart">
          <ShoopingCard/>
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
