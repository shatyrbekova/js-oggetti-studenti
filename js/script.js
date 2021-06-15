//PARTE 1
//Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
 //Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell’oggetto.

 //OGGETTO

 setTimeout(function (){

    document.getElementById('studenti').innerHTML += '<br>'+ 'THE FIRST PART';

    var studentDates =

       //PROPRIETA'
  { Nome:"Perizat", Cognome: "Shatyrbekova", Età: 26}
    
console.log(studentDates);


for ( var key in studentDates){
    console.log(key, studentDates [key])
   document.getElementById('studenti').innerHTML+= '<br> '+ key + ':'+ '  '+ ' '+studentDates  [key] + '.';
}


 }, 2000);
 



//  PARTE 2
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome. 
// Ricordatevi, è un array, quindi? for.
setTimeout (function(){


    document.getElementById('studenti').innerHTML += '<br>'+'THE SECOND PART';
    var classCourse= {
        studenti: [
          {Nome:"Anna", Cognome: "Bianchi", Età: 26},
          {Nome:"Salvador", Cognome: "Rossi", Età: 22}
        ]
      }
      
      for( var k=0; k < classCourse.studenti.length; k++){
      
          for ( var key in classCourse.studenti[k]){
              document.getElementById('studenti').innerHTML += '<br>'+key +':'+' '+classCourse.studenti[k][key];
          }
      }
      
      
      console.log(classCourse);
      


}, 4000);

// PARTE 3
// Dare la possibilità all’utente, attraverso 3 prompt() - uno per ciascuna proprietà - 
//di aggiungere UN SOLO oggetto studente inserendo nell’ordine: nome, cognome e età.


setTimeout(function () {
    
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

}, 8000);


