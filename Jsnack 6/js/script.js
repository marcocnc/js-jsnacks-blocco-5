
const teams = [
    {
        team: 'Napoli',
        points: 0,
        faults: 0
    },
    {
        team: 'Feralpisalò',
        points: 0,
        faults: 0
    },
    {
        team: 'Tuttocuoio',
        points: 0,
        faults: 0
    },
    {
        team: 'Cuoiopelli',
        points: 0,
        faults: 0
    },
    {
        team: 'Clivense',
        points: 0,
        faults: 0
    },
    {
        team: 'Albinoleffe',
        points: 0,
        faults: 0
    },
    {
        team: 'Pergolettese',
        points: 0,
        faults: 0
    },
]
/*
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.
*/

// Sostituire lo zero delle chiavi points e faults con i numeri casuali restituiti dalle funzioni
teams.map(team =>{
    if (team.points === 0 && team.faults === 0) {
        team.points = randomPoints();
        team.faults = randomFaults();
    }
})
console.log(teams);

// Destrutturazione
const teams2 = teams.map(nome =>{
    const {team, faults} = nome;
    const obj = {
        team,
        faults,
    }
    return obj;
})
console.log(teams2);






// funzione per generare numeri random per i punti
function randomPoints(){
    const teamPoints = Math.floor(Math.random() * 50) + 1;
    return teamPoints;
}

// funzione per generare numeri random per i falli subiti
function randomFaults(){
    const teamFaults = Math.floor(Math.random() * 10) + 1;
    return teamFaults;
}