

export const listarElementos = (...valores)=>{
    console.log(valores)
for (let i = 0; i< valores.length; i++){
    console.log("Elemento", i + 1, ":", valores[i]);
}
}