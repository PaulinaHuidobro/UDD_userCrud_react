import { useEffect, useState  } from "react";

import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../config/firebase.config'

import { Link } from "react-router-dom";
import { confirmEraseUser } from "../../utils/eraseUser";


/* import { Table } from "react-bootstrap";
 */


export const TableGetUser = () => {

    const [ users, setUsers ] = useState([])

    const usersCollectionReference = collection(db, 'users')

    const getUsers = async() => {
        console.log("Hola")
        const data = await getDocs(usersCollectionReference);
        console.log ("esto es  data",data)
        setUsers(
            data.docs.map((doc) => ({...doc.data(), id: doc.id})) // los tes (...) son el Spread Operator
            //docs siempre es un array
        )

    }

    useEffect(() => {
        getUsers()
    }, [users])

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col"></div>

            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>RUT</th>
                  <th>Email Adress</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (

                    user.status ? 
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.RUT}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>{user.phone}</td>
                        <td>
                            <Link
                                to={`/user/edit/${user.id}`}
                                className="btn btn-warning mx-2 p-2"
                            >
                                <i className="fa-solid fa-user-pen"></i>
                            </Link>
                            <button className="btn btn-danger mx-2 p-2" onClick={() => {confirmEraseUser(user.id)}}>
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </td>
                        </tr>
                  : null
                  
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
}