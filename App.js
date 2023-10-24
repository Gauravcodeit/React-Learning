import  React  from "react";
import ReactDOM  from "react-dom/client";
import {restaurant } from  './Data'
const root = ReactDOM.createRoot(document.getElementById("root"));



const  Header = ()=>{
    console.log(restaurant, "dassd")
    return (
        <div className="header">
            <div className="logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgLVahkYFXMGyjUvABC6Bc6FehIiXqI760Q&usqp=CAU" alt="logo" />
            </div>
            <div className="nav-items">
                <ul className="unordered-list">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                </ul>
            </div>
        </div>
    )
}
const Card = (props) => {
    const { image_url, title, cuisines } = props
    return (
        <div className="card-wrap">
            <div className="card-img-wrap">
                <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + image_url}/>
            </div>
            <div className="card-content-wrap">
                <div className="card-title">
                    { title }
                </div>
                <div className="card-cuisines">
                    { cuisines.join(',  ') }
                </div>
            </div>
        </div>
    )
}

const Footer = () => {
     return (
        <>
        <div className="footer">
            CopyRight
        </div>
        </>
     )
}

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
const  AppBody = () =>{
    return(
        <CardContainer />
    )
}
const AppLayout = ()=>{
    return (
        <div className="app-layout">
            <Header />
            <div className="container">
                <AppBody />
            </div>
            <Footer />
        </div>
    )
}


root.render(<AppLayout />);