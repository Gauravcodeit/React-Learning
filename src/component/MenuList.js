import { useState } from "react";
import MenuCategory from "./MenuCategory";
const MenuList = (props)=>{
    const {categories} = props;
    console.log(categories);
    const [accIndex,setAccIndex] = useState(0);
    return (
        categories?.map((category,index)=>{

            return (
            <MenuCategory key={category?.card?.card.title}
                calltheparent={(currentState)=>{currentState ? setAccIndex(null) : setAccIndex(index)}} toshowDetail={accIndex == index ? true : false} category={category} />
             )
        })
    )
}
export default MenuList