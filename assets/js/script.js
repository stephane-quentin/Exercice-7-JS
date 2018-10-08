function ex7(){
  var shoe = document.getElementById("shoeSize").value; // récupération de la première variable que l'on a tapé dans la page html
  var year = document.getElementById("yearOfBirth").value;
  var result = (((((shoe * 2) + 5) * 50) - year) + 1768); //soustraction multiplication addition ...

  if(shoe=='' || year==''){
    alert('Au moins un champ est vide')
    }else{
      if(isNaN(shoe) || isNaN(year)){ // OU logique
        alert('Erreur!');
      } else {
        alert("Résultat : " + result);
        }
      }
}
