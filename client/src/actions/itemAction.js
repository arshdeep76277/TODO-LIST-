import {ADD_ITEM,DELETE_ITEM,GET_ITEMS} from './types';
import axios from 'axios';
export const getItems=(data)=>{
    return {
        type:GET_ITEMS,
        payload:data
    }
}
export const deleteItems=(id)=>dispatch=>{
    axios.delete(`/api/items/${id}`);
    dispatch({type:DELETE_ITEM,payload:id})
}
export const addItem=(item)=>dispatch=>{
    axios.post('/api/items',item).then((res)=>{
    console.log(res.data);
    dispatch({
        type:ADD_ITEM,
        payload:res.data
    })
})
}
export const setItemsLoading=()=>dispatch=>{
    axios.get('/api/items').then(res=>{
    dispatch(getItems(res.data));
    })
}
