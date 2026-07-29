console.log("Inicio");

try{
    const usuario= {nombre: "Juan", edad: 30};
    console.log(usuario.nombre); //genera error
} catch (error){
    console.log("Ocurrió un error:", error.message);
}

console.log("fin del programa");