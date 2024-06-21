// FUNCIONES: CON NOMBRE - DE FLECHA


// function getUser( nombre ) {
//     return {
//         uid: 'abc123',
//         username: nombre,
//     }
// };



const getUser = ( nombre ) => (
    {
        uid: 'abc123',
        username: nombre,
    }
);


const userActive = getUser( 'user active' );
console.log(userActive);


