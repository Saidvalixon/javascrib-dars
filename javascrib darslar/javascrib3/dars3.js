// var	Said = prompt("yowingizni kiriting")
// var login = true
// if (Said >= 14 && Said <= 18) {
//     alert("Said maktabda oqidi")
// }else if(Said >= 19 && Said <= 24){
// 	alert("Said insitutda oqidi")
// }else if(Said >= 25){
// 	alert("Said uylangan")
// }
// else{
// 	alert("14 yowdan yuqori yow kiriting")
// }

// var barat = prompt("login kiriting")
// var login = true
// if (barat = barat)

// var login = prompt("login kriting")
// var password = prompt("password kriting")
// if (login == "Barat" && password == "barat8121") {
// 	alert(login + " welcome to sayt")
// }else if (login == "Saidvalikhan" && password == "_1kus_tak0y_") {
// 	alert(login + " welcome to sayt")
// }else if (login == "Ismoil" && password == "ismoil_ceek") {
// 	alert(login + " welcome to sayt")
// }else if (login == "Ulugbek" && password == "ulugbek_8888") {
// 	alert(login + " welcome to sayt")
// }else if (login == "Nizomiddin" && password == "n1zom") {
// 	alert(login + " welcome to sayt")
// }else if (login == "Jafar" && password == "_jafar_") {
// 	alert(login + " welcome to sayt")
// }
// else {
// 	alert(" login yoki password hato")
// }

var yosh = prompt('yoshingizni kiriting');
var ves = prompt('vesizi kiriting');
var boy = prompt('boyizi kiriting');
var index = ves / ((boy/100) * (boy/100));
var group;
if (yosh >= 17 && yosh <= 25){
 group = 1;
 group = 2;
} else {
 group = 3;
}
if (group == 1 && index < 17.5) {
    alert(" judayam ozgin sogliq un zararli")
 }else if (group == 1 && index >= 17.5 && index <= 19.5){
    alert(" bir oz ozginsz")
 }else if (group == 1 && index >= 19.5 && index <= 22.9) {
    alert(" normsz brat")
 }else if(group == 1 && index >= 22.9 && index <= 27.4){
    alert(" tolstiy")
 }else if(group == 1 && index >= 27.5 && index <= 29.9){
    alert(" birinci darajali semiriw ")
 }else if(group == 1 && index >= 30.0 && index <= 34.9){
    alert(" ikkinci darajali semiriw ")
 }else if(group == 1 && index >= 35 && index <= 39.9){
    alert(" uchinci darajali semiriw ")
 }else if(group == 1 && index >= 40.0 && index <= 0){
    alert(" tortinci darajali semiriw ")
 }else {
    alert  ("yowli qvosan")
 }







































