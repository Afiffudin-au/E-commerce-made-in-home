import React,{useState,useEffect} from 'react'
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import {blueGrey} from '@material-ui/core/colors';
import { useStyles } from '../useStyles/useStyles';
import { makeStyles } from '@material-ui/core/styles';
import {Select,MenuItem,FormControl,InputLabel} from '@material-ui/core'
import './PaymentFinish.css'
function PaymentFinish(){
  function getModalStyle() {
    const top = 50;
    const left = 50;
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  const useStyles1 = makeStyles((theme) => ({

    formControl: {
      margin: theme.spacing(1),
      width: 100 +'%',
    },
  }));
  const [modalStyle] = useState(getModalStyle);
  const [name,setName] = useState('')
  const [open, setOpen] = React.useState(false);
  const [openSelect,setOpenSelect] = useState(false)
  const [paymentMethod,setPaymentMethod] = useState('')
  const classes = useStyles();
  const classes1 = useStyles1();
  useEffect(()=>{
    const data = localStorage.getItem('name')
    if(data){
      setName(JSON.parse(data))
    }
  },[open])
  useEffect(()=>{
    localStorage.setItem('name',JSON.stringify(name))
  },[name])
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseSelect = ()=>{
    setOpenSelect(false)
  }
  const handleOpenSelect = ()=>{
    setOpenSelect(true)
  }
  const body = (
    <div style={modalStyle} className={classes.paper} >
        <input className="payment__inputName" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name Please"/>
        <FormControl className={classes1.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select" 
          open={openSelect}
          onClose={handleCloseSelect}
          onOpen={handleOpenSelect}
          value={paymentMethod}
          onChange={(e)=>setPaymentMethod(e.target.value)}>
          <MenuItem value={120}> <img src="https://material-ui.com/static/in-house/octopus-dark.png" style={{width : '80px'}} alt=""/> Visa</MenuItem>
          <MenuItem value={120}> <img src="https://material-ui.com/static/in-house/octopus-dark.png" style={{width : '80px'}} alt=""/> Paypal</MenuItem>
          <MenuItem value={130}> <img src="https://material-ui.com/static/in-house/octopus-dark.png" style={{width : '80px'}} alt=""/> XXX</MenuItem>
        </Select>
      </FormControl>
   </div>
   
  )
  return (
    <div className="payment">
      <Button onClick={handleOpen} variant="contained" style={{backgroundColor : blueGrey[500],color : 'white',fontSize : '12px'}}>Buy</Button>
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
