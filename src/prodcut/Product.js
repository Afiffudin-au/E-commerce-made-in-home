import React,{useState} from 'react'
import './Product.css'
import {red,indigo,blueGrey} from '@material-ui/core/colors'
import Button from '@material-ui/core/Button';
import {useHistory } from 'react-router-dom';
import { useCounterAddToCart, useCounterAddFavorite, useCounterRemoveFavorite} from '../useCounter/useCounter';
function Product({id,img,title,price,rate,totalSold,decs}) {
  const [fav,setFav] = useState(false)
  const [addToCart] = useCounterAddToCart(id,img,title,price,rate,decs)
  const [addToFavorite] = useCounterAddFavorite(id,img,title,price,rate,decs)
  const [removeFavorite] = useCounterRemoveFavorite(id)
  const history = useHistory()
  const handleFavorite = ()=>{
    setFav(!fav)
    if(!fav){
      addToFavorite()
    }else{
      removeFavorite()
    }
  }
  const handleBuy = ()=>{
    addToCart()
    history.push('/cart')
  }
  return (
    <div className="product">
      <div className="product__info">
        <img className="product__img" src={img} alt=""/>
        <div className="product__content">
          <p className="product__title">{title}</p>
          <p><strong>$ {price}</strong></p>
          <div className="product__rateBox">
              {
              Array(rate).fill().map((_,index)=>(
                <p key={index}><span aria-label="star" role="img">⭐</span></p>
              ))
            }
          </div>   
          <p>sold : <strong>{totalSold}</strong></p>
          <div className="product__action">
            <Button className="product__actionAddToCart" onClick={addToCart} variant="contained" style={{backgroundColor : indigo[400],color : 'white'}}>Add to cart</Button>
            <Button onClick={handleBuy} className="product__actionBuy" variant="contained" style={{backgroundColor : blueGrey[500],color : 'white'}}>Buy</Button>
            {
              fav ? (
                <Button onClick={handleFavorite} className="product__actionFavorite" variant="contained" style={{backgroundColor : red['A700'],color : 'white'}}>Favorite</Button>
              ):(
                <Button onClick={handleFavorite} className="product__actionFavorite" variant="contained" style={{backgroundColor : red['400'],color : 'white'}}>Add Favorite</Button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
