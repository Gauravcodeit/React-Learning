import  React  from "react";
import ReactDOM  from "react-dom/client";

import Header from "./component/Header";
import Footer from "./component/Footer";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { ErrorPage } from "./component/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));



const AppLayout = ()=>{
    return (
        <div className="app-layout">
            <Header />
                <RouterProvider router={router} />
            <Footer />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element :<Home /> ,
        errorElement : <ErrorPage />
    },
    {
        path: '/about',
        element : <About />
    },


])

root.render(<AppLayout/>);