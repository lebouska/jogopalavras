const main = document.querySelector('#main')
const formPlace = document.querySelector('form');
const letterSelection = document.querySelector('.letterSelection');
const typeSelection = document.querySelector('.typeSelection');
const gameSelection = document.querySelector('.gameSelection');
const startButton = document.querySelector('#start');
const qntPoints = document.querySelector('#qntPoints');

const makeWords = (function () {
    let wordBank = [];

    class Word{
        constructor(word, syllables, img){
            this.word = word;
            this.syllables = syllables;
            this.img = img;
        }
    }

    const getWords = () => {
        return wordBank;
    }

    const addWord = (word, syllables, img) => {
        const words = new Word (word,syllables, img);
        wordBank.push(words);
    }

    addWord("ABELHA",["A","BE","LHA"],"./images/abelha.png");
    addWord("ABÓBORA",["A","BO","BO","RA"],"./images/abobora.png");
    addWord("ANEL",["A","NEL"],"./images/anel.png");
    addWord("ÁRVORE",["ÁR","VO","RE"],"./images/arvore.png");
    addWord("ARCO",["AR","CO"],"./images/arco.png");
    addWord("AVIÃO",["A","VI","ÃO"],"./images/aviao.png");
    addWord("ARANHA",["A","RA","NHA"],"./images/aranha.png");
    addWord("ABAJUR",["A","BA","JUR"],"./images/abajur.png");
    addWord("ALICATE",["A","LI","CA","TE"],"./images/alicate.png");
    addWord("ABACAXI",["A","BA","CA","XI"],"./images/abacaxi.png");
    addWord("AGULHA",["A","GU","LHA"],"./images/agulha.png");
    addWord("ASTRONALTA",["AS","TRO","NAU","TA"],"./images/astronalta.png");
    addWord("AVÓ",["A","VÓ"],"./images/avo.png");
    addWord("AVÔ",["A","VÔ"],"./images/avo2.png");
    addWord("ÁGUA",["Á","GUA"],"./images/agua.png");
    addWord("ALHO",["A","LHO"],"./images/alho.png");
    addWord("ALVO",["AL","VO"],"./images/alvo.png");
    addWord("ANJO",["AN","JO"],"./images/anjo.png");
    addWord("ARMÁRIO",["AR","MÁ","RIO"],"./images/armario.png");
    addWord("ASA",["A","SA"],"./images/asa.png");
    addWord("ABACATE",["A","BA","CA","TE"],"./images/abacate.png");
    addWord("APONTADOR",["A","PONT","TA","DOR"],"./images/apontador.png");

    return {getWords}
})();

const makeForm = (function () {
    startButton.addEventListener('click', () => makeInfo());

    const info = [];

    const changeColor = (letter) => {
        if (letter.className == "selected") {
            letter.classList.remove("selected")
        } else {
            letter.className = "selected"
        }
    }

    const addButton = (text, place) => {
        const button = document.createElement('div');
        button.textContent = text;
        button.addEventListener('click', function(event) {
            changeColor(button);
        })
        place.appendChild(button);
    }

    const makeButton = (function () {
        for (let i = 65; i < 87; i++) {
            if (i !== 75){
                addButton(String.fromCharCode(i), letterSelection);
            }
        }

        addButton("Maiúscula", typeSelection);
        addButton("Minúscula", typeSelection);
        addButton("Letra inicial", gameSelection);
        addButton("Sílaba inicial", gameSelection);
        addButton("Juntar sílabas", gameSelection);
        addButton("Desembaralhar letras", gameSelection);
        addButton("Forca", gameSelection);
    })();

    const makeInfo = () => {
        const letters = [];

        letterSelection.childNodes.forEach((element) => {
            if (element.className == "selected") {
                letters.push(element.textContent);
            }
        })
        info[0] = letters;

        const type = [];
        typeSelection.childNodes.forEach((element) => {
            if (element.className == "selected") {
                type.push(element.textContent);
            }
        })
        info[1] = type;

        const game = [];
        gameSelection.childNodes.forEach((element) => {
            if (element.className == "selected") {
                game.push(element.textContent);
            }
        })
        info[2] = game;

        if (qntPoints.value == "") {
            info[3] = "1";
        } else {
            info[3] = qntPoints.value;
        }
        

        if (info[0].length !== 0 && info[1].length !== 0 && info[2].length !== 0) {
            gameController();
        }
    }

    const getInfo = () => {
        return info;
    }

    return {getInfo}
})();

