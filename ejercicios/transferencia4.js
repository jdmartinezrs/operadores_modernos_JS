export function estadisticas(jugadores) {
  try {
    if (!Array.isArray(jugadores) || jugadores.length === 0) {
      throw new Error("Los jugadores deben ser un arreglo no vacío");
    }
    for (let i = 0; i < jugadores.length; i++) {
      const jugador = jugadores[i];
      if (!jugador || typeof jugador !== "object" || !jugador.stats || typeof jugador.stats.puntos !== "number") {
        throw new Error("Cada jugador debe tener stats con puntos numéricos");
      }
    }
    const primerJugador = jugadores[0];
    const puntosPrimerJugador = primerJugador.stats.puntos;
    let puntosTotales = 0;
    const jugadoresProcesados = [];
    for (let i = 0; i < jugadores.length; i++) {
      const jugador = jugadores[i];
      puntosTotales += jugador.stats.puntos;
      const copiaJugador = {
        nombre: jugador.nombre,
        stats: {
          puntos: jugador.stats.puntos,
          asistencias: jugador.stats.asistencias,
        },
      };
      jugadoresProcesados.push(copiaJugador);
    }
    return {
      puntosPrimerJugador,
      puntosTotales,
      jugadoresProcesados,
    };
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
