
import Card from './Card';
import Shimmer from './ShimmerUI';
import { useEffect, useState } from 'react';
import { swiggyTopRestrauntAPI } from '../Util/Constant';
import { Link } from 'react-router-dom';
const CardContainer = function (){
    const [listRestaurant, setListRestaurant] = useState();
    const [filteredRestaurant, setfilteredRestaurant] = useState();
    const [clickedFlag, setclickedFlag] =useState(true);
    const [inputValue, setinputValue] = useState("")

    useEffect(()=>{
        fetchData()
    }, [])
    async function fetchData(){

        const url = 'https://corsproxy.org/?' + encodeURIComponent(swiggyTopRestrauntAPI);
        const restaurants = await fetch(url) ;
        const restaurantJson = await restaurants.json();
        const topRestaurant = restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
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
                        <Link to={'restraunts/' + item?.info?.id} key={item?.info?.id}>
                        <Card
                            image_url={ item?.info?.cloudinaryImageId }

                            title ={item?.info?.name}
                            cuisines ={item?.info?.cuisines}
                        />
                        </Link>

                    )
                })
            }
        </div>
        </>

    )
}
export default CardContainer