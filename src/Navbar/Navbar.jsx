import { Box } from "@mui/material";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { Link, NavLink } from "react-router";


const Navbar =()=>{
    return (
        <Box className='bg-white shadow p-3 items-center  justify-center'>
        <div className="flex justify-between">
            <p className="hidden lg:flex">Logo</p>
            <div className=" lg:hidden">

                <DropdownMenu ></DropdownMenu>
                 </div>
            <div>
                   
            <ul className="lg:flex hidden">
                    <li className="ml-5">Menu</li>
                    <li className="ml-5">Order</li>
                </ul>
                 
            
                     

            </div>
            <NavLink to='/login'>Login</NavLink>
        </div>

        </Box>
    )
}
export default Navbar;