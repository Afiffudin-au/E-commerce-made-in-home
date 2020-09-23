import React from 'react'
import './Favorite.css'
import {red,grey} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteContent from './favoriteContent/FavoriteContent';
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom'
import { useStateValue } from '../stateProvider/StateProvider';
function Favorite() {
  const [{troll,favorite}] = useStateValue()
  return (
    <div className="favorite">
      <div className="favorite__count">
        <IconButton>
          <FavoriteIcon style={{color : red[700],fontSize : '30px'}}/>
          <span>{favorite?.length}</span>
        </IconButton>
        <Link to="/cart">
          <IconButton>
            <ShoppingCartIcon style={{color : grey[500],fontSize : '30px'}}/>
            <span>{troll?.length}</span>
          </IconButton>
        </Link>
      </div>
      <div className="favorite__box">
        {
          favorite.map((item,index)=>(
            <FavoriteContent key={index} id={item.id} img={item.img} title={item.title} price={item.price} rate={item.rate} decs={item.decs} />
          ))
        }
      </div>
    </div>
  )
}

export default Favorite
