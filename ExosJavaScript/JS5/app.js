var sum = 0;
var note;
for (var i = 0; i < 10; i++) {
    note = parseInt(prompt("Saisissez une note "));
    if (note >= 0 && note <= 20) {
        sum = note + sum;
    }
    else {
        alert("La note doit être entre 0 et 20");
        i--;
    }
  

}
alert("et la moyenne est " + sum/10); 