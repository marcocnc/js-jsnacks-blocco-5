const students = [
    {
        name: 'Rita',
        lastname: 'Loggia',
        badgeNum: 1563,
        votes : [25, 18, 28, 30]
    },
    {
        name: 'Filomena',
        lastname: 'Lo Duca',
        badgeNum: 6545,
        votes : [19, 24, 27, 20]
    },
    {
        name: 'Ernesto',
        lastname:'Ferrari',
        badgeNum: 8761,
        votes : [30, 29, 28, 29]
    },
    {
        name: 'Salvatore',
        lastname: 'Sabbatini',
        badgeNum: 3892,
        votes : [23, 28, 19, 27]
    }
]

const newList = students.map(function(studente){
   
    return {nome: studente.name + ' ' + studente.lastname, badge: studente.badgeNum, media: mediaVoti(studente.votes)};
})

console.log(newList);

function mediaVoti(voti){
    let somma = 0;
    for (let i = 0; i < voti.length; i++) {
        somma += voti[i];
    }
    let media = somma / voti.length;
    return media;
}