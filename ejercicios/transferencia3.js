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
    productos.forEach((producto) => {
      if (!producto || typeof producto !== "object" || !producto.nombre || typeof producto.precio !== "number") {
        throw new Error("Cada producto debe tener nombre y precio numérico");
      }
    });
    const clienteFinal = { ...cliente };
    const [primerProducto, ...restoProductos] = productos;
    const totalProductos = productos.length;
    const precioTotal = productos.reduce((sum, item) => sum + item.precio, 0);
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
