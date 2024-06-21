import {heroes} from './data/heroes';

console.log('IMPORT - EXPORT');

const getHeroeById = (id) => {
    
    const heroe = heroes.find( (heroe) => heroe.id === id );
    return heroe;
    
    // const miHeroe = heroes.filter( heroe => {
    //     if (heroe.id === id) {
    //         // getHeroe = `el heroe es: ${heroe.name}`;
    //         return heroe;
    //     }
        
    // });

    // return miHeroe[0];
}

const getHeroeByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner);
console.log(getHeroeByOwner("DC"));


// const heroe = heroes.map( heroe => {
//     console.log(`nombre: ${heroe.name}`);
//     return heroe;
// });

console.log(getHeroeById(2) ?? false);



