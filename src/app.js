//write your code here
console.log("Hello Rigo from the console!");

const choises = ["rock", "paper", "scissors", "spock", "lizard"]

const jugar = (userChoise) => {
    //un randon del choise en generador de excusas
    const computerchoises = choises [Math.floor(Math.random() * choises.length)]

    const rules = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "spock"],
        lizard: ["paper", "spock"],
        spock: ["scissors" , "rock"]

    }
    
    if (userChoise === computerchoises) {
        return "Haz empatado."; 
    }
    
    else if (rules[userChoise].includes(computerchoises)){
        return "Haz ganado."; 
    }

    else {
        return "Haz perdido";
    }

    //comparamos la seleccion del usuario contra la del computador

}

const args = process.argv.slice(2);
    const jugada = args[0];
//correr en la consola
console.log (jugar(jugada));

