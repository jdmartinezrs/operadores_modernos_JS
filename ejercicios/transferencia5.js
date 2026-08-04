export function configFinal(...configs) {
  try {
    configs.forEach((config) => {
      if (!config || typeof config !== "object" || Array.isArray(config)) {
        throw new Error("Cada configuración debe ser un objeto");
      }
    });
    const merged = configs.reduce((acc, config) => ({ ...acc, ...config }), {});
    return { ...merged, validacion: true };
  } catch (error) {
    console.error(error.message);
    return { validacion: false, error: error.message };
  }
}
