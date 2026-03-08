var weddingDate = new Date("Dec 20, 2026 10:30:00").getTime();

var x = setInterval(function(){

var now = new Date().getTime();
var distance = weddingDate - now;

var days = Math.floor(distance / (1000*60*60*24));
var hours = Math.floor((distance % (1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((distance % (1000*60*60))/(1000*60));

document.getElementById("timer").innerHTML =
days + " Days " + hours + " Hours " + minutes + " Minutes ";

},1000);