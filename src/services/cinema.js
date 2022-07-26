import { request } from "../configs/axios"

const fetchMoviesShowTimesApi = (movieId) => {
    return request({
        url: `api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
        method: 'GET'
    })
}

export { fetchMoviesShowTimesApi }