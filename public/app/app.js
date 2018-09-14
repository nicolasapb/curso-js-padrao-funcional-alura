import { notasService as service } from './nota/service.js';
import { takeUntil, debounceTime, pipe, partialize } from './utils/operators.js';

const operations = pipe(
    partialize(takeUntil, 3),
    partialize(debounceTime, 500)
);

const action = operations(() =>
    service
		.sumItems('2143')
		.then(console.log)
		.catch(console.log)
);
// const action = debounceTime(500,
// 	takeUntil(3, () =>
// 		service
// 		.sumItems('2143')
// 		.then(console.log)
// 		.catch(console.log)
// 	)
// );

document
	.querySelector('#myButton')
	.onclick = action;


// .then(notas => notas.flatMap(nota => nota.itens)) //<-- Chrome 69
// .then(notas => notas.reduce((itens, nota) => itens.concat(nota.itens), []))
