export function registrarActividad(actividad) {
  try {
    const { nombre, fecha } = actividad;
    if (!nombre || !fecha) {
      throw new Error("La actividad no es válida");
    }
    const mensaje = `Actividad registrada: ${nombre} en fecha ${fecha}`;
    console.log(mensaje);
    return { registrado: true, actividad };
  } catch (error) {
    console.error(error.message);
    return { registrado: false, error: error.message };
  }
}
