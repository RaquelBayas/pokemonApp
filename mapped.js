const valorApi = 'fire';

const mappedTypes = {
    fire: 'Fuego',
    electric: 'Eléctrico',
    grass: 'Planta'
}

function translateType(type) {
    return mappedTypes[type];
}
translateType(valorApi)