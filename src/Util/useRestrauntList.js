import { useEffect, useState } from 'react';
import { swiggyTopRestrauntAPI } from './Constant';
const useRestrauntList = () =>{
    const [listRestaurant, setListRestaurant] = useState();

    useEffect(()=>{
        fetchData()
    }, [])
    async function fetchData(){

        const url = 'https://thingproxy.freeboard.io/fetch/' + encodeURIComponent(swiggyTopRestrauntAPI);
        //const url = 'https://itsyourfoodapp-backend.onrender.com/api/restaurants?lat=28.630251&lng=77.3463139';

        const restaurants = await fetch(url) ;
        const restaurantJson = await restaurants.json();
        const topRestaurant = restaurantJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        console.log(restaurantJson)
        setListRestaurant(topRestaurant);
    }
    return (listRestaurant)
}
export default useRestrauntList;