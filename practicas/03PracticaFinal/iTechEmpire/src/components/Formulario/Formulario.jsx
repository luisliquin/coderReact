import { useState } from "react"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../services/config"

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
  
    const manejadorFormulario = (event) => {
        event.preventDefault();

        addDoc(collection(db, "usuarios"),{
            nombre:nombre,
            apellido:apellido,
            telefono:telefono
        })

        setNombre("");
        setApellido("");
        setTelefono("");
    }

    return (
    <form onSubmit={manejadorFormulario}>
        <h2>Formulario de clientes</h2>

        <label htmlFor="">Nombre</label>
        <input type="text" value={nombre} onChange={(e)=> setNombre(e.target.value)}/>

        <label htmlFor="">Apellido</label>
        <input type="text" value={apellido} onChange={(e)=> setApellido(e.target.value)}/>

        <label htmlFor="">Telefono</label>
        <input type="text" value={telefono} onChange={(e)=> setTelefono(e.target.value)}/>

        <button type="submit">Enviar</button>

    </form>
  )
}

export default Formulario
