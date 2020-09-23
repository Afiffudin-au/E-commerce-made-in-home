import React from 'react'
import './ShoopingCard.css'
import ShoopingCardContent from './shoopingCardContent/ShoopingCardContent';
import PaymentFinish from '../paymentFinish/PaymentFinish';
import { useStateValue } from '../stateProvider/StateProvider';
import { getItemTotal } from '../reducer/Reducer';
import SubTotal from '../subTotal/SubTotal';
function ShoopingCard() {
  const [{troll}] = useStateValue()
  return (
    <div className="cart">
      <div className="wrap__cartContent">
        {
          troll?.length === 0 ?(
              <h5 style={{color : 'white'}}>Shooping Cart Empty</h5> 
          ):(
              troll.map((item,index)=>(
                <ShoopingCardContent key={index} id={item.id} img={item.img} title={item.title} price={item.price} rate={item.rate} decs={item.decs}/>
              ))
              
          )
        }
      </div>
 
      <div className="cart__payment">
        <h5>Payment</h5>
        <SubTotal/>
        <p> <strong>Total Item {getItemTotal(troll)}</strong> </p>
        <div className="cart__itemList">
          <img src="" alt=""/>
          {
            troll.map((item,index)=>(
            <p key={index}>Item name : {item.title}</p>
            ))
          }
        </div>
        <PaymentFinish/>
      </div>
    </div>
  )
}

export default ShoopingCard
