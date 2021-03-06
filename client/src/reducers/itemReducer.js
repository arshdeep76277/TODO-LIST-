import {GET_ITEMS,ADD_ITEM,DELETE_ITEM,ITEMS_LOADING} from '../actions/types'

const initialState ={
    items:[],
    loading:true
}

export default function(state=initialState,action){
   switch(action.type){
       case GET_ITEMS:
           return {
               items: action.payload,
               loading:false
           }
        case DELETE_ITEM:
            return {   
              items:state.items.filter(item=>item._id!==action.payload) 
            }
        case ADD_ITEM:
            return {
                items:[action.payload,...state.items]
            }
        case ITEMS_LOADING:
            return {
                items:[action.payload],
                loading:false
            }
        default:
            return state;
   }
}