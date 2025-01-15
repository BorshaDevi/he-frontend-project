import { Link } from "react-router";
import useMenu from "../hook/useMenu";


const Cart=()=>{
    const [allMenus]=useMenu()
    console.log(allMenus)
    return(
        <>
        
        <div className="grid md:grid-cols-3 gap-10 grid-cols-1 mt-10">
        {
            allMenus?.map(menu=>(
            <div key={menu._id} className="bg-sky-300 p-5 shadow-xl">
                <h1 className="font-bold">{menu.menuName}</h1>
                <p className="uppercase">{menu.category}</p>
                <div className="flex justify-between">
                    <p>Price:{menu.price}k</p>
                    <p>{menu.availability === 'available' ? <span className="text-green-600">Available</span>:<span className="text-red-600"> Not Available</span>}</p>
                    
                </div>
               
                {
                    menu.availability === 'notAvailable' ?<button className="text-center font-bold mt-5 p-1 rounded-s-xl cursor-not-allowed text-slate-400" ><h1 disabled>Add to Cart</h1></button>: <button className="text-center font-bold mt-5 p-1 rounded-s-xl bg-white "><h1 >Add to Cart</h1></button> 
                }

            </div>
            ))
        }
        </div>
        </>
    )
}
export default Cart;