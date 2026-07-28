const usuarioOriginal = {
    nombre: "Carlos",
    edad: 25 
}

const usuarioCopia = {...usuarioOriginal}

usuarioCopia.edad = 30;

console.log ("copia", usuarioCopia.edad);
console.log("original", usuarioOriginal.edad)