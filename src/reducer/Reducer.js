export const initialState = {
  troll : [],
  favorite : [],
  user : null,
  userName : '',
}
export const getTrollTotal = (troll)=>troll?.reduce((amount,item)=>item.price + amount,0)
export const getItemTotal = (troll)=>troll?.length
const reducer = (state,action)=>{
  switch(action.type){
    case 'SET_USER' :
      let afterSplit
      if(action.user){
        afterSplit = action.user.email.split('@',1)
      }
      return{
        ...state,
        user : action.user,
        userName : afterSplit
      }
    case 'EMPTY_TROLL':
      return{
        troll: []
      }
    case 'ADD_TO_TROLL' : 
    return {
      ...state,
      troll : [...state.troll , action.items]
    }
    case 'ADD_TO_FAVORITE' : 
    return {
      ...state,
      favorite : [...state.favorite, action.items],
    }
    
    case 'REMOVE_TROLL' : 
    let newTroll = [...state.troll]
    const indexTroll = state.troll.findIndex((trollItem)=>trollItem.id === action.id)
    if(indexTroll >= 0){
      //items exists in basket , remove it
      newTroll.splice(indexTroll,1)
    }else{
      //item not exists in basket , no remove it
      console.warn(`Can't remove product (id : ${action.id})`)
    }
    return {
      ...state,
      troll : newTroll,
    }

    case 'REMOVE_FAVORITE' :
    let newFavorite = [...state.favorite]
    const index = state.favorite.findIndex((favoriteItem)=>favoriteItem.id === action.id)
    if(index >= 0){
      //items exists in basket , remove it
      newFavorite.splice(index,1)
    }else{
      //item not exists in basket , no remove it
      console.warn(`Can't remove product (id : ${action.id})`)
    }
    return {
      ...state,
      favorite : newFavorite,
    }
    default : 
    return state
  }
}
export default reducer