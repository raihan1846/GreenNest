import React from 'react';
import { createBrowserRouter } from 'react-router';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../components/Home/Home';
import Sliders from '../components/Sliders/Sliders';
import Cards from '../components/Cards/Cards';
import PlantCares from '../components/PlantCares/PlantCares';
import GreenExparts from '../components/GreenExparts/GreenExparts';
import CardDetails from '../components/CardDetails/CardDetails';

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
                path: "/sliders",
                element: <Sliders></Sliders>
            },
            {
                path: "/card/:id",
                element: <Cards />,
                loader: () => fetch("/plants.json")
             },
             {
                path: "/care",
                element: <PlantCares />,
                loader: () => fetch("/plantCare.json")
              },
              {
                 path: "/exparts",
                 element: <GreenExparts />,
                 loader: () => fetch("/exparts.json")
              },
              {
                path: "/card-details/:id",
                element: <CardDetails />,
                loader: () => fetch("/plants.json")
             },
            
        ]
    }
]);

export default router;