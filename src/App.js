import React, {lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestuarantMenu from "./components/RestuarantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";


const Grocery = lazy(()=> import("./components/Grocery"))

const Appcomponent = () => {
    const [userName, setUserName] = useState("Default User")

    useEffect(()=>{
        const data = {
            name: "YASH"
        };
        setUserName(data.name)
    },[])

    return (
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
            <div className="Appcomponet"> 
            <Header />
            <Outlet />
            </div>
        </UserContext.Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Appcomponent />,
        children: [
               {
                path: "/",
                element: <Body />,
           },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading....!!!</h1>}> 
                    <Grocery />
                    </Suspense>
            },
            {
                path: "/restaurants/:id",
                element: <RestuarantMenu />
            }
        ],
        errorElement: <Error />,
    },
    

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);