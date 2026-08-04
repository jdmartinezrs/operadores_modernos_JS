export function fusionarCatalogos(a, b) {
  try {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }
    const fusion = [...a, ...b];
    return [...fusion].sort((itemA, itemB) => itemA.precio - itemB.precio);
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
