
import Card from './Card';
import Shimmer from './ShimmerUI';
import { useEffect, useState } from 'react';
const CardContainer = function (){
    const [listRestaurant, setListRestaurant] = useState();
    const [filteredRestaurant, setfilteredRestaurant] = useState();
    const [clickedFlag, setclickedFlag] =useState(true);
    const [inputValue, setinputValue] = useState("")

    useEffect(()=>{
        fetchData()
    }, [])
    async function fetchData(){
        //const restaurants = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.630251&lng=77.3463139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING') ;
        // cors policy bypass - https://corsproxy.org/
        const restaurants = await fetch('https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.630251%26lng%3D77.3463139%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING') ;
        const restaurantJson = await restaurants.json();
        const topRestaurant = restaurantJson?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurantJson)
        setListRestaurant(topRestaurant);
        setfilteredRestaurant(topRestaurant);
        console.log(filteredRestaurant)
    }
    function topRated(){
        setinputValue("")
        clickedFlag ? setclickedFlag(false): setclickedFlag(true);
        let FilteredRestaurant = listRestaurant.filter((res)=>{
            return (res.info.avgRating > 4.2)
        })
        setfilteredRestaurant(FilteredRestaurant)

    }
    function allRestaurant(){
        setinputValue("")
        setfilteredRestaurant(listRestaurant)
        clickedFlag ? setclickedFlag(false): setclickedFlag(true);
    }
    function SearchedList(){
        let filteredList =  listRestaurant.filter((res)=>{
            return (res.info.name.toLowerCase().includes(inputValue.toLowerCase()))
        })
        setfilteredRestaurant(filteredList)
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
            <div className='search-wrap'>
                <input type='search' name='search' onChange={(e)=>{setinputValue(e.target.value)}} value={inputValue} />
                <button type='button' onClick={SearchedList}>
                    Search
                </button>
            </div>
        </div>
         <div className="card-grp">
            {
                filteredRestaurant?.map((item, index)=>{
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