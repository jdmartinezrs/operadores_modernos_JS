export function crearEstudiante(nombre, ...notas) {
  try {
    if (!nombre) {
      throw new Error("El nombre es obligatorio");
    }
    if (notas.length === 0) {
      throw new Error("Se debe registrar al menos una nota");
    }
    for (let i = 0; i < notas.length; i++) {
      const nota = notas[i];
      if (typeof nota !== "number" || Number.isNaN(nota)) {
        throw new Error("Todas las notas deben ser números");
      }
    }
    const [primeraNota, ...restoNotas] = notas;
    let promedioResto = 0;
    if (restoNotas.length > 0) {
      let suma = 0;
      for (let i = 0; i < restoNotas.length; i++) {
        suma += restoNotas[i];
      }
      promedioResto = suma / restoNotas.length;
    }
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
