import starLogo from '/src/assets/rating-icon.png';
const RestrauntMiniDetailCard = (props)=>{
    const { cardOne} = props;
    return (
        <>
            <div className="rest-mini-detail-wrap">
                <div className="res-cuisine-rating-wrap">
                    <div className="res-cuisine-locality-wrap">
                        <h1 className="res-detail-name">
                            {cardOne?.name}
                        </h1>
                        <div className="res-detail-cuisine">
                        { cardOne?.cuisines.join(", ") }
                        </div>

                        <div>
                            {cardOne?.locality}
                        </div>

                    </div>
                    <div className="res-detail-rating-card">
                        <div className="image-star-group">
                            <img src={starLogo}  alt="star"/>
                            <span>{cardOne?.avgRatingString}</span>
                        </div>
                        <div className="total-rating">
                            {cardOne?.totalRatingsString}
                        </div>
                    </div>

                </div>
                <div className="res-detail-delvy-fee">
                    {cardOne?.feeDetails?.message}
                </div>
            </div>
        </>
    )
}
export default RestrauntMiniDetailCard
