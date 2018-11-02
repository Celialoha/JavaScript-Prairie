var mystere = Math.floor(Math.random() * 10);
var nb;
for (var i = 0; i < 3; i++) {
    nb = parseInt(prompt("Entrez un chiffre !"));

if (mystere > nb) {
    alert("Le nombre mystère est plus grand");
}
else if (mystere < nb) {
    alert("Le nombre mystère est moins grand");
}
else
    alert("BINGO !");
}