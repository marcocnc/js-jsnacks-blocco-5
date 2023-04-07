
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110, 
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 96
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },
]

console.log(students);

/*Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120
*/

// 1.
const nameUp = students.map( student => {
    return student.name.toUpperCase(); // trasforma in uppercase
})

console.log(nameUp);

// 2.
const grades70 = students.filter ( student =>{
    if(student.grades > 70){ // se è true crea il nuovo array di studenti
        return true;
    }
    return false;
})

console.log(grades70);

// 3.{
const id120AndGrades70 = students.filter ( student =>{
    if(student.id > 120 && student.grades > 70){
        return true;
    }
    return false;
})
console.log(id120AndGrades70);