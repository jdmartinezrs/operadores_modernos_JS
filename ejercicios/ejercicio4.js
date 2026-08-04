export function configurarUsuario(defaults, personalizadas) {
  const configuracion = { ...defaults, ...personalizadas };
  const { idioma } = configuracion;
  return idioma;
}
