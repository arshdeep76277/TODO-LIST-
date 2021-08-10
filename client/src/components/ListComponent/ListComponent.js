import './listcomponent.css'
import Checkbox from '@material-ui/core/Checkbox';
import {useSelector,useDispatch} from 'react-redux';
import { deleteItems ,addItem, setItemsLoading} from "../../actions/itemAction";

const ListComponent=()=>{
    const dispatch=useDispatch();
    const items= [useSelector(state=>state.item.items)];
    const loading=useSelector(state=>state.item.loading);
    if(loading){
        dispatch(setItemsLoading());
    }
   const handleInput=(e)=>{
       e.preventDefault();
       let name=document.getElementById('add_todo_input').value;
       dispatch(addItem({name}));
       document.getElementById('add_todo_input').value="";

   }
  
  
   return (
       <div className="list__components">
           <div className="container">
                 <div className="add_new_todo">
                     <form>
                           <input id="add_todo_input" name="name"/>
                           <button id="add_todo_button"onClick={handleInput}>Add</button>
                    </form>
                </div>
                {items[0].map(item=>(
                    
                    <div key={item._id} className="todo_item">
                        <Checkbox onClick={()=>dispatch(deleteItems(item._id))} color="default"/>
                       <p> {item.name}</p>
                    </div>
                )
                )}
           </div>
       </div>
   );

 
}

export default ListComponent;