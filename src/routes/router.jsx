import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/Home/Home';
import Cards from '../components/Cards/Cards';

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
                element: <Home></Home>,
                loader: () => fetch("/plants.json")
            },
            {
                path: "/card/:id",
                element: <Cards />,
                loader: () => fetch("/plants.json")
                }
            
        ]
    }
]);

export default router;