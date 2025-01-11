import { Box } from "@mui/material";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import {  NavLink } from "react-router";


const Navbar =()=>{
    return (
        <Box className='bg-white  p-3 items-center shadow-xl  justify-center'>
        <div className="flex justify-between">
            <p className="hidden lg:flex">Logo</p>
            <div className=" lg:hidden">

                <DropdownMenu ></DropdownMenu>
                 </div>
            <div>
                   
            <ul className="lg:flex hidden">
                    <NavLink to="" className={({isActive}) => isActive ? "text-red-500 underline " : "text-black" }><li className="ml-5">Menu</li></NavLink>
                    <NavLink to="" className ={({isActive}) => isActive ?"text-red-500 underline " : "text-black" }><li className="ml-5">Orders</li></NavLink>
                </ul>
                 
            
                     

            </div>
            <NavLink to='/login'>Login</NavLink>
        </div>

        </Box>
    )
}
export default Navbar;