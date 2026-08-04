export function agregarInventario(lista, nuevoItem) {
  const nuevaLista = [...lista, nuevoItem];
  console.log(`Inventario actualizado: ${nuevaLista.length} ítems`);
  return nuevaLista;
}
