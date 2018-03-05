var snes = document.getElementById("snes");
var genesis = document.getElementById("genesis");
var playstation = document.getElementById("playstation");
var n64 = document.getElementById("n64");
var gamecube = document.getElementById("gamecube");
var gameboy = document.getElementById("gameboy");
var ds = document.getElementById("ds");
const clock = document.getElementById("clock");

function blink() {
    var colon = document.getElementById("colon");
    colon.style.visibility = colon.style.visibility == "hidden" ? "visible" : "hidden";
}

document.body.onload = function() {
    updateClock();
    setInterval("updateClock()", 1000);
    setInterval("blink()", 500);
}

function updateClock() {
    var today = new Date();
    var hours = today.getHours() % 12;
    if (hours == 0) { hours = 12; }
    var minutes = today.getMinutes();
    var timeOfDay = (today.getHours()) < 12 ? "午前" : "午後";
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var time = hours + "<span id='colon'>:</span>" + minutes + timeOfDay;
    document.getElementById('clock').innerHTML = time;
}

snes.onclick = function() {
	alert("it works");
}
genesis.onclick = function() {
	alert("it works");
}

playstation.onclick = function() {
	alert("it works");
}

n64.onclick = function() {
	alert("it works");
}

gamecube.onclick = function() {
	alert("it works");
}

gameboy.onclick = function() {
	alert("it works");
}

ds.onclick = function() {
	alert("it works");
}