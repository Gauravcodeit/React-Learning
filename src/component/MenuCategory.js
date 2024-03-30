import { useState } from "react";
import { meuItemImageBaseUrl } from "../Util/Constant";
const MenuCategory = (props)=>{
    const {category, calltheparent, toshowDetail} = props;
    const title = category?.card?.card?.title;
    const item = category?.card?.card?.itemCards;
    const handleClick=()=>{

        calltheparent(toshowDetail)
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