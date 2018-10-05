function ex7(){
  var shoe = document.getElementById("shoeSize").value; // récupération de la première variable que l'on a tapé dans la page html
  var year = document.getElementById("yearOfBirth").value;
  var result = (((((shoe * 2) + 5) * 50) - year) + 1766); //soustraction multiplication addition ...
  alert("Résultat : " + result);
}
