import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Chair from '../../modules/chair/chair';
import { fetchRoomListApi } from '../../services/booking';


export default function Booking() {
    const [dsGhe, setDsGhe] = useState([]);
    const [roomList, setRoomList] = useState();
    const params = useParams();
    useEffect(() => {
        fetchRoomList()
    }, []);

    const fetchRoomList = async () => {
        const result = await fetchRoomListApi(params.maLichChieu);
        setRoomList(result.data.content)
    }

    const handleSelect = (selectedChair) => {
        const data = [...dsGhe]
        const idx = data.findIndex(ele => ele.tenGhe === selectedChair.tenGhe)
        // console.log(selectedChair);
        if (idx !== -1) {
            data.splice(idx, 1)
        } else {
            data.push(selectedChair)
        }
        setDsGhe(data)
    }

    console.log(roomList)
    return (
        roomList ? (
            <div className='row w-75 mx-auto py-5'>
                <div className="col-8">
                    {
                        roomList.danhSachGhe.map((ele, idx) => {
                            return (
                                <React.Fragment key={ele.tenGhe}>
                                    <Chair handleSelect={handleSelect} item={ele}></Chair>
                                    {(idx + 1) % 16 === 0 && <br />}
                                </React.Fragment>
                            );
                        })
                    }
                </div>
                <div className="col-4">
                    <img src={roomList.thongTinPhim.hinhAnh} />
                    <h4>Ten phim: {roomList.thongTinPhim.tenPhim}</h4>
                    <h5>Mo ta {roomList.thongTinPhim.moTa}</h5>
                    <p>Ghe:
                        {dsGhe.map(ele => (
                            <p key={ele.tenGhe}> {ele.tenGhe}</p>
                        ))}
                    </p>
                    <p>Tong tien:
                        {dsGhe.reduce((preValue, curValue) => {
                            preValue += curValue.giaVe
                            return preValue
                        }, 0).toLocaleString()}
                    </p>
                </div>
            </div>
        )
            : (
                'Loading....'
            )
    )
}
