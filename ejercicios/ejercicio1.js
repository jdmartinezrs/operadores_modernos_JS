export const registrarUsuario = (usuario, ...usuarios) => {

    const { nombre, edad } = usuario
    console.log(`Usuario principal: ${JSON.stringify (usuario)} ,Usuarios adicionales registrados: ${usuarios.length}`);

}


