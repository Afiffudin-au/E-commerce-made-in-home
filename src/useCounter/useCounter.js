import { useStateValue } from '../stateProvider/StateProvider'

export const useCounterAddToCart = (id,img,title,price,rate,decs) => {
  const [{},dispatch] = useStateValue()
  const handleAddCart = ()=>{
    dispatch({
      type : 'ADD_TO_TROLL',
      items : {
       id : id,
       img : img,
       title : title,
       price : price,
       rate : rate,
       decs : decs,
      }
    })
  }
  const addToCart = ()=>{
    handleAddCart()
  }

  return [addToCart]
}
export const useCounterRemoveCart = (id)=>{
  const [{},dispatch] = useStateValue()
  const handleRemoveCart = ()=>{
    dispatch({
      type : 'REMOVE_TROLL',
      id : id
    })
  }
  const removeCart = ()=>{
    handleRemoveCart()
  }
  return [
    removeCart
  ]
}
export const useCounterAddFavorite = (id,img,title,price,rate,decs)=>{
  const [{},dispatch] = useStateValue()
  const handleAddFavorite = ()=>{
    dispatch({
      type : 'ADD_TO_FAVORITE',
      items : {
       id : id,
       img : img,
       title : title,
       price : price,
       rate : rate,
       decs : decs
      }
    })
  }
  const addToFavorite = ()=>{
    handleAddFavorite()
  }
  return [
    addToFavorite
  ]
}
export const useCounterRemoveFavorite = (id)=>{
  const [{},dispatch] = useStateValue()
  const handleRemoveFavorite = ()=>{
    dispatch({
      type : 'REMOVE_FAVORITE',
      id : id,
    })
  }
  const removeFavorite = ()=>{
    handleRemoveFavorite()
  }
  return [
    removeFavorite
  ]
}