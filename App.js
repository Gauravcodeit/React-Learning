import  React  from "react";
import ReactDOM  from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

const  Header = ()=>{
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
const Card = () => {
    return (
        <div className="card-wrap">
            <div className="card-img-wrap">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hsylepkuygu6k8mryapk" />
            </div>
            <div className="card-content-wrap">
                <div className="card-title">
                    Bakingo
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
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

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