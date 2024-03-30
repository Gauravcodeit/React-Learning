import { restrauntMenuAPI } from "./Constant.js"
import { useEffect, useState } from "react";
const useRestrauntDetail = (rstID) =>{
    const [menuData, setMenuData] = useState(null);
    const [ menuDes, setMenuDes]= useState(null);
    const [ menuOffer, setMenuOffer]= useState(null);
    const [ topPickItem, setTopPickItem] =useState(null);
    useEffect(()=>{
        fetchMenu();
    }, [])
    async function fetchMenu(){
        const url = restrauntMenuAPI + rstID;
        // const corsfreeApi = 'https://corsproxy.org/?' + encodeURIComponent(url);
        const corsfreeApi = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent(url)
        const restrauntDetail = await fetch(corsfreeApi);
        const restaurantDetailJson = await restrauntDetail.json();
        const baseStructure = restaurantDetailJson?.data;
        const resDes= baseStructure?.cards[2]?.card?.card;
        const resOffer= baseStructure?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
        const toppickitem = baseStructure?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
        console.log(restaurantDetailJson);
        setMenuOffer(resOffer);
        setMenuData(baseStructure);
        setMenuDes(resDes);
        setTopPickItem(toppickitem);
        // console.log(topPickItem);

    }
    return ([menuData, menuDes, menuOffer, topPickItem ])
}
export default useRestrauntDetail;