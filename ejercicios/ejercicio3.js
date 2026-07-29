/**Ejercicio 3:
Crea una función llamada mostrarDireccion que reciba un objeto con la siguiente
estructura:

GFPI-F-135 V04

{ ciudad: "Bogotá", pais: "Colombia" }
La función debe:
1. Usar destructuración para obtener ciudad y pais.
2. Envolver el proceso dentro de un try...catch.
3. Si el objeto no contiene las propiedades necesarias, arrojar un error personalizado
que indique:
"La información de la dirección no es válida". */

export const mostrarDireccion = (ubicacion) => {
    try {
        const { ciudad, pais } = ubicacion
        if (!ciudad || !pais) {
            throw new Error("La información de la dirección no es válida")
        }
        console.log(`ciudad: ${ciudad}`)
        console.log(`Pais: ${pais}`)
    } 
    catch (error) {
        console.log(error.message);
    }

}