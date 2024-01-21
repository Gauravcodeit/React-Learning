import { restrauntMenuAPI } from "../Util/Constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
const RestrauntDetailPage =()=>{
    const {rstID} = useParams();
    const [ menuList, setMenuList]= useState(null);
    useEffect(()=>{
        fetchMenu();
    }, [])
    async function fetchMenu(){
        const url = restrauntMenuAPI + rstID;
        const corsfreeApi = 'https://corsproxy.org/?' + encodeURIComponent(url);
        const restrauntDetail = await fetch(corsfreeApi);
        const restaurantDetailJson = await restrauntDetail.json();
        console.log(restaurantDetailJson);

            setMenuList(restaurantDetailJson?.data);

        console.log(menuList);
    }
    if (menuList === null ){
        return <Shimmer />
    }
    const { name, avgRatingString} = menuList?.cards[0]?.card?.card?.info;
    return(
    <>
        <h1>
            Detail {name}
        </h1>
        <div>
        {avgRatingString}
        </div>
    </>
    )

}
export default RestrauntDetailPage;