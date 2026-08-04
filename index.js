import { registrarUsuario, agregarProducto, mostrarDireccion, actualizarNotas } from './ejercicios/index.js'

registrarUsuario(
    {
        nombre: "Juan",
        edad: 30
    }
    ,{
        nombre: "Pedro",
        edad: 25
    },
    {
        nombre: "Maria",
        edad: 28
    }
)

const productos = ["teclado", "mouse", "pantalla"];

const copiaProductos = [...productos, "auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares","auriculares"];

console.log("Lista original de productos:", productos);
console.log("Nueva lista de productos:", copiaProductos);

mostrarDireccion ({ ciudad: "Bogotá", pais: "Colombia" })


////Ejercicio3

const estudiante = {
nombre: "Laura",
notas: [4.0, 3.8]
};

const estudianteActualizado = actualizarNotas(estudiante, 4.5,5.0);

console.log("Objeto original: ");
console.log(estudiante);

console.log("Nuevo objeto: ");
console.log(estudianteActualizado)