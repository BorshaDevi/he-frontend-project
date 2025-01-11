import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import { NavLink } from "react-router";
const DropdownMenu=() =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
    return (
        <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
       <ClearAllIcon className="text-black" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <NavLink to="/" className={({isActive}) => isActive ? "text-red-500 underline  " : "text-black" }><MenuItem onClick={handleClose}>Home</MenuItem></NavLink>
        <NavLink to="/menu" className={({isActive}) => isActive ? "text-red-500 underline  " : "text-black" }><MenuItem onClick={handleClose}>Menu</MenuItem></NavLink>
        <NavLink to="/orders" className={({isActive}) => isActive ? "text-red-500 underline " : "text-black" }><MenuItem onClick={handleClose}>Orders</MenuItem></NavLink>
        
      </Menu>
    </div>
    )
}
export default DropdownMenu;