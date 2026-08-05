export function procesarCompra(cliente, productos) {
  try {
    if (!cliente || typeof cliente !== "object") {
      throw new Error("Cliente inválido");
    }
    const { nombre, correo } = cliente;
    if (!nombre || !correo) {
      throw new Error("El cliente debe tener nombre y correo");
    }
    if (!Array.isArray(productos) || productos.length === 0) {
      throw new Error("La lista de productos debe ser un arreglo con al menos un elemento");
    }
    for (let i = 0; i < productos.length; i++) {
      const producto = productos[i];
      if (!producto || typeof producto !== "object" || !producto.nombre || typeof producto.precio !== "number") {
        throw new Error("Cada producto debe tener nombre y precio numérico");
      }
    }
    const clienteFinal = { ...cliente };
    const primerProducto = productos[0];
    const restoProductos = [];
    for (let i = 1; i < productos.length; i++) {
      restoProductos.push(productos[i]);
    }
    const totalProductos = productos.length;
    let precioTotal = 0;
    for (let i = 0; i < productos.length; i++) {
      precioTotal += productos[i].precio;
    }
    return {
      cliente: clienteFinal,
      totalProductos,
      precioTotal,
      primerProducto,
      restoProductos,
    };
  } catch (error) {
    console.error(error.message);
    return { error: error.message };
  }
}
