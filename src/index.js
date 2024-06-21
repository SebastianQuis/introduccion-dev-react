import {heroes} from './data/heroes';

console.log('IMPORT - EXPORT');

const getHeroeById = (id) => {
    // let getHeroe;
    const stringHeroe = heroes.map( heroe => {
        if (heroe.id === id) {
            // getHeroe = `el heroe es: ${heroe.name}`;
            return heroe;
        } else {
            // getHeroe = 'no se encontró heroe';
            return null;
        }
    });

    return stringHeroe;
} 



// const heroe = heroes.map( heroe => {
//     console.log(`nombre: ${heroe.name}`);
//     return heroe;
// });

console.log(getHeroeById(2));



