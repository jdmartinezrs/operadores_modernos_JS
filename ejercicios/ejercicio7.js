export function evaluar(...valores) {
  try {
    valores.forEach((valor) => {
      if (typeof valor !== "number" || Number.isNaN(valor)) {
        throw new Error("Todos los valores deben ser numéricos");
      }
    });
    const lista = [...valores];
    const promedio = lista.reduce((sum, val) => sum + val, 0) / lista.length;
    return promedio;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
