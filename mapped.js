const valorApi = 'fire';

const mappedTypes = {
    fire: 'Fuego',
    electric: 'Eléctricp',
    grass: 'Planta'
}

function translateType(type) {
    return mappedTypes[type];
}
translateType(valorApi)