import React, { useState } from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';
import {red,blue} from '@material-ui/core/colors';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';
import { Loading } from './loading/Loading';
import { getItemTotal } from '../reducer/Reducer';
import { useStateValue } from '../stateProvider/StateProvider';
function Login() {
  const [{troll}] = useStateValue()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [loading,setLoading] = useState(false)
  const history = useHistory()
  const handleSignIn = ()=>{
    setLoading(true)
    auth.signInWithEmailAndPassword(email,password)
      .then(()=>{  
        setLoading(false)
        setEmail('')
        setPassword('')
        if(getItemTotal(troll) > 0){
          history.push('/cart')
        }else{
          history.push('/')
        } 
      }).catch((err)=>{
        setLoading(false)
        alert(err)
      })
  }
  const handleSignUp = ()=>{
    setLoading(true)
    auth.createUserWithEmailAndPassword(email,password)
      .then(()=>{
        setLoading(false)
        setEmail('')
        setPassword('')
        if(getItemTotal(troll) > 0){
          history.push('/cart')
        }else{
          history.push('/')
        } 
      }).catch((err)=>{
        setLoading(false)
        alert(err)
      })
  }
  return (
    <div className="login">
      <div className="login__container">
        <form className="auth">
          <Link to="/">
             <h1>Shop</h1>
          </Link>
          <h5>Email</h5>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <h5>Password</h5>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <Button onClick={handleSignIn} variant="contained" style={{backgroundColor : blue[600],color : 'white'}}>Login</Button>
          <Button onClick={handleSignUp} variant="contained" style={{backgroundColor : red[400],color : 'white'}}>Create And Continue</Button>
        </form>
        {
          loading && Loading
        }
      </div>
      
    </div>
  )
}

export default Login
