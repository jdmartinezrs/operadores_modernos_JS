export function procesarPedido(pedido, ...extras) {
  const { cliente, producto, cantidad } = pedido;
  return {
    cliente,
    producto,
    cantidad,
    extras,
  };
}
