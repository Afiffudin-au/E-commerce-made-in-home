import React,{useState,useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {blueGrey} from '@material-ui/core/colors';
import { useStyles } from '../useStyles/useStyles';
import './PaymentFinish.css'
import { useStateValue } from '../stateProvider/StateProvider';
import {useHistory} from 'react-router-dom'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from '../axios';
import { getTrollTotal } from '../reducer/Reducer';
import { db } from '../firebase';
function PaymentFinish(){
  const [{user,troll},dispatch] = useStateValue()
  const [disabled,setDisabled] = useState(true)
  const [erorr,setErorr] = useState(null)
  const [processing,setProcessing] = useState(false)
  const [clientSecret,setClientSecret] = useState(true)
  const [succeeded,setSucceeded] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const history = useHistory()
  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  useEffect(()=>{
    // generate the special strie secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
          method: 'post',
          // Stripe expects the total in a currencies subunits
          url: `/payments/create?total=${getTrollTotal(troll) * 100}`
      });
      setClientSecret(response.data.clientSecret)
  }
  getClientSecret();
  },[troll])
  console.log(clientSecret)
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setProcessing(true)
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
          card: elements.getElement(CardElement)
      }
   }).then(({paymentIntent})=>{
      //payment intent = payment confirmation
      db.collection('users')
        .doc(user?.uid)
        .collection('orders')
        .doc(paymentIntent.id)
        .set({
          troll : troll,
          amount : paymentIntent.amount,
          created : paymentIntent.created
        })
      setSucceeded(true)
      setErorr(null)
      setProcessing(false)
      dispatch({
        type : 'EMPTY_BASKET'
      })
      history.replace('/orders')
   })

  }
  const handleChange = (e)=>{
    setDisabled(e.empty)
    setErorr(e.erorr ? e.erorr.message : "")
  }
  const body = (
    <div style={modalStyle} className={classes.paper} >
      <form onSubmit={handleSubmit} style={{display:'flex',flexDirection:'column'}}>
        <CardElement onChange={handleChange}/>
        <button style={{padding : '10px',marginTop : '10px'}} disabled={disabled || succeeded || processing}>
        <span>{processing ? <p>Processing...</p> : 'Buy Now'}</span>
        </button>
      </form>
      {erorr && <div>{erorr}</div>}
   </div>
   
  )
  return (
    <div className="payment">
      {
        user ? (
        <Button onClick={handleOpen} variant="contained" style={{backgroundColor : blueGrey[500],color : 'white',fontSize : '12px'}}>Buy</Button>
        )
        :(<Button onClick={()=>history.push('/login')} variant="outlined" style={{backgroundColor : blueGrey[500],color : 'white',fontSize : '12px'}}>Please Login</Button>)
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description">
        {body}
      </Modal>
    </div>
  )
}

export default PaymentFinish
