export function fusionarColecciones(lista1, lista2) {
  try {
    if (!Array.isArray(lista1) || !Array.isArray(lista2)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }
    return [...lista1, ...lista2];
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
