import {useState} from 'react';
import "./appNavbar.css";
import MenuIcon from '@material-ui/icons/Menu';
import { Menu, MenuItem } from '@material-ui/core';
const AppNavbar=()=>{
 
    const [anchorEl,setAnchorEl]= useState(null);

    const handleClick=(e)=>{
        setAnchorEl(e.currentTarget);
        console.log('element clicked');
    }
    const handleClose=()=>{
        setAnchorEl(null);
    }
  return (
      <div className="navbar">
          <h1>Todo List</h1>
          <div className="menu">
          <MenuIcon onClick={handleClick} />
          <Menu  id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
              <MenuItem style={{backgroundColor:"#fff" }} className="menu__icon"><a href="https://github.com/arshdeep76277">GITHUB</a></MenuItem>
          </Menu>

          </div>
         
      </div>
  )
}
export default AppNavbar;