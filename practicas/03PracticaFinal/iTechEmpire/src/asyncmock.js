const misProductos = [
    { 
        id: "1", 
        nombre: "Galaxy s23",
        descripcion: "El mejor celular de la linea Samsung", 
        precio: 300, 
        img: "../img/yerba.jpg", 
        idCat: "1" 
    },
    { 
        id: "2", 
        nombre: "Ipad 4", 
        descripcion: "Una herramienta versatil para todo estudiante",
        precio: 200, 
        img: "../img/fideos.jpg", 
        idCat: "2" 
    },
    { 
        id: "3", 
        nombre: "Alienware", 
        descripcion: "Una de las mejores opciones para todos aquellos gamers bajo el respaldo de DELL",
        precio: 180, 
        img: "../img/arroz.jpg", 
        idCat: "3" 
    },
    { 
        id: "4", 
        nombre: "Iphone 13", 
        descripcion: "Uno de los mejores de los disposivos de los ultimos tiempos en el mercado tecnologico",
        precio: 600, 
        img: "../img/aceite.jpg", 
        idCat: "1" 
    },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}


//Creamos una nueva función similar a la anterior pero qu enos retorne un solo item: 

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}


//Creamos una función que retora un array de una determinada categoría de producto: 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}