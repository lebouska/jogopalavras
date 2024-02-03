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
    addWord("ASTRONAUTA",["AS","TRO","NAU","TA"],"./images/astronauta.png");
    addWord("ÁGUA",["Á","GUA"],"./images/agua.png");
    addWord("ARARA",["A","RA","RA"],"./images/arara.png");
    addWord("ALHO",["A","LHO"],"./images/alho.png");
    addWord("ALVO",["AL","VO"],"./images/alvo.png");
    addWord("ANJO",["AN","JO"],"./images/anjo.png");
    addWord("ARMÁRIO",["AR","MÁ","RIO"],"./images/armario.png");
    addWord("ASA",["A","SA"],"./images/asa.png");
    addWord("ABACATE",["A","BA","CA","TE"],"./images/abacate.png");
    addWord("APONTADOR",["A","PONT","TA","DOR"],"./images/apontador.png");
    addWord("ABRAÇO", ["A","BRA","ÇO"],"./images/abraco.png");
    addWord("ABRIDOR", ["A","BRI","DOR"],"./images/abridor.png");
    addWord("AZEITE",["A","ZEI","TE"],"./images/azeite.png");
    addWord("AÇÚCAR",["A","ÇÚ","CAR"],"./images/acucar.png");
    addWord("ADULTO",["A","DUL","TO"],"./images/adulto.png");
    addWord("AFRICA",["A","FRI","CA"],"./images/africa.png");
    addWord("AGASALHO",["A","GA","SA","LHO"],"./images/agasalho.png");
    addWord("AGENDA",["A","GEN","DA"],"./images/agenda.png");
    addWord("ÁGUIA",["Á","GUI","A"],"./images/aguia.png");
    addWord("ÁLBUM",["ÁL","BUM"],"./images/album.png");
    addWord("ALÇA",["AL","ÇA"],"./images/alca.png");
    addWord("ALFABETO",["AL","FA","BE","TO"],"./images/alfabeto.png");
    addWord("ALFACE",["AL","FA","CE"],"./images/alface.png");
    addWord("ALGEMA",["AL","GE","MA"],"./images/algema.png");
    addWord("ALGODÃO",["AL","GO","DÃO"],"./images/algodao.png");
    addWord("ALMOÇO",["AL","MO","ÇO"],"./images/almoco.png");
    addWord("ALMOFADA",["AL","MO","FA","DA"],"./images/almofada.png");
    addWord("AMARELO",["A","MA","RE","LO"],"./images/amarelo.png");
    addWord("AMBULÂNCIA",["AM","BU","LÂN","CI","A"],"./images/ambulancia.png");
    addWord("AMENDOIM",["A","MEN","DO","IM"],"./images/amendoim.png");
    addWord("AMPULHETA",["AM","PU","LHE","TA"],"./images/ampulheta.png");
    addWord("ÂNCORA",["ÂN","CO","RA"],"./images/ancora.png");
    addWord("ANZOL",["AN","ZOL"],"./images/anzol.png");
    addWord("APAGADOR",["A","PA","GA","DOR"],"./images/apagador.png");
    addWord("APARELHO",["A","PA","RE","LHO"],"./images/aparelho.png");
    addWord("APITO",["A","PI","TO"],"./images/apito.png");
    addWord("AQUÁRIO",["A","QUA","RIO"],"./images/aquario.png");
    addWord("ARAME",["A","RA","ME"],"./images/arame.png");
    addWord("ARCA",["AR","CA"],"./images/arca.png");
    addWord("ARCO-ÍRIS",["AR","CO","-","Í","RIS"],"./images/arco-iris.png");
    addWord("AREIA",["A","REI","A"],"./images/areia.png");
    addWord("ASPIRADOR",["AS","PI","RA","DOR"],"./images/aspirador.png");
    addWord("AVENTAL",["A","VEN","TAL"],"./images/avental.png");
    addWord("AVESTRUZ",["A","VES","TRUZ"],"./images/avestruz.png");
    addWord("AZEITONA",["A","ZEI","TO","NA"],"./images/azeitona.png");
    addWord("AZUL",["A","ZUL"],"./images/azul.png");
    addWord("AZULEJO",["A","ZU","LE","JO"],"./images/azulejo.png");
    addWord("AURORA",["AU","RO","RA"],"./images/aurora.png");
    addWord("ALICE",["A","LI","CE"],"./images/alice.png");
    addWord("ALADDIN",["A","LAD","DIN"],"./images/aladdin.png");
    addWord("ANNA",["AN","NA"],"./images/anna.png");

    addWord("ELÁSTICO",["E","LÁS","TI","CO"],"./images/elastico.png");
    addWord("ELEFANTE",["E","LE","FAN","TE"],"./images/elefante.png");
    addWord("ELEVADOR",["E","LE","VA", "DOR"],"./images/elevador.png");
    addWord("ENFEITE",["EN","FEI","TE"],"./images/enfeite.png");
    addWord("ENFERMEIRA",["EN","FER","MEI","RA"],"./images/enfermeira.png");
    addWord("ENGRENAGEM",["EN","GRE","NA","GEM"],"./images/engrenagem.png");
    addWord("ENGUIA",["EN","GUI","A"],"./images/enguia.png");
    addWord("ENXADA",["EN","XA","DA"],"./images/enxada.png");
    addWord("ERVILHA",["ER","VI","LHA"],"./images/ervilha.png");
    addWord("ESCADA",["ES","CA","DA"],"./images/escada.png");
    addWord("ESCAMA",["ES","CA","MA"],"./images/escama.png");
    addWord("ESCAVADEIRA",["ES","CA","VA","DEI","RA"],"./images/escavadeira.png");
    addWord("ESCORPIÃO",["ES","COR","PI","ÃO"],"./images/escorpiao.png");
    addWord("ESCOLA",["ES","CO","LA"],"./images/escola.png")
    addWord("ESCOVA",["ES","CO","VA"],"./images/escova.png");
    addWord("ESCORREDOR",["ES","COR","RE","DOR"],"./images/escorredor.png");
    addWord("ESCORREGADOR",["ES","COR","RE","GA","DOR"],"./images/escorregador.png");
    addWord("ESCUDO",["ES","CU","DO"],"./images/escudo.png");
    addWord("ESFREGÃO",["ES","FRE","GÃO"],"./images/esfregao.png");
    addWord("ESMERALDA",["ES","ME","RAL","DA"],"./images/esmeralda.png");
    addWord("ESPADA",["ES","PA","DA"],"./images/espada.png");
    addWord("ESPANADOR",["ES","PA","NA","DOR"],"./images/espanador.png");
    addWord("ESPAGUETE",["ES","PA","GUE","TE"],"./images/espaguete.png");
    addWord("ESPATULA",["ES","PA","TU","LA"],"./images/espatula.png");
    addWord("ESPELHO",["ES","PE","LHO"],"./images/espelho.png");
    addWord("ESPETO",["ES","PE","TO"],"./images/espeto.png");
    addWord("ESPINAFRE",["ES","PI","NA","FRE"],"./images/espinafre.png");
    addWord("ESPONJA",["ES","PON","JA"],"./images/esponja.png");
    addWord("ESPREMEDOR",["ES","PRE","ME","DOR"],"./images/espremedor.png");
    addWord("ESPUMA",["ES","PU","MA"],"./images/espuma.png");
    addWord("ESPUMA",["ES","QUE","LE","TO"],"./images/esqueleto.png");
    addWord("ESQUILO",["ES","QUI","LO"],"./images/esquilo.png");
    addWord("ESQUIMÓ",["ES","QUI","MÓ"],"./images/esquimo.png");
    addWord("ESTÁDIO",["ES","TÁ","DIO"],"./images/estadio.png");
    addWord("ESTÁTUA",["ES","TÁ","TUA"],"./images/estatua.png");
    addWord("ESTEIRA",["ES","TEI","RA"],"./images/esteira.png");
    addWord("ESTILETE",["ES","TI","LE","TE"],"./images/estilete.png");
    addWord("ESTILINGUE",["ES","TI","LIN","GUE"],"./images/estilingue.png");
    addWord("ESTIQUETA",["E","TI","QUE","TA"],"./images/etiqueta.png");
    addWord("ESTOJO",["ES","TO","JO"],"./images/estojo.png");
    addWord("ESTRELA",["ES","TRE","LA"],"./images/estrela.png");
    addWord("ENVELOPE",["EN","VE","LO","PE"],"./images/envelope.png");
    addWord("ESMALTE",["ES","MAL","TE"],"./images/esmalte.png");
    addWord("ESPANTALHO",["ES","PAN","TA","LHO"],"./images/espantalho.png");
    addWord("EXTINTOR",["EX","TIN","TOR"],"./images/extintor.png");
    addWord("ELMO",["EL","MO"],"./images/elmo.png");
    addWord("EMÍLIA",["E","MÍ","LI","A"],"./images/emilia.png");
    addWord("ELSA",["EL","SA"],"./images/elsa.png");

    addWord("IARA",["I","A","RA"],"./images/iara.png");
    addWord("IDENTIDADE",["I","DEN","TI","DA","DE"],"./images/identidade.png");
    addWord("IDOSOS",["I","DO","SOS"],"./images/idosos.png");
    addWord("IGLU",["I","GLU"],"./images/iglu.png");
    addWord("IGREJA",["I","GRE","JA"],"./images/igreja.png");
    addWord("IGUANA",["I","GUA","NA"],"./images/iguana.png");
    addWord("ILHA",["I","LHA"],"./images/ilha.png");
    addWord("ÍMÃ",["Í","MÃ"],"./images/ima.png");
    addWord("IMPRESSORA",["IM","PRES","SO","RA"],"./images/impressora.png");
    addWord("IOIÔ",["IO","IÔ"],"./images/ioio.png");
    addWord("INCENSO",["ÍN","CEN","SO"],"./images/incenso.png");
    addWord("ÍNDIO",["ÍN","DI","O"],"./images/indio.png");
    addWord("INGRESSO",["IN","GRES","SO"],"./images/ingresso.png");
    addWord("INJEÇÃO",["IN","JE","ÇÃO"],"./images/injecao.png");
    addWord("INSETOS",["IN","SE","TOS"],"./images/insetos.png");
    addWord("INSTRUMENTOS",["INS","TRU","MEN","TOS"],"./images/instrumentos.png");
    addWord("INTERFONE",["IN","TER","FO","NE"],"./images/interfone.png");
    addWord("IPÊ",["I","PÊ"],"./images/ipe.png");
    addWord("IRRIGADOR",["IR","RI","GA","DOR"],"./images/irrigador.png");
    addWord("IRMÃOS",["IR","MÃO"],"./images/irmaos.png");
    addWord("IRMÃS",["IR","MÃ"],"./images/irmas.png");
    addWord("ISCA",["IS","CA"],"./images/isca.png");
    addWord("ISOLANTE",["I","SO","LAN","TE"],"./images/isolante.png");
    addWord("ISQUEIRO",["IS","QUEI","RO"],"./images/isqueiro.png");
    addWord("INTERNET",["IN","TER","NET"],"./images/internet.png");
    addWord("IOGURTE",["I","O","GUR","TE"],"./images/iogurte.png");
    addWord("IATE",["I","A","TE"],"./images/iate.png");
    addWord("ISOPOR",["I","SO","POR"],"./images/isopor.png");

    addWord("OLAF",["O","LAF"],"./images/olaf.png");
    addWord("OÁSIS",["O","Á","SIS"],"./images/oasis.png");
    addWord("OVO",["O","VO"],"./images/ovo.png");
    addWord("OCA",["O","CA"],"./images/oca.png");
    addWord("OCEANO",["O","CE","A","NO"],"./images/oceano.png");
    addWord("OVELHA",["O","VE","LHA"],"./images/ovelha.png");
    addWord("ÔNIBUS",["Ô","NI","BUS"],"./images/onibus.png");
    addWord("OITO",["OI","TO"],"./images/oito.png");
    addWord("ÓCULOS",["Ó","CU","LOS"],"./images/oculos.png");
    addWord("ORELHA",["O","RE","LHA"],"./images/orelha.png");
    addWord("OLHO",["O","LHO"],"./images/olho.png");
    addWord("ONÇA",["ON","ÇA"],"./images/onca.png");
    addWord("OURO",["OU","RO"],"./images/ouro.png");
    addWord("ONDA",["ON","DA"],"./images/onda.png");
    addWord("OGRO",["O","GRO"],"./images/ogro.png");
    addWord("OMBRO",["OM","BRO"],"./images/ombro.png");
    addWord("OMELETE",["O","ME","LE","TE"],"./images/omelete.png");
    addWord("ORAÇÃO",["O","RA","ÇÃO"],"./images/oracao.png");
    addWord("ORCA",["OR","CA"],"./images/orca.png");
    addWord("ORELHÃO",["O","RE","LHÃO"],"./images/orelhao.png");
    addWord("ORIGAMI",["O","RI","GA","MI"],"./images/origami.png");
    addWord("OSTRA",["OS","TRA"],"./images/ostra.png");
    addWord("OSSO",["OS","SO"],"./images/osso.png");
    
    addWord("UVA",["U","VA"],"./images/uva.png");
    addWord("URSO",["UR","SO"],"./images/urso.png");
    addWord("UM",["UM"],"./images/um.png");
    addWord("UMBIGO",["UM","BI","GO"],"./images/umbigo.png");
    addWord("URUBU",["U","RU","BU"],"./images/urubu.png");
    addWord("ULTRASSOM",["UL","TRAS","SOM"],"./images/ultrassom.png");
    addWord("UNHA",["U","NHA"],"./images/unha.png");
    addWord("UNO",["U","NO"],"./images/uno.png");
    addWord("UNICÓRNIO",["U","NI","CÓR","NI","O"],"./images/unicornio.png");
    addWord("UNIFORME",["U","NI","FOR","ME"],"./images/uniforme.png");
    addWord("UNIVERSO",["U","NI","VER","SO"],"./images/universo.png");
    addWord("USINA",["U","SI","NA"],"./images/usina.png");
    addWord("URNA",["UR","NA"],"./images/urna.png");



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
        usableWords = usableWords.filter(value => value != word)
    }


    const makeLetra = () => {
        const word = usableWords[selectWord()];
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
