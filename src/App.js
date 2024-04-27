import  React, {lazy, Suspense, useState} from "react";
import ReactDOM  from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";
import { Home } from "./component/Home";
import  About  from "./component/About";
import { ErrorPage } from "./component/ErrorPage";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestrauntDetailPage from "./component/RestrauntDetailPage";
import UserContext from "./Util/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
import { Provider } from "react-redux";
import appStore from "./Util/AppStore";

const Grocery = lazy(()=> import("./component/Grocery"))
const AppLayout = ()=>{

    const [userName, setUserName] = useState('gaurav adhikari')
    return (
        <Provider store={appStore} >
            <div className="app-layout">
                <UserContext.Provider value={{loggedInUser:userName,setUserName }}>
                    <Header />
                        <Outlet />
                    <Footer />
                </UserContext.Provider>
            </div>
        </Provider>
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
            },
            {
                path: 'grocery',
                element: <Suspense fallback={<div>Loading</div>} ><Grocery /></Suspense>
            }
        ]
    },



])

root.render(<RouterProvider router={router} />);