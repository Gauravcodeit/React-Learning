import {restaurant} from '../../Data';
import Card from './Card';
const CardContainer = function (){

    return (
        <div className="card-grp">
            {
                restaurant.map((item, index)=>{
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
    )
}
export default CardContainer