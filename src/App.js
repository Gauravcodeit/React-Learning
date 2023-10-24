import  React  from "react";
import ReactDOM  from "react-dom/client";

import Header from "./component/Header";
import Footer from "./component/Footer";
import CardContainer from "./component/CardContainer";

const root = ReactDOM.createRoot(document.getElementById("root"));


const AppLayout = ()=>{
    return (
        <div className="app-layout">
            <Header />
            <div className="container">
                <CardContainer />
            </div>
            <Footer />
        </div>
    )
}

root.render(<AppLayout />);