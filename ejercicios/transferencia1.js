export function crearEstudiante(nombre, ...notas) {
  try {
    if (!nombre) {
      throw new Error("El nombre es obligatorio");
    }
    if (notas.length === 0) {
      throw new Error("Se debe registrar al menos una nota");
    }
    notas.forEach((nota) => {
      if (typeof nota !== "number" || Number.isNaN(nota)) {
        throw new Error("Todas las notas deben ser números");
      }
    });
    const [primeraNota, ...restoNotas] = notas;
    const promedioResto = restoNotas.length
      ? restoNotas.reduce((sum, nota) => sum + nota, 0) / restoNotas.length
      : 0;
    return {
      nombre,
      primeraNota,
      promedioResto,
      totalNotas: notas.length,
    };
  } catch (error) {
    console.error(error.message);
    return { error: error.message };
  }
}
