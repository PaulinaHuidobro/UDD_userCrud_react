import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { db } from "../../config/firebase.config";
import { CrudForm } from "../CrudForm/CrudForm";



export const EditForm = () => {

    const [name, setName] = useState("");
    const [lastname, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [RUT, setRut] = useState("");
    const [age, setAge] = useState(0);
    const [phone, setPhone] = useState("");

    const { id } = useParams()
    const navigate = useNavigate()

    const updateUser = async (id) => {
        const user = await getDoc(doc(db, 'users', id));

        if(user.exists()) {
            setName(user.data().name)
            setlastName(user.data().lastname)
            setEmail(user.data().email)
            setRut(user.data().RUT)
            setAge(user.data().age)
            setPhone(user.data().phone)
        } else {
            console.log('No pudimos encontrar al usuario que buscas :c')
        }
    }

    const onUpdate = async(event) => {
        event.preventDefault()
        const user = doc(db, 'users', id)

        const data = {
            name, // name: name
            lastname, // lastname : lastname
            email, // email: email
            RUT, // RUT: RUT
            age, // age: age
            phone // phone: phone
        }
        await updateDoc(user, data)
        navigate('/')
    }
 


    useEffect(() => {
        updateUser(id)
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Edit User</h2>

                    <CrudForm 
                        handleSubmit={onUpdate}
                        name={name}
                        setName={setName}
                        lastName={lastname}
                        setlastName={setlastName}
                        email={email}
                        setEmail={setEmail}
                        age={age}
                        setAge={setAge}
                        rut={RUT}
                        setRut={setRut}
                        phone={phone}
                        setPhone={setPhone}
                        button='Edit'
                    
                    />
                </div>
            </div>
        </div>
    )
}