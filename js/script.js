//PARTE 1
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
 //Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

 var studentDates =

  { nome:"Perizat", cognome: "Shatyrbekova", eta: 26}
    
console.log(studentDates);


for ( var key in studentDates){
    console.log(key, studentDates [key])
}

var studentInformations = document.getElementById('studenti');

studentInformations.innerHTML+= studentDates;

//  PARTE 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. 
// Ricordatevi, è un array, quindi? for.

var classCourse= {
  studenti: []
}



console.log(classCourse);

// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - 
//di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.


var studentiBoolean ={

    classmates:[]

}
while (studentiBoolean.classmates.length <1){

    var classmateName = prompt('Inserisci il nome');
    var classmateSurname= prompt('Inserisci il cognome');
    var classmateAge = prompt ('Inserisci l\'età');

    studentiBoolean.classmates.push({
        nome: classmateName,
        cognome: classmateSurname,
        età: classmateAge
    });
}


console.log (studentiBoolean.classmates);

for ( var y=0; y <studentiBoolean.classmates.length; y++){

    for (var key in studentiBoolean.classmates[y]){
        console.log(key, studentiBoolean.classmates[y][key])
    }

}