import { useState } from "react";
import { meuItemImageBaseUrl } from "../Util/Constant";
import { useDispatch } from "react-redux";
import { addItem } from "../Util/cartSlice";
const MenuCategory = (props)=>{
    const {category, calltheparent, toshowDetail} = props;
    const title = category?.card?.card?.title;
    const item = category?.card?.card?.itemCards;
    const handleClick=()=>{

        calltheparent(toshowDetail)
    }
    const dispatch = useDispatch();
    const handleAddToCart =()=>{
        dispatch(addItem("orange"));
    }
    return (

        <div className="menu-category">
            <div className="menu-category-heading" onClick={handleClick}>
                <span>{title}</span>
                <span>✅</span>
            </div>
            {
            toshowDetail ?
                <div className="menu-category-detail">
                    {
                    item.map((c) => {
                        const menuItem = c?.card?.info;
                        return(
                        <div key={menuItem.id} className="category-item-detail">
                            <div className="cat-item-detail">
                            <div>{menuItem?.name}</div>
                            <div>{menuItem?.description}</div>
                            </div>
                            <div className="cat-item-image">
                                <img src={meuItemImageBaseUrl + menuItem?.imageId } />
                                <button type="button" className="add-to-cart" onClick={handleAddToCart} >Add</button>
                            </div>

                        </div>
                        )
                    })
                    }

                </div>
            :
            <></>
            }

        </div>

    )

}
export  default MenuCategory;