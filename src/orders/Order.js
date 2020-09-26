import React from 'react'
import './Order.css'
import moment from 'moment'
import ShoopingCardContent from '../shoopingCart/shoopingCardContent/ShoopingCardContent'
import CurrencyFormat from 'react-currency-format'
function Order({order}) {
  return (
    <div>
      <h2 style={{color : "white"}}>order</h2>
      <p style={{color : "white"}}>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      {
        order.data.troll.map(item=>(
          <ShoopingCardContent key={item.id} id={item.id} img={item.img} title={item.title} price={item.price} rate={item.rate} decs={item.decs} hideButton/>
        ))
      }
      {
         <CurrencyFormat
         renderText={(value)=>(
            <p> <strong>Total Price {value}</strong> </p>
         )}
         decimalScale={2}
         value={order.data.amount/100} 
         displayType={"text"} 
         thousandSeparator={true} 
         prefix={"$"} />
      }
    </div>
  )
}

export default Order
