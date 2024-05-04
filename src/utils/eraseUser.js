import { deleteDoc, doc } from "firebase/firestore"
import { db } from "../config/firebase.config"

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);



export const eraseUser = async(id) => {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
}


export const confirmEraseUser = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#30fcd6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        eraseUser(id);
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
}



