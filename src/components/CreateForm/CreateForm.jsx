import { useState } from "react"

import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../config/firebase.config' 
import { useNavigate } from 'react-router-dom'

import { CrudForm } from "../CrudForm/CrudForm"



export const CreateForm = () => {

    const [ name, setName ] = useState('')
    const [ lastname, setlastName ] = useState('')
    const [ email, setEmail ] =  useState('')
    const [ RUT, setRut ] = useState('')
    const [ age, setAge ] = useState(0)
    const [ phone, setPhone ] = useState('')

    const navigate = useNavigate()

    const usersCollectionReference = collection(db, 'users')

    const onSubmit = async (event) => {
        event.preventDefault()
        const usuario = {
            name,  /*name: name (entendiendo que el primer name es la clave o propiedad del objeto, y el segundo name es 
                                 la varialbe con el valor de esa propiedad) */
            lastname,
            email,
            RUT,
            age,
            phone,
            status: false
        }
        await addDoc( usersCollectionReference, usuario)
        navigate('/')
    }

    
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <h2>Reserva aqui </h2>

                    <CrudForm 
                        handleSubmit={onSubmit}
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
                        button='Create'
                    
                    />
                </div>
            </div>
        </div>
        </>
    )
}