import { createContext } from "react";
import useAxiosPublic from "../hook/useAxiosPublic";
const AuthProvider=({children})=>{
    const AuthContext=createContext()
    const axiosPublic=useAxiosPublic()
const logOut=async({Id})=>{
  await axiosPublic.delete('/logOutUser',Id)
  .then(res =>{
   console.log(res)
  }).catch(error =>{
   console.log(error)
  })
}

    const allValue={
      logOut,
    }
    return(
       <AuthContext.Provider value={allValue}>
          {children}
       </AuthContext.Provider>
        
    )
}
export default AuthProvider;