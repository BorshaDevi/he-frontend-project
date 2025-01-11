import React, { useState } from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import ClearIcon from '@mui/icons-material/Clear';
const DropdownMenu=() =>{
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [clear ,isClear]=useState(false)
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
        {
            clear? <ClearIcon  ></ClearIcon> : <ClearAllIcon />
        }
       
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
        <MenuItem onClick={handleClose}>Menu</MenuItem>
        <MenuItem onClick={handleClose}>Order</MenuItem>
        
      </Menu>
    </div>
    )
}
export default DropdownMenu;