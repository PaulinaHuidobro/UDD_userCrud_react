import { Link } from "react-router-dom"
import { TableGetUser } from "../components/TableUser/TableGetUser"
import { Header } from "../components/Header/Header"



export const HomePage = () => {



    return (
        <>
            
            <Header />
            <TableGetUser />

            <Link to='user/create' className="btn btn-success my-2 p-2">Create User</Link>
        </>
    )
}