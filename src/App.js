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
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import CartPage from "./component/CartPage";

let persistor = persistStore(appStore);
const Grocery = lazy(()=> import("./component/Grocery"));
const AppLayout = ()=>{

    const [userName, setUserName] = useState('gaurav adhikari')
    return (
        <Provider store={appStore} >
            <PersistGate persistor={persistor} >
                <div className="app-layout">
                    <UserContext.Provider value={{loggedInUser:userName,setUserName }}>
                        <Header />
                            <Outlet />
                        <Footer />
                    </UserContext.Provider>
                </div>
            </PersistGate>

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
            },
            {
                path: '/cart',
                element : <CartPage />
            }
        ]
    },



])

root.render(<RouterProvider router={router} />);