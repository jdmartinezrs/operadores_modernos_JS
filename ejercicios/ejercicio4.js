export const actualizarNotas = (estudiante, ...nuevasNotas)=>{

return{
    ...estudiante,
    notas:[...estudiante.notas, ...nuevasNotas]
};
};

