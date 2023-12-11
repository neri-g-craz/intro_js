/* hola */

/* alert("Hola Mundo");*/

//console.log("Este es un mensaje para mi consola")

/*var nombre = prompt("Ingresa tu nombre");
alert("Hola "+ nombre + ", bienvienidx a la CH35");
*/
/*var numero1 = parseInt (prompt("Ingresa el primer número:"))
var numero2 = parseInt (prompt("Ingresa el segundo número:"))

console.log("suma: " + (numero1 + numero2));
console.log("resta: " + (numero1 - numero2));
console.log("multiplicación: " + (numero1 * numero2));
console.log("división: " + (numero1 / numero2));*/

/*
var edad = (prompt("Por ingresa tu edad en digitos numéricos: "));
if (edad === null || isNaN(edad));
    {alert ("Andas mal hijo, tenías que poner digitos numéricos")}; 
var edad1 = (prompt("A ver intentale de nuevo, pon tu edad en números, por favor: "));
if (edad1 === null || isNaN(edad));
{alert ("¿Estamos jugando?, ahora ya no te diré si eres o no mayor de edad")};
    if ((typeof (parseInt (edad | edad1)))=== 'number' && edad<18); {
    alert ("Eres menor de edad.")};
    if
    ((typeof (parseInt (edad | edad1)))=== 'number' && edad>=18);
    {alert ("Eres mayor de edad.")};
    */

    var edad = (prompt("Por favor, ingresa tu edad en dígitos numéricos:"));

if (isNaN(edad)) {
    alert("Andas mal, hijx. Tenías que poner dígitos numéricos.");
    var edad = prompt("A ver, inténtalo de nuevo. Pon tu edad en números, por favor:");
} 

    if (isNaN(edad)) {
        alert("¿Estamos jugando? Ahora no te diré si eres o no mayor de edad.");
    } 
    else {
        var edad1 = parseInt(edad); //al agregar un valor en parseInt(edad, 2) puedes elegir el sistema de numeración de tu preferencia.

        if (!isNaN(edad1)) {
            if (edad1 < 18) {
                alert("Eres menor de edad.");
            } else {
                alert("Eres mayor de edad.");
            }        
        }
    }





//TIPOS DE DATOS Y VARIABLES
//scope es el alcance de nuestras variables

/*var, let, const la diferencia es el alcance
var tiene un alcance global
let tiene un alcance local
const se mantiene sin nignún cambio*/

/*string: cadena de texto (lleva comillas)
number: numero
noolena: true/false
null:nulo
undefinied:no esta asigando o definido*/

/*let nombre = "Daniel";
let invitadxsExtras = 2;
let mayoriaEdad = true;
let edad = 37;
let invitadxEspecial = null;
let horaDeSalida = undefined;
*/