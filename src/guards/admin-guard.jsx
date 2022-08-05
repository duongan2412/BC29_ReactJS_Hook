import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { notification } from "antd"

export default function AdminGuard() {
    const useState = useSelector((state) => state.userReducer);
    const navigate = useNavigate()

    useEffect(() => {
        if (!useState.userInfo) {
            navigate("/login")
        }
        if (useState.userInfo && useState.userInfo.maLoaiNguoiDung !== "QuanTri") {
            // alert("Khach hang k the vao trang admin")
            notification.warning({
                message: "Khach hang k the vao trang admin"
            })
            return navigate("/")
        }
    }, [])
    return (
        <Outlet />
    )
}
