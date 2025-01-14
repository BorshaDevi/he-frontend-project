const AddMenu=()=>{
    return(
      <div className="mt-10 lg:ml-96 md:ml-64 md:h-60    md:w-96 md:p-3 shadow-2xl container">
        <h1 className="text-center mt-5 font-bold">Menu Add</h1>
        <form  >
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
            <input type="submit" className='w-full border border-black bg-sky-400 ' value='Added' />
        </form>
      </div>
    )
}
export default AddMenu;