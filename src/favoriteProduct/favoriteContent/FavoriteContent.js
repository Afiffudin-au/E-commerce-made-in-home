import React from 'react'
import Button from '@material-ui/core/Button';
import {grey,indigo,blueGrey,blue} from '@material-ui/core/colors';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { useStyles } from '../../useStyles/useStyles';
import { useCounterAddToCart,useCounterRemoveFavorite } from '../../useCounter/useCounter';
import {useHistory} from 'react-router-dom'
function FavoriteContent({id,img,title,price,rate,decs}) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes= useStyles()
  const [addToCart] = useCounterAddToCart(id,img,title,price,rate,decs)
  const [removeFavorite] = useCounterRemoveFavorite(id)
  const history = useHistory()
  const handleBuy = ()=>{
    addToCart()
    history.push('/cart')
  }
  return (
    <div className="favorite__card">
        <div className="favorite__box">
          <img className="favorite__thumb" src={img} alt=""/>
          <div className="favorite__action">
            <Button variant="contained" onClick={removeFavorite} style={{backgroundColor : grey[800],color : 'white',fontSize : '12px'}}>Remove Favorite</Button>
            <Button variant="contained" onClick={addToCart} style={{backgroundColor : indigo[400],color : 'white',fontSize : '12px'}}>Add to cart</Button>  
            <Button onClick={handleBuy} variant="contained" style={{backgroundColor : blueGrey[500],color : 'white',fontSize : '12px'}}>Buy</Button>
          </div>
        </div>
        <div className="card__content">
          <p>{title}</p>
          <p>Price : <strong>$ {price}</strong></p>
          <div className="product__rateBox">
            {
              Array(rate).fill().map((_,index)=>(
                <p key={index}><span aria-label="star" role="img">⭐</span></p>
              ))
            }      
          </div>
          <IconButton  onClick={handleExpandClick} className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} aria-expanded={expanded} aria-label="show more">
            <ExpandMoreIcon style={{color : blue[300]}}/>
          </IconButton> 
          <span style={{color : blue[300]}}>{expanded ? 'Hidden' : 'Show More'}</span>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
          <p>Descripion : Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto illo odit cumque veritatis corrupti? Tempora, a qui alias saepe voluptatibus quibusdam sit. Vel, quis. Nostrum repellendus nam vel natus in.</p>
          </Collapse>    
        </div>
      </div>
  )
}

export default FavoriteContent
