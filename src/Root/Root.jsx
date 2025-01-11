import { Outlet } from "react-router";

import { Container } from "@mui/material";
import Navbar from "../Navbar/Navbar";


const Root =()=>{
    return (
        <Container>
          <Navbar></Navbar>
          <Outlet></Outlet>
        </Container>
    )
}
export default Root;