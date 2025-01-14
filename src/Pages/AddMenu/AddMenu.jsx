import useAxiosPublic from "../../hook/useAxiosPublic";

const AddMenu=()=>{
  const axiosPublic=useAxiosPublic()
  const handelAddMenuSubmit=async(e)=>{
    e.preventDefault()
    const form=e.target;
    const menuName=form.menuName.value
    const category=form.category.value
    const price=form.price.value
    const availability=form.availability.value
    const addMenu={
      menuName,
      category,
      price:parseInt(price),
      availability
    }
    console.log(addMenu)
  const addedMenu=await axiosPublic.post('/addMenu',addMenu)
  .then(res =>{
    if(res.data.insertedId){
      form.reset()
    }
    console.log(res.data)
  }).catch(error =>{
    console.log(error)
  })
  }
    return(
      <div className="mt-10 lg:ml-96 md:ml-64 md:h-60    md:w-96 md:p-3 shadow-2xl container">
        <h1 className="text-center mt-5 font-bold">Menu Add</h1>
        <form onSubmit={handelAddMenuSubmit} >
           <div className="md:flex lg:flex ">
           <div>
           <label htmlFor="name" className="">Menu Name</label>
           <br />
            <input type="text" required className="border-black  border mr-10 w-full" name='menuName'></input>
            <br />
           </div>
            <div>
            <label htmlFor="category" className="md:ml-5">Category</label>
            <br />
            <select required  className="border-black border w-full md:ml-5" name='category'>
                <option value='appetizers'>Appetizers</option>
                <option value='mainCourse'>Main Course</option>
                <option value='desserts'>Desserts</option>
            </select>
            </div>
           </div>
           <div className="md:flex lg:flex ">
            <div>
            <label htmlFor="price" className="" >Price</label>
            <br />
            <input type="number" required className=" border-black border mr-10 w-full" name='price' />
            </div>
            <div>
            <label htmlFor="availability" className="md:ml-5 ">Availability</label>
            <br />
            <select required name="availability" className="border-black border w-full md:ml-5" >
                <option value="available">Available</option>
                <option value="notAvailable">Not Available</option>
            </select>
            </div>
           </div>
            <br />
            <input type="submit" className='w-full hover:bg-sky-600 hover:text-white border border-black bg-sky-400 ' value='Added' />
        </form>
      </div>
    )
}
export default AddMenu;