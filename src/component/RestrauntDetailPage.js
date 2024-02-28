import { restrauntMenuAPI } from "../Util/Constant";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuPageShimmer from "./MenuPageShimmer";
import RestrauntMiniDetailCard from "./RestrauntMiniDetailCard";
import OfferDetail from "./OfferDetail";
const RestrauntDetailPage =()=>{
    const {rstID} = useParams();
    const [menuData, setMenuData] = useState(null);
    const [ menuDes, setMenuDes]= useState(null);
    const [ menuOffer, setMenuOffer]= useState(null);
    useEffect(()=>{
        fetchMenu();
    }, [])
    async function fetchMenu(){
        const url = restrauntMenuAPI + rstID;
        const corsfreeApi = 'https://corsproxy.org/?' + encodeURIComponent(url);
        const restrauntDetail = await fetch(corsfreeApi);
        const restaurantDetailJson = await restrauntDetail.json();
        const resDes= restaurantDetailJson.data?.cards[0]?.card?.card;
        const resOffer= restaurantDetailJson.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.offers;
        console.log(restaurantDetailJson);
        setMenuOffer(resOffer);
        setMenuData(restaurantDetailJson?.data);
        setMenuDes(resDes);

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
    </div>

    </>
    )

}
export default RestrauntDetailPage;