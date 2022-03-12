// array of poetic lines
const poeticLine1 = [
                        "Não sou nada.",
                        "Porque é tudo para sempre, mesmo a efémera morte",
                        "Eu quero levar-te comigo",
                        "E tudo isso, que é tanto, é pouco para o que eu quero",
                        "Pois tudo o que é belo é sobejo", 
                        "Porque ficou oceânico",
                        "o escasso momento de nós?", 
                        "Amar é pensar.",
                        "Promete-me que ficarás",
                        "É talvez o último dia da minha vida.",
                        "Ah! Poder ser tu, sendo eu!",
                        "Passei toda a noite, sem dormir, vendo, sem espaço, a figura dela",
                    ]
// store generated messages
let mixMessage = [];

// random number generator
let randomize = arr => {
    let i = Math.floor(Math.random() * arr.length)
    return i;
}

// function to generator and mix the poetic lines
const mixMessageGenerator = () => {
    let line1 = randomize(poeticLine1)
    let line2 = randomize(poeticLine1);
    //to avoid the same sentence twice
    while (line2 == line1) {                 
        line2 = randomize(poeticLine1);
    }
    let line3 = randomize(poeticLine1);
    while (line3 == line2 || line3 == line1) {
        line3 = randomize(poeticLine1);
    }
    let x = poeticLine1[line1] + "\n" + poeticLine1[line2] + "\n" + poeticLine1[line3];
    // to assure to always generate a new message
    while (mixMessage.includes(x)) {      //would need a function to calculate the finite combinations
        mixMessageGenerator()
    }
    mixMessage.push(x);
    alert(x);
}
