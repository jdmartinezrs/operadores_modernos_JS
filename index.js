import {
  procesarPedido,
  agregarInventario,
  registrarActividad,
  configurarUsuario,
  actualizarPerfil,
  calcularTotalVentas,
  evaluar,
  fusionarColecciones,
} from "./ejercicios/index.js";

const pedido = procesarPedido(
  { cliente: "María", producto: "Cámara", cantidad: 2 },
  "envío rápido",
  "regalo"
);
console.log("Pedido procesado:", pedido);

const inventario = ["cámara", "trípode", "micrófono"];
const inventarioActualizado = agregarInventario(inventario, "luz led");
console.log("Inventario original:", inventario);
console.log("Inventario nuevo:", inventarioActualizado);

registrarActividad({ nombre: "Sesión de estudio", fecha: "2026-08-04" });

const idioma = configurarUsuario({ tema: "claro", idioma: "es" }, { tema: "oscuro" });
console.log("Idioma configurado:", idioma);

const perfilActualizado = actualizarPerfil(
  { nombre: "Luis", edad: 30 },
  { ciudad: "Medellín" },
  { edad: 31 }
);
console.log("Perfil actualizado:", perfilActualizado);

const ventas = [
  { producto: "teclado", detalles: { precio: 50, unidades: 3 } },
  { producto: "mouse", detalles: { precio: 20, unidades: 5 } },
];
console.log("Total vendido del primer producto:", calcularTotalVentas(ventas));

console.log("Promedio:", evaluar(10, 20, 30));
console.log("Fusión de colecciones:", fusionarColecciones([1, 2], [3, 4]));
