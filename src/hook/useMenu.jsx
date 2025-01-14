import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu=()=>{
    const axiosPublic=useAxiosPublic()
  const {data:allMenus ,refetch}=useQuery({
    queryKey:['allMenu'],
    queryFn: async () =>{
        const menuData=await axiosPublic.get('/allMenu')
          console.log(menuData.data)
          return menuData.data
    }
  })
    return [allMenus ,refetch]
}
export default useMenu;
