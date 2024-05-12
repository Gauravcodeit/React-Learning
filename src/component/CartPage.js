import { useSelector } from "react-redux";
import MenuItem from "./MenuItem";
const CartPage = ()=>{
    const items = useSelector( (store)=>store.cart.items );
    console.log(items)
    return(
        <>
         <div className="menu-category">
         <MenuItem item={items} keyprefix={"cart"} />
         </div>

        </>
    )

}
export default CartPage;