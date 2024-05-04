import { Link } from "react-router-dom"
import { TableGetUser } from "../components/TableUser/TableGetUser"



export const HomePage = () => {



    return (
        <>
            <h1>Home Page</h1>
            <TableGetUser />

            <Link to='user/create' className="btn btn-success my-2 p-2">Create User</Link>
        </>
    )
}