import { Button } from 'antd';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { fetchMoviesListApi } from '../../services/movies';

export default function MovieList() {
    const navigate = useNavigate();

    const [moviesList, setMoviesList] = useState([]);

    useEffect(() => {
        fetchMoviesList();
    }, []);

    const fetchMoviesList = async () => {
        const result = await fetchMoviesListApi();
        setMoviesList(result.data.content);
    }

    const renderMoviesList = () => {
        return moviesList.map((ele) => {
            return (
                <div key={ele.maPhim} className="col-3">
                    <div className="card movie-card" style={{ marginBottom: 20, height: 500 }}>
                        <img style={{ height: 350, objectFit: 'cover' }} className="card-img-top" src={ele.hinhAnh} alt="movie" />
                        <div className="card-body">
                            <h5 className="card-title">{ele.tenPhim}</h5>
                            <Button loading type="primary" onClick={() => navigate(`/movie/${ele.maPhim}`)}>XEM CHI TIẾT</Button>
                            {/* <button  className="btn btn-info"></button> */}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div className="row mt-3 mx-auto w-75">
            {renderMoviesList()}
        </div>
    )
}
