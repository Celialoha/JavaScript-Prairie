var monNom;
monNom = prompt("Bonjour");
if (monNom==""){
  alert ("Prière de remplir le champ Nom");
}
else if (monNom.length<=10 && monNom.length>=1){
alert ("Bonjour " + monNom);
}
else{
  alert ("Nom trop long !");
}

