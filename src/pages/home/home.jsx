import React from 'react'
import MovieList from '../../modules/movie-list/movielist'
import Carousel from '../../modules/carousel/carousel'

export default function Home() {
    return (
        <div className="py-5">
            <Carousel></Carousel>
            <MovieList />
        </div>
    )
}
