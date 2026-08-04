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


//ejercicio 5

const inventario = [
  { id: 1, nombre: "Teclado", precio: 120000 },
  { id: 2, nombre: "Mouse", precio: 50000 }
];

console.log("Inventario original:");
console.log(inventario);

const nuevoInventario = agregarItems(
  inventario,
  { id: 3, nombre: "Monitor", precio: 850000 },
  { id: 4, nombre: "Audífonos", precio: 180000 }
);

console.log("\nNuevo inventario:");
console.log(nuevoInventario);

console.log("\nInformación de un producto:");
obtenerInfo(nuevoInventario[2]);

console.log("\nProbando manejo de errores:");
obtenerInfo({ id: 5, nombre: "Cámara" });