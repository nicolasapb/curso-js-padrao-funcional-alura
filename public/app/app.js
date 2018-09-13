import { notasService as service } from './nota/service.js';

        // .then(notas => notas.flatMap(nota => nota.itens)) //<-- Chrome 69
        // .then(notas => notas.reduce((itens, nota) => itens.concat(nota.itens), []))
document
    .querySelector('#myButton')
    .onclick = () =>
        service
        .sumItems('2143')
        .then(console.log)
        .catch(console.log);


