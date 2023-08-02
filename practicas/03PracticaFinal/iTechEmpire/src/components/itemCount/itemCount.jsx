import { useState } from "react";

const ItemCount = ({inicial, stock, funcionAgregar}) => {
    console.log('inicial', inicial)
    console.log('stock', stock)

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        console.log('contador', contador)
        console.log('stock', stock)
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        console.log('contador', contador)
        console.log('inicial', inicial)

        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div>
                <button onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button onClick={incrementar}> + </button>
            </div>

            <button onClick={() => funcionAgregar(contador)}> Agregar al Carrito </button>
        </>
    )
}

export default ItemCount