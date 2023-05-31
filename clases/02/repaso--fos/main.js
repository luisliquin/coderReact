/** FUNCIONES DE ORDEN SUPERIOR **/
//Es aquella que recibe por parámetro una función o retorna  después de su ejecución otra función. 

/*  
function estoEsUnaFuncion(funcion()) {
    return funcion();
}

*/

//MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN: 
//JS incluye de forma nativa varias funciones de orden superior:
//En este curso vamos a usar: filter, find, some, map, reduce. 

const productos = [
    {nombre: "Pantalon", precio: 100 },
    {nombre: "Camisa", precio: 250},
    {nombre: "Zapatillas", precio: 400},
]

//1) FIND: busca un elemento en el array y retorna el primero que cumpla con la condición. 

const buscado = productos.find(item => item.nombre === "Camisa");

console.log(buscado);

//2) Filter = recibe una función comparadora por parámetro y retorna un nuevo array con los elementos que cumplan la condición. 

const productosBaratos = productos.filter(item => item.precio < 300);

console.log(productosBaratos);

//3) Some: retorna un booleano (true o false) si encuentra o no el elemento. 

let hayCamisa = productos.some(item => item.nombre === "Camisa");
console.log("¿Hay Camisas?");
console.log(hayCamisa);

//4) Map: me permite crear un nuevo array con todos los elementos del original pero transformados. 

//Ejemplo: creamos un array de productos pero que ahora tenga el iva incluido. 

const productosConIva = productos.map( item => {
    return {
        nombre: item.nombre,
        precio: (item.precio * 1.21)
    }
})

console.log(productosConIva);

//5) ForEach: recorre el array y ejecuta una función por cada elemento

productos.forEach( producto => {
    console.log(producto);
})

//6) Reduce: nos permite obtener un único valor después de iterar sobre un array. 

//Por ejemplo, el total de un carrito de compras. 

//Trabajamos con dos parámetros, un acumulador y el elemento a operar. 
//También debemos colocar el valor inicial del acumulador. 

let totalPrecio = productos.reduce((acumulador, producto) => acumulador + producto.precio, 100);

console.log(totalPrecio);





