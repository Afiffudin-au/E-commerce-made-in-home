import React,{useState, useEffect} from 'react'
import './Orders.css'
import { db } from '../firebase'
import { useStateValue } from '../stateProvider/StateProvider'
import Order from './Order'
import {Loading} from '../login/loading/Loading'
function Orders() {
  const [orders,setOrders] = useState([])
  const [{user}] = useStateValue()
  const [loading,setLoading] = useState(true)
  useEffect(()=>{
    if(user){
      db
      .collection('users')
      .doc(user?.uid)
      .collection('orders')
      .orderBy('created','desc')
      .onSnapshot(snapshot=>{
        setOrders(snapshot.docs.map(doc=>({
          id : doc.id,
          data : doc.data()
        }))) 
        setLoading(false)
      })
    }else{
      setOrders([])
    }
  },[user])
  console.log(orders)
  return (
    <div className="orders">
      {loading && Loading }
      <h1 style={{color : 'white',textAlign : 'center'}}>Your Orders</h1>
      <div className="orders__order">
        {orders.map(order=>(
          <Order key={order.id} order={order}/>
        ))}
      </div>
    </div>
  )
}

export default Orders
