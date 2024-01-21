import  React  from "react";
import ReactDOM  from "react-dom/client";

import Header from "./component/Header";
import Footer from "./component/Footer";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { ErrorPage } from "./component/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntDetailPage from "./component/RestrauntDetailPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = ()=>{
    return (
        <div className="app-layout">
            <Header />
                <Outlet />
            <Footer />
        </div>
    )
}
const router = createBrowserRouter([
    {
        path: '/',
        element :<AppLayout /> ,
        errorElement : <ErrorPage />,
        children :[
            {
                path: '/',
                element : <Home />
            },
            {
                path: '/about',
                element : <About />
            },
            {
                path: 'restraunts/:rstID',
                element : <RestrauntDetailPage />
            }
        ]
    },



])

root.render(<RouterProvider router={router} />);