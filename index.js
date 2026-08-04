import {
  crearEstudiante,
  fusionarCatalogos,
  procesarCompra,
  estadisticas,
  configFinal,
} from "./ejercicios/index.js";

console.log("Estudiante creado:", crearEstudiante("Ana", 5, 4.0, 3.8));

const catalogoA = [
  { id: 1, nombre: "Curso JavaScript", precio: 40 },
  { id: 2, nombre: "Curso HTML", precio: 35 },
];
const catalogoB = [{ id: 3, nombre: "Curso CSS", precio: 30 }];
console.log("Catálogo fusionado:", fusionarCatalogos(catalogoA, catalogoB));

console.log(
  "Compra procesada:",
  procesarCompra(
    { nombre: "Sofía", correo: "sofia@example.com" },
    [
      { nombre: "Libro", precio: 20 },
      { nombre: "Lapicero", precio: 3 },
    ]
  )
);

const jugadores = [
  { nombre: "Ana", stats: { puntos: 20, asistencias: 5 } },
  { nombre: "Luis", stats: { puntos: 15, asistencias: 7 } },
];
console.log("Estadísticas deportivas:", estadisticas(jugadores));

console.log(
  "Configuración final:",
  configFinal(
    { modo: "producción", lenguaje: "es", nivel: 1 },
    { nivel: 2, tema: "oscuro" }
  )
);
