import {restaurant} from '../../Data';
import Card from './Card';
import { useState } from 'react';
const CardContainer = function (){
    const [listRestaurant, setListRestaurant] = useState(restaurant);
    const [clickedFlag, setclickedFlag] =useState(true)


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
    return (
        <>
        <div className='filter-sort '>
           <button className='top-rated-btn' type='button' onClick={ clickedFlag ? topRated : allRestaurant}>
                { clickedFlag ? "Top Rated Restaurant" :"All Restaurant"}
            </button>
        </div>
         <div className="card-grp">
            {
                listRestaurant.map((item, index)=>{
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