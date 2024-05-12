import { restrauntMenuAPI } from "./Constant.js"
import { useEffect, useState } from "react";
const useRestrauntDetail = (rstID) =>{
    const [menuData, setMenuData] = useState(null);
    const [ menuDes, setMenuDes]= useState(null);
    const [ menuOffer, setMenuOffer]= useState(null);
    const [ topPickItem, setTopPickItem] =useState(null);
    const [ categories, setCategories] =useState(null);
    useEffect(()=>{
        fetchMenu();
    }, [])
    async function fetchMenu(){
        //const url = restrauntMenuAPI + rstID;
        // const corsfreeApi = 'https://corsproxy.org/?' + encodeURIComponent(url);
        // const corsfreeApi = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent(url);
        const corsfreeApi = 'https://itsyourfoodapp-backend.onrender.com/api/menu?lat=28.630251&lng=77.3463139&restaurantId=' + rstID;

        const restrauntDetail = await fetch(corsfreeApi);
        const restaurantDetailJson = await restrauntDetail.json();
        const baseStructure = restaurantDetailJson?.data;
        const resDes= baseStructure?.cards[2]?.card?.card;
        const resOffer= baseStructure?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
        const toppickitem = baseStructure?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
        const categories_var = baseStructure?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=> {
            return  (item?.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
        })
        //console.log(categories_var)
        setCategories(categories_var)
        console.log(restaurantDetailJson);
        setMenuOffer(resOffer);
        setMenuData(baseStructure);
        setMenuDes(resDes);
        setTopPickItem(toppickitem);
        // console.log(topPickItem);

    }
    return ([menuData, menuDes, menuOffer, topPickItem, categories ])
}
export default useRestrauntDetail;