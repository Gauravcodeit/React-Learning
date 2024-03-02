import { restrauntMenuAPI } from "../Util/Constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuPageShimmer from "./MenuPageShimmer";
import RestrauntMiniDetailCard from "./RestrauntMiniDetailCard";
import TopPickItem from "./TopPickItem";
import OfferDetail from "./OfferDetail";
const RestrauntDetailPage =()=>{
    const {rstID} = useParams();
    const [menuData, setMenuData] = useState(null);
    const [ menuDes, setMenuDes]= useState(null);
    const [ menuOffer, setMenuOffer]= useState(null);
    const [ topPickItem, setTopPickItem] =useState(null);
    useEffect(()=>{
        fetchMenu();
    }, [])
    async function fetchMenu(){
        const url = restrauntMenuAPI + rstID;
        const corsfreeApi = 'https://corsproxy.org/?' + encodeURIComponent(url);
        const restrauntDetail = await fetch(corsfreeApi);
        const restaurantDetailJson = await restrauntDetail.json();
        const baseStructure = restaurantDetailJson?.data;
        const resDes= baseStructure?.cards[0]?.card?.card;
        const resOffer= baseStructure?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
        const toppickitem = baseStructure?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.carousel;
        console.log(restaurantDetailJson);
        setMenuOffer(resOffer);
        setMenuData(baseStructure);
        setMenuDes(resDes);
        setTopPickItem(toppickitem);
        console.log(topPickItem);
    }
    if (menuData === null ){
        return <MenuPageShimmer />
    }



    return(
    <>
    <div className="res-detailcontainer">
        <div className="rest-main-detail">
            <RestrauntMiniDetailCard cardOne = {menuDes?.info} />
        </div>
        <div className="offers-grp">
           { menuOffer?.map((item)=> <OfferDetail offer={item} key={item?.info?.offerIds[0]} />)}
        </div>
        <div className="top-pick-header">Top Pick</div>
        <div className="top-pick-wrap">
            {topPickItem?.map((item)=><TopPickItem key={item?.bannerId} topItem={item} />) }
        </div>
    </div>

    </>
    )

}
export default RestrauntDetailPage;