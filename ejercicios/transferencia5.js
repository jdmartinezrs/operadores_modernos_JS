export function configFinal(...configs) {
  try {
    for (let i = 0; i < configs.length; i++) {
      const config = configs[i];
      if (!config || typeof config !== "object" || Array.isArray(config)) {
        throw new Error("Cada configuración debe ser un objeto");
      }
    }
    const merged = {};
    for (let i = 0; i < configs.length; i++) {
      const config = configs[i];
      for (const clave in config) {
        if (Object.prototype.hasOwnProperty.call(config, clave)) {
          merged[clave] = config[clave];
        }
      }
    }
    return { ...merged, validacion: true };
  } catch (error) {
    console.error(error.message);
    return { validacion: false, error: error.message };
  }
}
