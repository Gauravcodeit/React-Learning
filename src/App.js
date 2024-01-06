import  React  from "react";
import ReactDOM  from "react-dom/client";

import Header from "./component/Header";
import Footer from "./component/Footer";
import CardContainer from "./component/CardContainer";
import { About } from "./component/About";
import { ErrorPage } from "./component/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
const router = createBrowserRouter([
    {
        path: '/',
        element : <AppLayout/>,
        errorElement : <ErrorPage />
    },
    {
        path: '/about',
        element : <About />
    },


])

root.render(<RouterProvider router={router} />);