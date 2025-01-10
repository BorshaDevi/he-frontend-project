import { createContext } from "react";
import Login from "../Login"
import Register from "../Register"
const AuthProvider=({children})=>{
    const AuthContext=createContext()


    const allValue={
      Login,
      Register
    }
    return(
       <AuthContext.Provider value={allValue}>
          {children}
       </AuthContext.Provider>
        
    )
}
export default AuthProvider;