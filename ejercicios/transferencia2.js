export function fusionarCatalogos(a, b) {
  try {
    if (!Array.isArray(a) || !Array.isArray(b)) {
      throw new Error("Ambos parámetros deben ser arreglos");
    }
    const fusion = [];
    for (let i = 0; i < a.length; i++) {
      fusion.push(a[i]);
    }
    for (let i = 0; i < b.length; i++) {
      fusion.push(b[i]);
    }
    for (let i = 0; i < fusion.length - 1; i++) {
      for (let j = i + 1; j < fusion.length; j++) {
        if (fusion[i].precio > fusion[j].precio) {
          const temp = fusion[i];
          fusion[i] = fusion[j];
          fusion[j] = temp;
        }
      }
    }
    return fusion;
  } catch (error) {
    console.error(error.message);
    return null;
  }
}
