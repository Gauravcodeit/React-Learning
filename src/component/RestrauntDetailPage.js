
import {useParams } from "react-router-dom";
import MenuPageShimmer from "./MenuPageShimmer";
import RestrauntMiniDetailCard from "./RestrauntMiniDetailCard";
import TopPickItem from "./TopPickItem";
import OfferDetail from "./OfferDetail";
import useRestrauntDetail from "../Util/useRestrauntDetail";
import useOnlineStatus from "../Util/useOnlineStatus";
const RestrauntDetailPage =()=>{
    const onlineStatusFlag = useOnlineStatus()
    const {rstID} = useParams();
    const [menuData, menuDes, menuOffer, topPickItem ] = useRestrauntDetail(rstID);
    if (!onlineStatusFlag){
        return (<h2>Currently, you are offline </h2>)
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