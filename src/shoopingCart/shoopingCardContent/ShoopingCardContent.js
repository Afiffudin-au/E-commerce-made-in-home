import React from 'react'
import {blueGrey} from '@material-ui/core/colors';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStyles } from '../../useStyles/useStyles';
import DeleteIcon from '@material-ui/icons/Delete';
import { useCounterRemoveCart } from '../../useCounter/useCounter';
function ShoopingCardContent({id,img,title,price,rate,decs,hideButton}) {
  const [expanded, setExpanded] = React.useState(false);
  const [removeCart] = useCounterRemoveCart(id)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles()
  return (
    <MemoizedComponent 
    id={id} 
    img={img} 
    title={title}
    price={price} 
    rate={rate} 
    decs={decs} 
    classes={classes}
    hideButton={hideButton}
    removeCart={removeCart}
    handleExpandClick={handleExpandClick}
    expanded={expanded}
    />
   
  )
}
function shoopingCardCartComponent({id,img,title,price,rate,decs,classes,hideButton,removeCart,handleExpandClick,expanded}){
  return(
    <div className="cart__box">
    <div className="cart__content">  
      <div className="cart__imgThumb">
        <img className="cart__thumb" src={img} alt=""/>
      </div>
      <div className="cart__text">
        <p>{title}</p>
        <p>Price : <strong>$ {price}</strong></p>
        <div className="product__rateBox">
          {
            Array(rate)
            .fill()
            .map((_,index)=>(
              <p key={index}><span aria-label="star" role="img">⭐</span></p> 
            ))
          }
        </div>
        <IconButton  onClick={handleExpandClick} className={clsx(classes.expand, {[classes.expandOpen]: expanded,})} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon style={{color : blueGrey[300]}}/>
        </IconButton>
        <span style={{color : blueGrey[300]}}>{expanded ? 'Hidden' : 'Show More'}</span>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
        <p>{decs}</p>
        </Collapse> 
      </div>
      <div className="cart__action">
        {
          !hideButton && (
            <IconButton onClick={removeCart}>
              <DeleteIcon  style={{color : blueGrey[300],fontSize : '30px'}}/>
            </IconButton>
          )
        }
      </div>
    </div>
  </div>
  )
}
function compare(prevProps , nextProps){
  return JSON.stringify(prevProps) === JSON.stringify(nextProps)
}
const MemoizedComponent = React.memo(shoopingCardCartComponent,compare)
export default ShoopingCardContent
