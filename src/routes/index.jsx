import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeLayout from '../layouts/home';
import Booking from '../pages/booking/booking';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import MoviesDetail from '../pages/movies-detail/movies-detail';

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayout />,
            children: [
                {
                    path: '/',
                    element: <Home />
                },
                {
                    path: '/movie/:movieId',
                    element: <MoviesDetail />
                },
                {
                    path: '/booking/:maLichChieu',
                    element: <Booking />
                },
                {
                    path: '/login',
                    element: <Login />
                },
            ]
        }
    ])
    return routing
}
