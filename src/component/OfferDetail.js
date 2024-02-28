const OfferDetail = (props)=>{
    const {offer}=props
    return (
        <>
        <div className="offer-card-wrap">
            <div className="menu-offer-header">
                {offer?.info?.header}
            </div>
            <div className="menu-offer-des">
                <span>
                    {offer?.info?.couponCode}
                </span>
                <span>
                   |
                </span>
                <span>
                    {offer?.info?.description}
                </span>
            </div>
        </div>
        </>
    )
}
export default OfferDetail