
import Card from './Card';
import Shimmer from './ShimmerUI';
import { useEffect, useState } from 'react';
const CardContainer = function (){
    const [listRestaurant, setListRestaurant] = useState();
    const [clickedFlag, setclickedFlag] =useState(true)

    useEffect(()=>{
        fetchData()
    }, [])
    async function fetchData(){
        const restaurants = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.630251&lng=77.3463139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING') ;
        const restaurantJson = await restaurants.json();
        const topRestaurant = restaurantJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setListRestaurant(topRestaurant);
    }
    function topRated(){
        console.log(listRestaurant.length)
        clickedFlag ? setclickedFlag(false): setclickedFlag(true);
        let FilteredRestaurant = listRestaurant.filter((res)=>{
            return (res.info.avgRating > 4.1)
        })
        setListRestaurant(FilteredRestaurant)
        console.log(FilteredRestaurant)
    }
    function allRestaurant(){
        setListRestaurant(restaurant)
        clickedFlag ? setclickedFlag(false): setclickedFlag(true);
    }
    if (!listRestaurant?.length){
        return(
            <>
            <Shimmer />
            </>
        )
    }
    return (
        <>
        <div className='filter-sort '>
           <button className='top-rated-btn' type='button' onClick={ clickedFlag ? topRated : allRestaurant}>
                { clickedFlag ? "Top Rated Restaurant" :"All Restaurant"}
            </button>
        </div>
         <div className="card-grp">
            {
                listRestaurant?.map((item, index)=>{
                    return(
                        <Card
                        image_url={ item?.info?.cloudinaryImageId }
                        key={item?.info?.id}
                        title ={item?.info?.name}
                        cuisines ={item?.info?.cuisines}
                        />
                    )
                })
            }
        </div>
        </>

    )
}
export default CardContainer