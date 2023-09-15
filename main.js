// calculate my money
function submit() {
    var money = document.getElementById("all").value;

    var p50 = money*(100-50)/100;
    var p25 = 0;
    var p5 = 0;
    var p10 = 0;
    var p5m1 = 0;
    var p5m2 = 0;

    document.getElementById("display").innerHTML = p50;
}