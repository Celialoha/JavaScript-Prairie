var id;
id = prompt("Identifiant");
if (id.length<=4)
    alert ("Renseigner au moins 5 caractères");
else if (id.search("@")==-1)
    alert ("L'identifiant doit contenir un \"@\"");
else if (id=="lea@gmail.com") {
    if (prompt("mot de passe")!="12345")
        alert ("Le mot de passe est faux !");
    else 
     alert ("Bravo!");
}
else
    alert ("L'identifiant est faux !");

