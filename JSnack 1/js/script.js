// Abbiamo un elenco utenti (nome, cognome, età).
// Trovare i minorenni e gli over 65

// Variabili
const users = [
    {
        name: 'Marco',
        lastname: 'Cancelliere',
        age: 23,
    },

    {
        name: 'Ciro',
        lastname: 'Esposito',
        age: 26,
    },

    {
        name: 'Mario',
        lastname: 'Di Giacomo',
        age: 16,
    },

    {
        name: 'Lorenzo',
        lastname: 'Lepri',
        age: 52,
    },

    {
        name: 'Nicola',
        lastname: 'Uccello',
        age: 80,
    },

    {
        name: 'Patrizia',
        lastname: 'Williams',
        age: 67,
    }
]



// Evidenziare con filter le varie età

// Minorenni
const underage = users.filter((underageUser) => {
    if(underageUser.age < 18){
        return true;   //! Filter restituisce un valore booleano
    }
    return false;
})

/* forma contratta
const underage = users.filter( utente => users.age < 18)

*/
console.log(underage);

//Over 65
const over65 = users.filter((over65User) => {
    if(over65User.age > 65){
        return true;
    }
    return false;
})

console.log(over65);