const gameController = () => {
    let allWords = makeWords.getWords();
    const info = makeForm.getInfo();
    const usedLetters = info[0];
    const letterType = info[1];
    const usedGames = info[2];
    const changeGamesAt = info[3];

    let gameArray = usedGames;
    let gameCounter = 1;

    let thisGame = "";

    let totalPoints = 0;

    const selectWords = (value) => {
        for (let i = 0; i < usedLetters.length ; i++) {
            if (value.word.charAt(0) === usedLetters[i]) {
                return true;
            }
        } 
        return false;
    }

    let usableWords = allWords.filter(selectWords);


    const transformText = (text) => {
        if (letterType.length == "2") {
            return [text, text.toLowerCase()];
        } else if (letterType[0] == "Maiúscula") {
            return [text];
        } else if (letterType[0] == "Minúscula") {
            return [text.toLowerCase()];
        }
    };

    const choseGame = () => {
        if (gameCounter === +changeGamesAt) {
            let game = gameArray[0];
            gameArray.shift();
            gameArray.push(game);
            gameCounter = 1;
            return gameArray[gameArray.length - 1];
        } else {
            gameCounter += 1;
            return gameArray[0];

        }

    }

    const givePoints = () => {
        totalPoints +=1;
    }

    const playRound = () => {
        thisGame = choseGame();
        main.textContent = "";

        switch (thisGame) {
            case "Letra inicial": {
                makeLetra();
                break;
            }
            case "Sílaba inicial": {

                break;
            } 
            case "Juntar sílabas": {

                break;
            }
            case "Desembaralhar letras" : {

                break;
            }
            case "Forca": {

                break;
            }
        }
    }

    const selectWord = () => {
        return Math.floor(Math.random() * usableWords.length);
    }

    const deleteWord = (word) => {
        console.log(usableWords);
        usableWords = usableWords.filter(value => value != word)
    }


    const makeLetra = () => {
        const word = usableWords[selectWord()];
        console.log(word);
        const letter = word.word.slice(0, 1);
    
        const letraGame = document.createElement('div')
        const question = document.createElement('div')
        const imgNWord = document.createElement('div')
        const options = document.createElement('div')
        const points = document.createElement('div')

        imgNWord.className = "help"
        options.className = "buttons"
        question.className = "questionLetra";
        letraGame.id = "letraGame";

        const questionText = transformText("QUAL É A LETRA INICIAL?")

        for (let i = 0; i < questionText.length;  i++){
            const questionTEXT = document.createElement('div');
            questionTEXT.textContent = questionText[i];
            question.appendChild(questionTEXT);
        }
        letraGame.appendChild(question);


        const img = document.createElement('img')
        img.src = word.img
        imgNWord.appendChild(img)

        const pieceWord = transformText("__" + word.word.slice(1));
    
        for (let i = 0; i < pieceWord.length;  i++){
            const tip = document.createElement('div');
            tip.textContent = pieceWord[i];
            imgNWord.appendChild(tip);
        }
        letraGame.appendChild(imgNWord);

        let consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];

        const removeConsonant = (letter) => {
            consonants = consonants.filter(value => value != letter);
        }

        const getConsonant = () => {
            let letter = consonants[Math.floor(Math.random() * consonants.length + 1)];
            removeConsonant(letter);
            return letter;
        }


        let createButton = (letter, boolean) => {
            const button = document.createElement('div')
            const buttonText = transformText(letter)
            for (let i = 0; i < buttonText.length;  i++){
                const value = document.createElement('div');
                value.textContent = buttonText[i];
                button.appendChild(value);
            }
            if (boolean == true) {
                button.addEventListener('click', function(event) {
                    givePoints();
                    deleteWord(word);
                    playRound();
                })
            } else {
                button.addEventListener('click', function(event) {
                    button.className = "wrong";
                })
            }
            options.appendChild(button);
        }

        if (letter == "A" || letter == "E" || letter == "I" || letter == "O" || letter == "U" ) {
            createButton("A", letter == "A");
            createButton("E", letter == "E");
            createButton("I", letter == "I");
            createButton("O", letter == "O");
            createButton("U", letter == "U");
        } else {
            let buttonsValue = []
            buttonsValue.push(letter);
            removeConsonant(letter);
            buttonsValue.push(getConsonant());
            buttonsValue.push(getConsonant());
            buttonsValue.push(getConsonant());
            buttonsValue.push(getConsonant());
            buttonsValue = buttonsValue.sort();
            createButton(buttonsValue[0], letter == buttonsValue[0]);
            createButton(buttonsValue[1], letter == buttonsValue[1]);
            createButton(buttonsValue[2], letter == buttonsValue[2]);
            createButton(buttonsValue[3], letter == buttonsValue[3]);
            createButton(buttonsValue[4], letter == buttonsValue[4]);
        }
        letraGame.appendChild(options)

        const pontos = document.createElement('div');
        pontos.textContent = totalPoints + " PONTOS";
        points.appendChild(pontos);

        points.id = "points";
        letraGame.appendChild(points);

        main.appendChild(letraGame);

    }

    playRound();
}
