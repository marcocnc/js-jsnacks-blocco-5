Jsnack Blocco 5
===

## Jsnack 1
Abbiamo un elenco utenti (nome, cognome, età). <br>
Trovare i minorenni e gli over 65.
### Logica
1. Creare un array di oggetti contenenti le chiavi nome, cognome ed età;
2. Filter per evidenziare i minorenni e gli over 65

## Jsnack 2
Abbiamo un elenco degli studenti di una facoltà. <br>
Ogni studente ha un nome, un cognome, un numero di matricola e un elenco di voti. <br>
Dobbiamo creare un nuovo elenco dove ogni studente ha un nome-cognome, matricola e media voti.
### Logica
1. Come nel primo snack, un array di oggetti contenenti nome, cognome, numero matricola e un elenco di voti;
2. A questo punto si destruttura l'array

## Jsnack 4
Abbiamo un elenco degli studenti di una facoltà , identificati da _id_, _Nome_ e _somma totale_
dei loro voti di esame...
1. Per preparare l’aula di un nuovo corso, dobbiamo stampare le targhe col nome degli studenti:
creare una lista contenente il loro nome tutto in maiuscolo
ES (Marco della Rovere => MARCO DELLA ROVERE);
2. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
3. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id
superiore a 120
### Logica
1. Prima di tutto si dichiara l'array di oggetti contenente tutti gli studenti con le relative informazioni;
2. Per creare la lista degli studenti col nome in uppercase bisogna fare un ciclo map dell'array di oggetti il cui return sarà la chiave name trasformata in uppercase;
3. Per creare la lista degli studenti col totale di voti superiore a 70 si fa un ciclo filter dell'array di oggetti, in cui ci sarà una condizione che ritornerà true se il valore student.grades è superiore a 70, e così avremo il nuovo array di studenti;
4. L'ultimo passaggio consiste nel creare una lista di studenti con id superiore a 120 e voti totali superiore a 70: si crea un altro ciclo filter in cui ci sarà la doppia condizione, che se sarà true ritornerà il nuovo array.


## Jsnack 5
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà : nome e peso.
Stampare in console la bici con peso minore utilizzando destructuring e template literal
### Logica

## Jsnack 6
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà : nome,
punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà : punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e
falli subiti e stampiamo tutto in console.