
import Card, {HigherOrderCard} from './Card';
import Shimmer from './ShimmerUI';
import { useEffect, useState } from 'react';
import useRestrauntList from '../Util/useRestrauntList';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../Util/useOnlineStatus';
const CardContainer = function (){
    const onlineStatusFlag = useOnlineStatus()
    const listRestaurant = useRestrauntList()
    const [filteredRestaurant, setfilteredRestaurant] = useState();
    const [clickedFlag, setclickedFlag] =useState(true);
    const [inputValue, setinputValue] = useState("")
    const HigherOrderComponent = HigherOrderCard(Card)
    useEffect(()=>{
        setfilteredRestaurant(listRestaurant);
    }, [listRestaurant])

    function topRated(){
       setinputValue("")
       clickedFlag ? setclickedFlag(false): setclickedFlag(true);
       const FilteredRestaurant = listRestaurant.filter((res)=>{
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
    if (!onlineStatusFlag){
        return (<h2>Currently, you are offline </h2>)
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
                    if (item?.info?.avgRating < 4){
                        return(
                            <Link to={'restraunts/' + item?.info?.id} key={item?.info?.id}>
                            <Card
                                image_url={ item?.info?.cloudinaryImageId }

                                title ={item?.info?.name}
                                cuisines ={item?.info?.cuisines}
                            />
                            </Link>
                        )
                    }

                    else
                    { return(
                        <Link to={'restraunts/' + item?.info?.id} key={item?.info?.id}>
                            <HigherOrderComponent
                                image_url={ item?.info?.cloudinaryImageId }

                                title ={item?.info?.name}
                                cuisines ={item?.info?.cuisines}
                            />
                        </Link>
                    )
                    }
                })
            }
        </div>
        </>
    )
}
export default CardContainer