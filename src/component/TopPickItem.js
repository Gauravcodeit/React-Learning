const TopPickItem = (props)=>{
    const imgBaseUrl = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_628,h_704/'
    return(
        <>
            <div className="top-pick-card">
                <img src={imgBaseUrl + props?.topItem?.creativeId} />
            </div>
        </>
    )
}
export default TopPickItem