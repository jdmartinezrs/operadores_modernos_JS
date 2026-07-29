import { registrarUsuario, agregarProducto } from './ejercicios/index.js'

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