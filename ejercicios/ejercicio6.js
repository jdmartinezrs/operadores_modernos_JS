export function calcularTotalVentas(ventas) {
  const [{ detalles: { precio, unidades } }] = ventas;
  return precio * unidades;
}
