let userName = prompt('Come ti chiami?');
console.log(userName);

let userSurname = prompt ("Qual'è il tuo cognome?");
console.log(userSurname);

let colour = prompt("Qual'è il tuo colore preferito?");
console.log(colour);

document.getElementById('password').innerHTML =  userName + userSurname + colour + 21;