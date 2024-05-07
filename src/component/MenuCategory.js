

import MenuItem from "./MenuItem";
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
                <MenuItem item ={item} />
            :
            <></>
            }

        </div>

    )

}
export  default MenuCategory;