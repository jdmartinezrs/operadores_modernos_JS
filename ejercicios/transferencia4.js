export function estadisticas(jugadores) {
  try {
    if (!Array.isArray(jugadores) || jugadores.length === 0) {
      throw new Error("Los jugadores deben ser un arreglo no vacío");
    }
    jugadores.forEach((jugador) => {
      if (!jugador || typeof jugador !== "object" || !jugador.stats || typeof jugador.stats.puntos !== "number") {
        throw new Error("Cada jugador debe tener stats con puntos numéricos");
      }
    });
    const [primerJugador] = jugadores;
    const {
      stats: { puntos: puntosPrimerJugador },
    } = primerJugador;
    const puntosTotales = jugadores.reduce((sum, jugador) => sum + jugador.stats.puntos, 0);
    const jugadoresProcesados = jugadores.map((jugador) => ({
      ...jugador,
      stats: { ...jugador.stats },
    }));
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
