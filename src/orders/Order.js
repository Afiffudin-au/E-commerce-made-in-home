import React from 'react'
import './Order.css'
import moment from 'moment'
import ShoopingCardContent from '../shoopingCart/shoopingCardContent/ShoopingCardContent'
import CurrencyFormat from 'react-currency-format'
function Order({order}) {
  return (
    <div className="order_each_box">
      <div style={{padding : '20px'}}>
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
              <p> <strong style={{color : 'white'}}>Total Price {value}</strong> </p>
          )}
          decimalScale={2}
          value={order.data.amount/100} 
          displayType={"text"} 
          thousandSeparator={true} 
          prefix={"$"} />
        }
      </div>
    </div>
  )
}

export default Order
