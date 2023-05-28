/** CLASE 1 - REACT **/

//¿Que es React? 
//Librería de JS. 

//¿Cuando nace? 
//Mayo del 2013 nace en las oficinas de Facebook. 

//¿Cuales son las ventajas?

//1) Crear aplicaciones web mucho más rápidas. Gracias a la ténica del Virtual DOM que me permite actualizar algunas partes de mi aplicación sin recargar toda la página. (Lo vemos la clase que viene). 


//2)Basado en componentes: son conjuntos de elementos que cumplen una función específica. ( Por ejemplo un botón. )

//3) React tiene un enfoque DECLARATIVO. 

//Enfoque declarativo: estilo de programación en donde nos enfocamos en lo que se quiere lograr y no tanto en el como. 

//Enfoque imperativo: es un estilo de programación en donde se detallan paso a paso las acciones a realizar para lograr un resultado. 

//EJEMPLO EN CÓDIGO: 

//Consigna: Queremos crear un array de números pares entre el 0 y el 10. 

//¿Cómo lo resuelvo con un enfoque imperativo? 

const array = []; 

for(let i = 0; i <= 10; i++) {
    if(i % 2 == 0) {
        array.push(i);
    }
}

console.log(array);

//De modo declarativo: 

const numeros = [0,1,2,3,4,5,6,7,8,9,10]; 

const pares = numeros.filter(numero => numero % 2 == 0); 
console.log(pares);

//EXPRESIÓN: 
//Una expresión es una combinación de valores, variables y operadores que pueden ser evaluados para producir un resultado. 

//ejemplo: 

let numero = 5; 

let suma= numero + 5; 

//FUNCIONES EN JS: 
//Es un bloque de código con una tarea específica que puede ser reutilizado muchas veces. 

//Pueden ser DECLARADAS o EXPRESADAS: 

//Ejemplo de una función declarada: 
console.log(sumamos(50,10));

function sumamos(numeroUno, numeroDos) {
    //Cuerpo de la función. 
    let resultado = numeroUno + numeroDos; 
    return resultado;
}

//Llamar o Invocar a la función. 

//¿Una función declarada se puede invocar antes de su declaración?
//Si, porque el motor de JS las lee antes de ejecutar el código, y esto se conoce como hoisting. 

//FUNCIONES EXPRESADAS: 
//Son aquellas que se asignan a una variable. 

//Función anónima: 

const sumaDos = function(a,b) {
    return a + b;
}

console.log(sumaDos(60,10));

//Función flecha: 
//Es una versión resumida de la función anónima. 

const sumaTres = (a,b) => {
    return a + b;
}

const sumaCuatro = (a,b) => a + b;
//Cuando trabajamos en una sola línea no hace falta colocar las llaves y ya tiene el return implícito. 

const saludar = nombre => console.log("Hola " + nombre);
//Cuando tengo un solo parámetro lo puedo dejar sin parentesis. 

saludar("Tinki Winki");

//TRABAJO POR MÓDULOS. 
//Es una forma de dividir nuestro trabajo o código en partes más pequeñas. 

//Lo logramos utilizando las palabras "export" e "import". 








