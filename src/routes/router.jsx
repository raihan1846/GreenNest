import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/Home/Home';
import Sliders from '../components/Sliders/Sliders';
import Cards from '../components/Cards/Cards';
import PlantCares from '../components/PlantCares/PlantCares';
import GreenExparts from '../components/GreenExparts/GreenExparts';
import CardDetails from '../components/CardDetails/CardDetails';
import AuthLayout from '../layouts/AuthLayout';
import PrivateRoute from '../provider/PrivateRoute';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Loading from '../pages/Loading';
import MyProfile from '../components/MyProfile/MyProfile';
import PlantsOfTheWeek from '../components/PlantsOfTheWeek/PlantsOfTheWeek';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>
            },
            {
                path: "/ad-home/:id",
                element: (<PrivateRoute>
                   <PlantsOfTheWeek></PlantsOfTheWeek>
                </PrivateRoute>),
                loader: () => fetch("/plants.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/sliders",
                element: <Sliders></Sliders>
            },
            {
                path: "/card/:id",
                element: <Cards />,
                loader: () => fetch("/plants.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            ,
            {
                path: "/plants",
                element: <Cards />,
                loader: () => fetch("/plants.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/care",
                element: <PlantCares />,
                loader: () => fetch("/plantCare.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/exparts",
                element: <GreenExparts />,
                loader: () => fetch("/exparts.json"),
                hydrateFallbackElement: <Loading></Loading>
            },

            {
                path: "/card-details/:id",
                element:
                    <PrivateRoute>
                        <CardDetails />
                    </PrivateRoute>,
                loader: () => fetch("/plants.json"),
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: "/my-profile",
                element: (
                    <PrivateRoute>
                        <MyProfile />
                    </PrivateRoute>
                ),
            },

        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/*",
        element: <div>Error</div>,
    },
]);

export default router;