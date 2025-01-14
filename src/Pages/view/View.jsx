import { useParams } from "react-router"
import useAxiosPublic from "../../hook/useAxiosPublic"
import { useQuery } from "@tanstack/react-query"

const View=()=>{
    const {id}=useParams()
    const axiosPublic=useAxiosPublic()
    const {data : idMenu=[]}=useQuery({
        queryKey:['IdMenu'],
        queryFn:async() =>{
            const data=await axiosPublic.get(`/idMenu/${id}`)
            console.log(data.data)
            return data.data;
        }
    })
    const handleOrder=()=>{
      
    }
    return(
        <>
        <div className="bg-sky-300 p-5 shadow-xl">
        <h1 className="font-bold">{idMenu.menuName}</h1>
                <p className="uppercase">{idMenu.category}</p>
        <div className="flex justify-between">
                    <p>Price:$ {idMenu.price}</p>
                    <p>{idMenu.availability === 'available' ? <span className="text-green-600">Available</span>:<span className="text-red-600"> Not Available</span>}</p>
                    
                </div>
                <p>Quantity:</p>
                <form >
                <input type='number' name='quantity'></input>
                </form>
                 <button onClick={handleOrder} className="text-center font-bold"><h1 >Order</h1></button>
                  
        </div>
        </>
    )
}
export default View;