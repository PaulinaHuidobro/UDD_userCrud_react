import { Link } from "react-router-dom"
import { TableGetUser } from "../components/TableUser/TableGetUser"
import { Header } from "../components/header/Header"
import { CreatePage } from "./indexViews"



export const Reserva = () => {



    return (
        <>
            
            <Header />
            <TableGetUser />
            <CreatePage />

            <Link to='user/create' className="btn btn-success my-2 p-2">Create User</Link>
        </>
    )
}