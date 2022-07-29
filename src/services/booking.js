import { request } from "../configs/axios"

const fetchRoomListApi = (showTimeId) => {
    return request({
        url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`,
        method: 'GET'
    })
}

export { fetchRoomListApi }