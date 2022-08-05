import React from 'react';
import { useRoutes } from 'react-router-dom';
import AdminGuard from '../guards/admin-guard';
import AuthGuard from '../guards/auth.guards';
import NoAuthGuard from '../guards/no-auth.guards';
import AdminLayout from '../layouts/admin';
import HomeLayout from '../layouts/home';
import Booking from '../pages/booking/booking';
import Home from '../pages/home/home';
import Login from '../pages/login/login';
import MoviesDetail from '../pages/movies-detail/movies-detail';
import MoviesManagent from '../pages/movies-managent/movies-managent';

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
                    path: "/",
                    element: <AuthGuard />,
                    children: [
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking />
                        },
                    ]
                },
                {
                    path: "/",
                    element: <NoAuthGuard />,
                    children: [
                        {
                            path: "/login",
                            element: <Login />
                        },
                    ]
                }
            ]
        },
        {
            path: "/admin",
            element: <AdminLayout></AdminLayout>,
            children: [
                {
                    path: '/admin/movie-management',
                    element: <AdminGuard />,
                    children: [
                        {
                            path: "/admin/movie-management",
                            element: <MoviesManagent></MoviesManagent>
                        }
                    ]
                }
            ]
        }
    ])
    return routing
}
