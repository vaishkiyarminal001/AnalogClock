var hr = document.querySelector("#hr");
var mn = document.querySelector("#mn");
var sc = document.querySelector("#sc");

setInterval(() =>{

var day = new Date();
var hh = day.getHours() * 30;
var mm = day.getMinutes() * 6;
var ss = day.getSeconds() * 6;

hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
sc.style.transform = `rotateZ(${ss}deg)`;

})


var hour = document.querySelector("#hour");
var minutes = document.querySelector("#minutes");
var seconds = document.querySelector("#seconds");
var ampn = document.querySelector("#ampn");

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();

var am = h >= 12 ? "PM" : "AM";

if(h > 12){
    h = h - 12;
}
h = (h < 10) ? "0" + h : h
m = (m < 10) ? "0" + m : m
s = (s < 10) ? "0" + s : s

hour.innerHTML = h;
minutes.innerHTML = m;
seconds.innerHTML = s;
ampn.innerHTML = am;
