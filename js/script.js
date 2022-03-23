// MermaidJS

// graph TD
// I[Mi chiedo se usare const o let per definire la variabile]--> A 
// A[Chiedo il nome] --> B[Chiedo il cognome]
// B --> C[Chiedo il colore preferito]
// C --> D[Verifico che sia tutto giusto tramite l'inspector]
// D -->|giusto| E[Procedo stampando sulla pagina nome,cognome,colore preferito e 21]
// D -->|sbagliato| F[controllo quale può essere il problema]
// F --> G[risolvo il problema]
// G --> E 
// E --> H[Fine]  



let userName = prompt('Come ti chiami?');
console.log(userName);

let userSurname = prompt ("Qual'è il tuo cognome?");
console.log(userSurname);

let colour = prompt("Qual'è il tuo colore preferito?");
console.log(colour);

document.getElementById('password').innerHTML =  userName + userSurname + colour + 21;