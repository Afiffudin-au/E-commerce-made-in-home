import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { getTrollTotal } from '../reducer/Reducer'
import { useStateValue } from '../stateProvider/StateProvider'
function SubTotal() {
  const [{troll}] = useStateValue()
  return (
    <>
      <CurrencyFormat
        renderText={(value)=>(
           <p> <strong>Total Price {value}</strong> </p>
        )}
        decimalScale={2}
        value={getTrollTotal(troll)} 
        displayType={"text"} 
        thousandSeparator={true} 
        prefix={"$"} />
    </>
  )
}

export default SubTotal
