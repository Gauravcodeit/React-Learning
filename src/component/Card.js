
import { useContext } from "react";
import UserContext from "../Util/UserContext";

const Card = (props) => {
    const  {loggedInUser} = useContext(UserContext);
    const { image_url, title, cuisines } = props;
    return (
        <div className="card-wrap">
            <div className="card-img-wrap">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + image_url}/>
            </div>
            <div className="card-content-wrap">
                <div className="card-title">
                    { title }
                </div>
                <div className="card-cuisines">
                    { cuisines.join(',  ') }
                </div>
                <div> User :{loggedInUser}</div>
            </div>
        </div>
    )
}
export const HigherOrderCard = (Card)=>{
    return (props)=>{
        return(
            <>
            <label>Top Rated</label>
            <Card { ...props} />
            </>
        )
    }
}
export default Card