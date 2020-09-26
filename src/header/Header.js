import React from 'react'
import './Header.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import {grey,red} from '@material-ui/core/colors';
import {Link} from 'react-router-dom'
import IconButton from '@material-ui/core/IconButton';
import { useStateValue } from '../stateProvider/StateProvider';
import { auth } from '../firebase';
function Header() {
  const [{troll,favorite,user,userName}] = useStateValue()
  const logout = ()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <nav className="header">
      <h1>Shop</h1>
      <div className="header__navigation">
        <div className="header__navigationSearch">
          <input type="text" className="header__search" placeholder="Search"/> 
          <SearchIcon className="header__searchButton"/>
         </div>   
         <div className="header__action">
           {
             user ? (
               <div className="header__Logged">
                <small>Hello {userName ? userName : null}</small>
                <Button onClick={logout}>Logout</Button>
               </div>
             ):(
              <Link to="/login">
                  <Button variant="contained" color="primary">Login</Button>
              </Link> 
             )
           }
           {
             user &&  <Link to="/orders">
             <span>Orders</span>
            </Link> 
           }
           <Link to="/favorite">
            <IconButton>
              <FavoriteIcon style={{color : red[700],fontSize : '30px'}}/> 
              <span>{favorite?.length}</span>
            </IconButton>  
           </Link> 
          <Link to="/cart">
            <IconButton>
              <ShoppingCartIcon style={{color : grey[500],fontSize : '30px'}}/>
              <span>{troll?.length}</span>
            </IconButton>
          </Link>  
         </div>
      </div>
    </nav>
  )
}

export default Header
