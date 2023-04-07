/*
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal.
*/

const bikes = [
    {
        name: 'Rockrider' ,
        weight: 20
    },
    {
        name: 'Riverside' ,
        weight: 25
    },
    {
        name: 'Triban',
        weight: 30
    },
    {
        name: 'Btwin',
        weight: 19
    },
    {
        name: 'Elops',
        weight: 17
    },
    {
        name: 'Ceres',
        weight: 24
    },
    {
        name: 'Stilus',
        weight: 23
    },
]

// const minWeigthBike = bikes.reduce((min, max) => {
//     return min.weigth < max.weigth ? min : max;
// });
// console.log(minWeigthBike);

const minWeigthBike = bikes.reduce((min, max) =>{
    return min.weight < max.weight ? min : max;
})
const {name, weight} = minWeigthBike;
console.log(`La bici con peso minore è ${name} con i suoi ${weight}kg`)

