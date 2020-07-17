var dollars = 45000;
var co2 = 5000;

//Dollar digits
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var num3 = document.getElementById('num3');
var num4 = document.getElementById('num4');
var num5 = document.getElementById('num5');

//CO2 digits
var co21 = document.getElementById('co21');
var co22 = document.getElementById('co22');
var co23 = document.getElementById('co23');
var co24 = document.getElementById('co24');

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function increase_dollar(){
    dollars += getRandomInt(10);
    num1.innerHTML = dollars.toString().charAt(0);
    num2.innerHTML = dollars.toString().charAt(1);
    num3.innerHTML = dollars.toString().charAt(2);
    num4.innerHTML = dollars.toString().charAt(3);
    num5.innerHTML = dollars.toString().charAt(4);
}

function increase_co2(){
    co2 += getRandomInt(10);
    co21.innerHTML = co2.toString().charAt(0);
    co22.innerHTML = co2.toString().charAt(1);
    co23.innerHTML = co2.toString().charAt(2);
    co24.innerHTML = co2.toString().charAt(3);
}

setInterval(increase_dollar, 5000);
setInterval(increase_co2, 3000);



