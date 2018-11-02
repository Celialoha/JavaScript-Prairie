function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
 var nbre1 = getRandomInt(10);
 var nbre2 = getRandomInt(10);
 var operateur = getRandomInt(3);
 var resultat;

 if(operateur == 0){
operateur = "+";
 }
else if (operateur == 1){
    operateur = "*";
}
else if (operateur == 2){
    operateur = "-";
}

resultat = prompt ("Combien font " + nbre1 + operateur + nbre2);

if (operateur == "+"){
    if (nbre1 + nbre2 == resultat)
alert ("YES ! Bonne réponse");

else
alert("Et non ! Faux !");
}

if (operateur == "*"){
    if (nbre1 * nbre2 == resultat)
alert ("YES ! Bonne réponse");

else
alert("Et non ! Faux !");
}

if (operateur == "-"){
    if (nbre1 - nbre2 == resultat)
alert ("YES ! Bonne réponse");

else
alert("Et non ! Faux !");
}