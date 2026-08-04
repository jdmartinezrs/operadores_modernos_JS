
export const agregarItems = (lista, ...items) => {
  return [...lista, ...items];
};

// Función para obtener información de un ítem
export const obtenerInfo = (item) => {
  try {
    const { id, nombre, precio } = item;

    if (id === undefined || nombre === undefined || precio === undefined) {
      throw new Error("El objeto no contiene todas las propiedades requeridas.");
    }

    console.log(`ID: ${id}`);
    console.log(`Nombre: ${nombre}`);
    console.log(`Precio: $${precio}`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};