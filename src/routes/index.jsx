import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomeLayout from '../layouts/home';
import Home from '../pages/home/home';
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
            ]
        }
    ])
    return routing
}
