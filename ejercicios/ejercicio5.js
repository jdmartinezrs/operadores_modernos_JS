export function actualizarPerfil(perfil, ...nuevosDatos) {
  const datosCombinados = nuevosDatos.reduce((acc, dato) => ({ ...acc, ...dato }), {});
  return { ...perfil, ...datosCombinados };
}
