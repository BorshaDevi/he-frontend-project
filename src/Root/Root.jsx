import { Outlet } from "react-router";
import Login from "../Login/Login";


const Root =()=>{
    return (
        <div  className=''>
          <Login></Login>
          <Outlet></Outlet>
        </div>
    )
}
export default Root;