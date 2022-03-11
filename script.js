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

let mixMessage = [];

let line1 = 0;
let line2 = 0;
let line3 = 0;

let max = poeticLine1.length;

const mixMessageGenerator = () => {
    line1 = Math.floor(Math.random() * max);
    line2 = Math.floor(Math.random() * max);
    while (line2 == line1) {
        line2 = Math.floor(Math.random() * max);
    }
    line3 = Math.floor(Math.random() * max);
    while (line3 == line2 || line3 == line1) {
        line3 = Math.floor(Math.random() * max);
    }
    let x = poeticLine1[line1] + "\n" + poeticLine1[line2] + "\n" + poeticLine1[line3];
    while (mixMessage.includes(x)) {
        mixMessageGenerator()
    }
    mixMessage.push(x);
    alert(x);
}

// mixMessageGenerator();
