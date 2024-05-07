
import { meuItemImageBaseUrl } from "../Util/Constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Util/cartSlice";
const MenuItem =(props)=>{
    const {item}= props;
    const dispatch = useDispatch();

    const handleAddToCart =(item)=>{
        console.log(item)
        dispatch(addItem(item));
    }
    return (
        <div className="menu-category-detail">
                    {
                    item?.map((c) => {
                        const menuItem = c?.card?.info;
                        return(
                        <div key={menuItem.id} className="category-item-detail">
                            <div className="cat-item-detail">
                            <div>{menuItem?.name}</div>
                            <div>{menuItem?.description}</div>
                            </div>
                            <div className="cat-item-image">
                                <img src={meuItemImageBaseUrl + menuItem?.imageId } />
                                <button type="button" className="add-to-cart" onClick={()=>{handleAddToCart(c)}} >Add</button>
                            </div>

                        </div>
                        )
                    })
                    }

        </div>
    )
}
export default MenuItem;