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
               
                    <Link to={`/view/${menu._id}`}><button  className="font-bold text-center">View Detail</button></Link>

            </div>
            ))
        }
        </div>
        </>
    )
}
export default Cart;