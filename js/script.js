//PARTE 1
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
 //Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

 //OGGETTO
 var studentDates =

       //PROPRIETA'
  { Nome:"Perizat", Cognome: "Shatyrbekova", Età: 26}
    
console.log(studentDates);


for ( var key in studentDates){
    console.log(key, studentDates [key])
   document.getElementById('studenti').innerHTML+= '  '+ key + ':'+ '  '+ ' '+studentDates  [key] + '.';
}




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
while (studentiBoolean.classmates.length <2){

    var classmateName = prompt('Inserisci il nome dello studente');
    var classmateSurname= prompt('Inserisci il cognome dello studente');
    var classmateAge = prompt ('Inserisci l\'età dello studente' );
    if (isNaN (classmateAge)){
        alert('Inserisci l\'età dello studente');
        classmateAge = prompt ('Inserisci l\'età dello studente ');

    }

    studentiBoolean.classmates.push({
        Nome: classmateName,
        Cognome: classmateSurname,
        Età: classmateAge
    });
}


console.log (studentiBoolean.classmates);

for ( var y=0; y <studentiBoolean.classmates.length; y++){

    for (var key in studentiBoolean.classmates[y]){
        console.log(key, studentiBoolean.classmates[y][key]);
        document.getElementById('studenti').innerHTML+= '<br>'+ key+':'+ studentiBoolean.classmates[y][key];

    }

}