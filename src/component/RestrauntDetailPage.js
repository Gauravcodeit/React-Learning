import { restrauntMenuAPI } from "../Util/Constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./ShimmerUI";
import RestrauntMiniDetailCard from "./RestrauntMiniDetailCard";
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
    // const { name, avgRatingString, cuisines, locality, feeDetails, totalRatingsString    } =
    // menuList?.cards[0]?.card?.card?.info;


    return(
    <>
        <div className="rest-main-detail">
           <RestrauntMiniDetailCard cardOne = {menuList?.cards[0]?.card?.card?.info} />
        </div>
    </>
    )

}
export default RestrauntDetailPage;