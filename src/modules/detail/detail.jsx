import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchMoviesDetailApi } from '../../services/movies';

export default function Detail() {
    const [moviesDetail, setMoviesDetail] = useState({});
    const params = useParams();

    useEffect(() => {
        fetchMoviesDetail();
    }, []);

    const fetchMoviesDetail = async () => {
        const result = await fetchMoviesDetailApi(params.movieId);
        setMoviesDetail(result.data.content);
        // console.log(result);
        // fetchMoviesDetail(result.data);
    }

    // const renderMoviesDetail = () => {
    //     return moviesDetail.map((ele) => {
    //         return (

    //         )
    //     })
    // }

    return (
        <div className="row">
            <div className="col-3">
                <img className="w-100" src={moviesDetail.hinhAnh} />
            </div>
            <div className="col-9">
                <h4>{moviesDetail.tenPhim}</h4>
                <p>{moviesDetail.moTa}</p>
                <p>{moviesDetail.ngayKhoiChieu}</p>
                <div>
                    <button className="btn btn-info mr-2">TRAILER</button>
                </div>
            </div>
        </div>
    )
}
