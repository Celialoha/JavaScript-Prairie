var op
var nb1
var nb2
var calculette = document.getElementById("calculette");
var resultat

calculette.onclick = function calculette() {
    nb1 = document.getElementById("nb1").value;
    nb2 = document.getElementById("nb2").value;
    op = document.getElementById("op").value;

    if (op == "+")
        resultat = nb1 + nb2;

    if (op == "*")
        resultat = nb1 * nb2;

    if (op == "-")
        resultat = nb1 - nb2;

    if (op == "/")
        resultat = nb1 / nb2;

document.getElementById("resultat").innerHTML = resultat;
}

