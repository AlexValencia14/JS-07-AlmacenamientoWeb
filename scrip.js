/*

API de almacenamiento web

Nos permite almacenar información de nuestro navegador, de dos formas:

    - Local (persistencia de los datos)
    - Sesión (los datos son volatiles)

Tanto el almacenamiento local como el de sesion, proporcionan un area privada para tratar sus datos, esto quiere decir que otros sitios web no pueden acceder a los datos que almacenamos.

*/

/*
Almacenamiento Local (localStorage)


La informacion que pongamos en el almacenamiento local se guarda indefinidamente hasta que sea eliminada por codigo o borrada del navegador.

Casos de uso: articulos de un carrito de compras, guardamos un perfil de configuracion, historial de uso.


*/

//Guardando mi primer dato en localStorage
//localStorage.setItem(key, value)

localStorage.setItem("Nombre", "Felipe");
localStorage.setItem("Apellido", "Maqueda");
localStorage.setItem("Edad", "31");

//Guardando un carrito de compras 

let carritoCompras= ["Sabritones", "CocaCola", "Chicles", "Tortillas"];

localStorage.setItem("CarritoCompras", carritoCompras);


//Obtener la informacion almacenada en mi localStorage

//localStorage.getItem(key)
let apellido=localStorage.getItem("Apellido");
console.log(apellido);

//recuperando mi carrito de compras
let carrito=localStorage.getItem("CarritoCompras");
console.log(carrito);


//borrar  un elemento del localStorage
//localStorage.removeItem(key)
localStorage.removeItem("CarritoCompras");


//conocer el largo o longitud del localStorage
//localStorage.length
let longitudLocalStorage=localStorage.length;
console.log(longitudLocalStorage);

//Para modificar datos con set
localStorage.setItem("Apellido","Gonzalez");
