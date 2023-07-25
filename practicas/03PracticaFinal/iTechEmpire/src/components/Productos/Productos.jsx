import { useState, useEffect } from "react"
import { getDocs, collection, query, where,doc, updateDoc} from "firebase/firestore"
import { db } from "../../services/config"

function Productos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        //const misPreoductos = query(collection(db, "productos"));
        const misPreoductos =  query(collection(db, "productos"), where("precio","<",800));
        
        getDocs(misPreoductos)
            .then(res => {
                setProductos(res.docs.map(doc=>({id:doc.id, ...doc.data()})))                
            })
    },[productos])

    const descontarStock =async (producto) => {
        const productoRef = doc(db, "productos", producto.id);
        const nuevoStock = producto.stock - 1;

        await updateDoc(productoRef, {stock:nuevoStock}); 
    }

  return (
    <>
    <h2>Mis productos</h2>
    <div>
        {
            productos.map(producto =>
                <div key={producto.id}>
                    <h3>{producto.nombre}</h3>
                    <p>Precio: {producto.precio}</p>
                    <p>Sttock: {producto.stock}</p>
                    <button onClick={()=>descontarStock(producto)}>Comprar</button>
                </div>
            )
        }
    </div>
    </>
  )
}

export default Productos
