import useAxiosPublic from "../../hook/useAxiosPublic";
import useMenu from "../../hook/useMenu";

const UpdateMenu=()=>{
    const axiosPublic=useAxiosPublic()
    const allMenu=useMenu()
    console.log(allMenu)
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
  const updatedMenu=await axiosPublic.post('/updateMenu',updateMenu)
  .then(res =>{
    // if(res.data.insertedId){
    //   form.reset()
    // }
    console.log(res.data)
  }).catch(error =>{
    console.log(error)
  })
  }
    return (
        <div className="mt-10 lg:ml-96 md:ml-64 md:h-60    md:w-96 md:p-3 shadow-2xl container">
        <h1 className="text-center mt-5 font-bold">Menu Update </h1>
        <form onSubmit={handelUpdatedMenuSubmit}  >
           <div className="md:flex lg:flex ">
           <div>
           <label htmlFor="name" className="">Menu Name</label>
           <br />
            <input type="text" className="border-black  border mr-10 w-full" name='menuName'></input>
            <br />
           </div>
            <div>
            <label htmlFor="category" className="md:ml-5">Category</label>
            <br />
            <select  className="border-black border w-full md:ml-5" name='category'>
                <option value=''>Select</option>
                <option value=''>Appetizers</option>
                <option value=''>Main Course</option>
                <option value=''>Desserts</option>
            </select>
            </div>
           </div>
           <div className="md:flex lg:flex ">
            <div>
            <label htmlFor="price" className="" >Price</label>
            <br />
            <input type="number"className=" border-black border mr-10 w-full" name='price' />
            </div>
            <div>
            <label htmlFor="availability" className="md:ml-5 ">Availability</label>
            <br />
            <select name="availability" className="border-black border w-full md:ml-5" >
                <option value="">Select</option>
                <option value="">Available</option>
                <option value="">Not Available</option>
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