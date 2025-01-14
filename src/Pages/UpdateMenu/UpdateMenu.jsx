import { useParams } from "react-router";
import useAxiosPublic from "../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const UpdateMenu=()=>{
    const axiosPublic=useAxiosPublic()
    // const [allMenus]=useMenu()
    const {id}=useParams()
    // console.log(id)
    // console.log(allMenus)
    const {data : idMenu=[]}=useQuery({
        queryKey:['IdMenu'],
        queryFn:async() =>{
            const data=await axiosPublic.get(`/idMenu/${id}`)
            console.log(data.data)
            return data.data;
        }
    })
  

  const handelUpdatedMenuSubmit=async(e)=>{
    e.preventDefault()
    const form=e.target;
    const menuName=form.menuName.value
    const category=form.category.value
    const price=form.price.value
    const availability=form.availability.value
    const updateMenu={
      menuName,
      category,
      price:parseInt(price),
      availability
    }
    console.log(updateMenu)
  const updatedMenu=await axiosPublic.put(`/updateMenu/${id}`,updateMenu)
  }
    return (
        <div className="mt-10 lg:ml-96 md:ml-64 md:h-60    md:w-96 md:p-3 shadow-2xl container">
        <h1 className="text-center mt-5 font-bold">Menu Update </h1>
        <form onSubmit={handelUpdatedMenuSubmit}  >
           <div className="md:flex lg:flex ">
           <div>
           <label htmlFor="name" className="">Menu Name</label>
           <br />
            <input type="text" className="border-black  border mr-10 w-full" name='menuName' defaultValue={idMenu?.menuName}></input>
            <br />
           </div>
            <div>
            <label htmlFor="category"  className="md:ml-5">Category</label>
            <br />
            <select  className="border-black border w-full md:ml-5" defaultValue={idMenu?.category} name='category'>
                
                <option value='appetizers'>Appetizers</option>
                <option value='mainCourse'>Main Course</option>
                <option value='desserts'>Desserts</option>
            </select>
            </div>
           </div>
           <div className="md:flex lg:flex ">
            <div>
            <label htmlFor="price" className=""  >Price</label>
            <br />
            <input type="number"className=" border-black border mr-10 w-full" name='price' defaultValue={idMenu?.price} />
            </div>
            <div>
            <label htmlFor="availability" className="md:ml-5 " >Availability</label>
            <br />
            <select name="availability" defaultValue={idMenu?.availability} className="border-black border w-full md:ml-5" >
                
                <option value="available">Available</option>
                <option value="notAvailable">Not Available</option>
            </select>
            </div>
           </div>
            <br />
            <input type="submit" className='w-full border border-black bg-sky-400 ' value='Updated' />
        </form>
      </div>
    )
}
export default UpdateMenu