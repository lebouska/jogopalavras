const main = document.querySelector('#main')
const formPlace = document.querySelector('form');
const letterSelection = document.querySelector('.letterSelection');
const typeSelection = document.querySelector('.typeSelection');
const gameSelection = document.querySelector('.gameSelection');
const removeSelection = document.querySelector('.removeSelection');
const startButton = document.querySelector('#start');
const qntPoints = document.querySelector('#qntPoints');


const makeWords = (function () {
    let wordBank = [];

    class Word{
        constructor(word, syllables, img, audio){
            this.word = word;
            this.syllables = syllables;
            this.img = img;
            this.audio = audio
        }
    }

    const getWords = () => {
        return wordBank;
    }

    const addWord = (word, syllables, img, audio) => {
        const words = new Word (word, syllables, img, audio);
        wordBank.push(words);
    }

    addWord("ABELHA",["A","BE","LHA"],"./images/abelha.png","./audio/abelha.mp3");
    addWord("ABÓBORA",["A","BO","BO","RA"],"./images/abobora.png","./audio/abobora.mp3");
    addWord("ANEL",["A","NEL"],"./images/anel.png","./audio/anel.mp3");
    addWord("ÁRVORE",["ÁR","VO","RE"],"./images/arvore.png","./audio/arvore.mp3");
    addWord("ARCO",["AR","CO"],"./images/arco.png","./audio/arco.mp3");
    addWord("AVIÃO",["A","VI","ÃO"],"./images/aviao.png","./audio/aviao.mp3");
    addWord("ARANHA",["A","RA","NHA"],"./images/aranha.png","./audio/aranha.mp3");
    addWord("ABAJUR",["A","BA","JUR"],"./images/abajur.png","./audio/abajur.mp3");
    addWord("ALICATE",["A","LI","CA","TE"],"./images/alicate.png","./audio/alicate.mp3");
    addWord("ABACAXI",["A","BA","CA","XI"],"./images/abacaxi.png","./audio/abacaxi.mp3");
    addWord("AGULHA",["A","GU","LHA"],"./images/agulha.png","./audio/agulha.mp3");
    addWord("ASTRONAUTA",["AS","TRO","NAU","TA"],"./images/astronauta.png","./audio/astronauta.mp3");
    addWord("ÁGUA",["Á","GUA"],"./images/agua.png","./audio/agua.mp3");
    addWord("ARARA",["A","RA","RA"],"./images/arara.png","./audio/arara.mp3");
    addWord("ALHO",["A","LHO"],"./images/alho.png","./audio/alho.mp3");
    addWord("ALVO",["AL","VO"],"./images/alvo.png","./audio/alvo.mp3");
    addWord("ANJO",["AN","JO"],"./images/anjo.png","./audio/anjo.mp3");
    addWord("ARMÁRIO",["AR","MÁ","RIO"],"./images/armario.png","./audio/armario.mp3");
    addWord("ASA",["A","SA"],"./images/asa.png","./audio/asa.mp3");
    addWord("ABACATE",["A","BA","CA","TE"],"./images/abacate.png","./audio/abacate.mp3");
    addWord("APONTADOR",["A","PON","TA","DOR"],"./images/apontador.png","./audio/apontador.mp3");
    addWord("ABRAÇO", ["A","BRA","ÇO"],"./images/abraco.png","./audio/abraco.mp3");
    addWord("ABRIDOR", ["A","BRI","DOR"],"./images/abridor.png","./audio/abridor.mp3");
    addWord("AZEITE",["A","ZEI","TE"],"./images/azeite.png","./audio/azeite.mp3");
    addWord("AÇÚCAR",["A","ÇÚ","CAR"],"./images/acucar.png","./audio/acucar.mp3");
    addWord("ADULTO",["A","DUL","TO"],"./images/adulto.png","./audio/adulto.mp3");
    addWord("AFRICA",["A","FRI","CA"],"./images/africa.png","./audio/africa.mp3");
    addWord("AGASALHO",["A","GA","SA","LHO"],"./images/agasalho.png","./audio/agasalho.mp3");
    addWord("AGENDA",["A","GEN","DA"],"./images/agenda.png","./audio/agenda.mp3");
    addWord("ÁGUIA",["Á","GUI","A"],"./images/aguia.png","./audio/aguia.mp3");
    addWord("ÁLBUM",["ÁL","BUM"],"./images/album.png","./audio/album.mp3");
    addWord("ALÇA",["AL","ÇA"],"./images/alca.png","./audio/aca.mp3");
    addWord("ALFABETO",["AL","FA","BE","TO"],"./images/alfabeto.png","./audio/alfabeto.mp3");
    addWord("ALFACE",["AL","FA","CE"],"./images/alface.png","./audio/alface.mp3");
    addWord("ALGEMA",["AL","GE","MA"],"./images/algema.png","./audio/algema.mp3");
    addWord("ALGODÃO",["AL","GO","DÃO"],"./images/algodao.png","./audio/algodao.mp3");
    addWord("ALMOÇO",["AL","MO","ÇO"],"./images/almoco.png","./audio/almoco.mp3");
    addWord("ALMOFADA",["AL","MO","FA","DA"],"./images/almofada.png","./audio/almofada.mp3");
    addWord("AMARELO",["A","MA","RE","LO"],"./images/amarelo.png","./audio/amarelo.mp3");
    addWord("AMBULÂNCIA",["AM","BU","LÂN","CI","A"],"./images/ambulancia.png","./audio/abmbulancia.mp3");
    addWord("AMENDOIM",["A","MEN","DO","IM"],"./images/amendoim.png","./audio/amendoim.mp3");
    addWord("AMPULHETA",["AM","PU","LHE","TA"],"./images/ampulheta.png","./audio/ampulheta.mp3");
    addWord("ÂNCORA",["ÂN","CO","RA"],"./images/ancora.png","./audio/ancora.mp3");
    addWord("ANZOL",["AN","ZOL"],"./images/anzol.png","./audio/anzol.mp3");
    addWord("APAGADOR",["A","PA","GA","DOR"],"./images/apagador.png","./audio/apagador.mp3");
    addWord("APARELHO",["A","PA","RE","LHO"],"./images/aparelho.png","./audio/aparelho.mp3");
    addWord("APITO",["A","PI","TO"],"./images/apito.png","./audio/apito.mp3");
    addWord("AQUÁRIO",["A","QUA","RIO"],"./images/aquario.png","./audio/aquario.mp3");
    addWord("ARAME",["A","RA","ME"],"./images/arame.png","./audio/arame.mp3");
    addWord("ARCA",["AR","CA"],"./images/arca.png","./audio/arca.mp3");
    addWord("ARCO-ÍRIS",["AR","CO","-","Í","RIS"],"./images/arco-iris.png","./audio/arco-iris.mp3");
    addWord("AREIA",["A","REI","A"],"./images/areia.png","./audio/areia.mp3");
    addWord("ASPIRADOR",["AS","PI","RA","DOR"],"./images/aspirador.png","./audio/aspirador.mp3");
    addWord("AVENTAL",["A","VEN","TAL"],"./images/avental.png","./audio/avental.mp3");
    addWord("AVESTRUZ",["A","VES","TRUZ"],"./images/avestruz.png","./audio/avestruz.mp3");
    addWord("AZEITONA",["A","ZEI","TO","NA"],"./images/azeitona.png","./audio/azeitona.mp3");
    addWord("AZUL",["A","ZUL"],"./images/azul.png","./audio/azul.mp3");
    addWord("AZULEJO",["A","ZU","LE","JO"],"./images/azulejo.png","./audio/azulejo.mp3");
    addWord("AURORA",["AU","RO","RA"],"./images/aurora.png","./audio/aurora.mp3");
    addWord("ALICE",["A","LI","CE"],"./images/alice.png","./audio/alice.mp3");
    addWord("ALADDIN",["A","LAD","DIN"],"./images/aladdin.png","./audio/aladdin.mp3");
    addWord("ANNA",["AN","NA"],"./images/anna.png","./audio/anna.mp3");

    addWord("ELÁSTICO",["E","LÁS","TI","CO"],"./images/elastico.png","./audio/elastico.mp3");
    addWord("ELEFANTE",["E","LE","FAN","TE"],"./images/elefante.png","./audio/elefante.mp3");
    addWord("ELEVADOR",["E","LE","VA", "DOR"],"./images/elevador.png","./audio/elevador.mp3");
    addWord("ENFEITE",["EN","FEI","TE"],"./images/enfeite.png","./audio/enfeite.mp3");
    addWord("ENFERMEIRA",["EN","FER","MEI","RA"],"./images/enfermeira.png","./audio/enfermeira.mp3");
    addWord("ENGRENAGEM",["EN","GRE","NA","GEM"],"./images/engrenagem.png","./audio/engrenagem.mp3");
    addWord("ENGUIA",["EN","GUI","A"],"./images/enguia.png","./audio/enguia.mp3");
    addWord("ENXADA",["EN","XA","DA"],"./images/enxada.png","./audio/enxada.mp3");
    addWord("ERVILHA",["ER","VI","LHA"],"./images/ervilha.png","./audio/ervilha.mp3");
    addWord("ESCADA",["ES","CA","DA"],"./images/escada.png","./audio/escada.mp3");
    addWord("ESCAMA",["ES","CA","MA"],"./images/escama.png","./audio/escama.mp3");
    addWord("ESCAVADEIRA",["ES","CA","VA","DEI","RA"],"./images/escavadeira.png","./audio/escavadeira.mp3");
    addWord("ESCORPIÃO",["ES","COR","PI","ÃO"],"./images/escorpiao.png","./audio/escorpiao.mp3");
    addWord("ESCOLA",["ES","CO","LA"],"./images/escola.png","./audio/escola.mp3")
    addWord("ESCOVA",["ES","CO","VA"],"./images/escova.png","./audio/escova.mp3");
    addWord("ESCORREDOR",["ES","COR","RE","DOR"],"./images/escorredor.png","./audio/escorredor.mp3");
    addWord("ESCORREGADOR",["ES","COR","RE","GA","DOR"],"./images/escorregador.png","./audio/escorregador.mp3");
    addWord("ESCUDO",["ES","CU","DO"],"./images/escudo.png","./audio/escudo.mp3");
    addWord("ESFREGÃO",["ES","FRE","GÃO"],"./images/esfregao.png","./audio/esfregao.mp3");
    addWord("ESMERALDA",["ES","ME","RAL","DA"],"./images/esmeralda.png","./audio/esmeralda.mp3");
    addWord("ESPADA",["ES","PA","DA"],"./images/espada.png","./audio/espada.mp3");
    addWord("ESPANADOR",["ES","PA","NA","DOR"],"./images/espanador.png","./audio/espanador.mp3");
    addWord("ESPAGUETE",["ES","PA","GUE","TE"],"./images/espaguete.png","./audio/espaguete.mp3");
    addWord("ESPATULA",["ES","PA","TU","LA"],"./images/espatula.png","./audio/espatula.mp3");
    addWord("ESPELHO",["ES","PE","LHO"],"./images/espelho.png","./audio/espelho.mp3");
    addWord("ESPETO",["ES","PE","TO"],"./images/espeto.png","./audio/espeto.mp3");
    addWord("ESPINAFRE",["ES","PI","NA","FRE"],"./images/espinafre.png","./audio/espinafre.mp3");
    addWord("ESPONJA",["ES","PON","JA"],"./images/esponja.png","./audio/esponja.mp3");
    addWord("ESPREMEDOR",["ES","PRE","ME","DOR"],"./images/espremedor.png","./audio/espremedor.mp3");
    addWord("ESPUMA",["ES","PU","MA"],"./images/espuma.png","./audio/espuma.mp3");
    addWord("ESQUELETO",["ES","QUE","LE","TO"],"./images/esqueleto.png","./audio/esqueleto.mp3");
    addWord("ESQUILO",["ES","QUI","LO"],"./images/esquilo.png","./audio/esquilo.mp3");
    addWord("ESQUIMÓ",["ES","QUI","MÓ"],"./images/esquimo.png","./audio/esquimo.mp3");
    addWord("ESTÁDIO",["ES","TÁ","DIO"],"./images/estadio.png","./audio/estadio.mp3");
    addWord("ESTÁTUA",["ES","TÁ","TUA"],"./images/estatua.png","./audio/estatua.mp3");
    addWord("ESTEIRA",["ES","TEI","RA"],"./images/esteira.png","./audio/esteira.mp3");
    addWord("ESTILETE",["ES","TI","LE","TE"],"./images/estilete.png","./audio/estilete.mp3");
    addWord("ESTILINGUE",["ES","TI","LIN","GUE"],"./images/estilingue.png","./audio/estilingue.mp3");
    addWord("ETIQUETA",["E","TI","QUE","TA"],"./images/etiqueta.png","./audio/etiqueta.mp3");
    addWord("ESTOJO",["ES","TO","JO"],"./images/estojo.png","./audio/estojo.mp3");
    addWord("ESTRELA",["ES","TRE","LA"],"./images/estrela.png","./audio/estrela.mp3");
    addWord("ENVELOPE",["EN","VE","LO","PE"],"./images/envelope.png","./audio/envelope.mp3");
    addWord("ESMALTE",["ES","MAL","TE"],"./images/esmalte.png","./audio/esmalte.mp3");
    addWord("ESPANTALHO",["ES","PAN","TA","LHO"],"./images/espantalho.png","./audio/espantalho.mp3");
    addWord("EXTINTOR",["EX","TIN","TOR"],"./images/extintor.png","./audio/extintor.mp3");
    addWord("ELMO",["EL","MO"],"./images/elmo.png","./audio/elmo.mp3");
    addWord("EMÍLIA",["E","MÍ","LI","A"],"./images/emilia.png","./audio/emilia.mp3");
    addWord("ELSA",["EL","SA"],"./images/elsa.png","./audio/elsa.mp3");

    addWord("IARA",["I","A","RA"],"./images/iara.png","./audio/iara.mp3");
    addWord("IDENTIDADE",["I","DEN","TI","DA","DE"],"./images/identidade.png","./audio/identidade.mp3");
    addWord("IDOSOS",["I","DO","SOS"],"./images/idosos.png","./audio/idosos.mp3");
    addWord("IGLU",["I","GLU"],"./images/iglu.png","./audio/iglu.mp3");
    addWord("IGREJA",["I","GRE","JA"],"./images/igreja.png","./audio/igreja.mp3");
    addWord("IGUANA",["I","GUA","NA"],"./images/iguana.png","./audio/iguana.mp3");
    addWord("ILHA",["I","LHA"],"./images/ilha.png","./audio/ilha.mp3");
    addWord("ÍMÃ",["Í","MÃ"],"./images/ima.png","./audio/ima.mp3");
    addWord("IMPRESSORA",["IM","PRES","SO","RA"],"./images/impressora.png","./audio/impressora.mp3");
    addWord("IOIÔ",["IO","IÔ"],"./images/ioio.png","./audio/ioio.mp3");
    addWord("INCENSO",["ÍN","CEN","SO"],"./images/incenso.png","./audio/incenso.mp3");
    addWord("ÍNDIO",["ÍN","DI","O"],"./images/indio.png","./audio/indio.mp3");
    addWord("INGRESSO",["IN","GRES","SO"],"./images/ingresso.png","./audio/ingresso.mp3");
    addWord("INJEÇÃO",["IN","JE","ÇÃO"],"./images/injecao.png","./audio/injecao.mp3");
    addWord("INSETOS",["IN","SE","TOS"],"./images/insetos.png","./audio/insetos.mp3");
    addWord("INSTRUMENTOS",["INS","TRU","MEN","TOS"],"./images/instrumentos.png","./audio/instrumentos.mp3");
    addWord("INTERFONE",["IN","TER","FO","NE"],"./images/interfone.png","./audio/interfone.mp3");
    addWord("IPÊ",["I","PÊ"],"./images/ipe.png","./audio/ipe.mp3");
    addWord("IRRIGADOR",["IR","RI","GA","DOR"],"./images/irrigador.png","./audio/irrigador.mp3");
    addWord("IRMÃO",["IR","MÃO"],"./images/irmao.png","./audio/irmao.mp3");
    addWord("IRMÃ",["IR","MÃ"],"./images/irma.png","./audio/irma.mp3");
    addWord("ISCA",["IS","CA"],"./images/isca.png","./audio/isca.mp3");
    addWord("ISOLANTE",["I","SO","LAN","TE"],"./images/isolante.png","./audio/isolante.mp3");
    addWord("ISQUEIRO",["IS","QUEI","RO"],"./images/isqueiro.png","./audio/isqueiro.mp3");
    addWord("INTERNET",["IN","TER","NET"],"./images/internet.png","./audio/internet.mp3");
    addWord("IOGURTE",["I","O","GUR","TE"],"./images/iogurte.png","./audio/iogurte.mp3");
    addWord("IATE",["I","A","TE"],"./images/iate.png","./audio/iate.mp3");
    addWord("ISOPOR",["I","SO","POR"],"./images/isopor.png","./audio/isopor.mp3");

    addWord("OLAF",["O","LAF"],"./images/olaf.png","./audio/olaf.mp3");
    addWord("OÁSIS",["O","Á","SIS"],"./images/oasis.png","./audio/oasis.mp3");
    addWord("OVO",["O","VO"],"./images/ovo.png","./audio/ovo.mp3");
    addWord("OCA",["O","CA"],"./images/oca.png","./audio/oca.mp3");
    addWord("OCEANO",["O","CE","A","NO"],"./images/oceano.png","./audio/oceano.mp3");
    addWord("OVELHA",["O","VE","LHA"],"./images/ovelha.png","./audio/ovelha.mp3");
    addWord("ÔNIBUS",["Ô","NI","BUS"],"./images/onibus.png","./audio/onibus.mp3");
    addWord("OITO",["OI","TO"],"./images/oito.png","./audio/oito.mp3");
    addWord("ÓCULOS",["Ó","CU","LOS"],"./images/oculos.png","./audio/oculos.mp3");
    addWord("ORELHA",["O","RE","LHA"],"./images/orelha.png","./audio/orelha.mp3");
    addWord("OLHO",["O","LHO"],"./images/olho.png","./audio/olho.mp3");
    addWord("ONÇA",["ON","ÇA"],"./images/onca.png","./audio/onca.mp3");
    addWord("OURO",["OU","RO"],"./images/ouro.png","./audio/ouro.mp3");
    addWord("ONDA",["ON","DA"],"./images/onda.png","./audio/onda.mp3");
    addWord("OGRO",["O","GRO"],"./images/ogro.png","./audio/ogro.mp3");
    addWord("OMBRO",["OM","BRO"],"./images/ombro.png","./audio/ombro.mp3");
    addWord("OMELETE",["O","ME","LE","TE"],"./images/omelete.png","./audio/omelete.mp3");
    addWord("ORAÇÃO",["O","RA","ÇÃO"],"./images/oracao.png","./audio/oracao.mp3");
    addWord("ORCA",["OR","CA"],"./images/orca.png","./audio/orca.mp3");
    addWord("ORELHÃO",["O","RE","LHÃO"],"./images/orelhao.png","./audio/orelhao.mp3");
    addWord("ORIGAMI",["O","RI","GA","MI"],"./images/origami.png","./audio/origami.mp3");
    addWord("OSTRA",["OS","TRA"],"./images/ostra.png","./audio/ostra.mp3");
    addWord("OSSO",["OS","SO"],"./images/osso.png","./audio/osso.mp3");
    
    addWord("UVA",["U","VA"],"./images/uva.png","./audio/u.mp3");
    addWord("URSO",["UR","SO"],"./images/urso.png","./audio/urso.mp3");
    addWord("UM",["UM"],"./images/um.png","./audio/um.mp3");
    addWord("UMBIGO",["UM","BI","GO"],"./images/umbigo.png","./audio/umbigo.mp3");
    addWord("URUBU",["U","RU","BU"],"./images/urubu.png","./audio/urubu.mp3");
    addWord("ULTRASSOM",["UL","TRAS","SOM"],"./images/ultrassom.png","./audio/ultrassom.mp3");
    addWord("UNHA",["U","NHA"],"./images/unha.png","./audio/unha.mp3");
    addWord("UNO",["U","NO"],"./images/uno.png","./audio/uno.mp3");
    addWord("UNICÓRNIO",["U","NI","CÓR","NI","O"],"./images/unicornio.png","./audio/unicornio.mp3");
    addWord("UNIFORME",["U","NI","FOR","ME"],"./images/uniforme.png","./audio/uniforme.mp3");
    addWord("UNIVERSO",["U","NI","VER","SO"],"./images/universo.png","./audio/universo.mp3");
    addWord("USINA",["U","SI","NA"],"./images/usina.png","./audio/usina.mp3");
    addWord("URNA",["UR","NA"],"./images/urna.png","./audio/urna.mp3");

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
        addButton("Letra final", gameSelection);
        addButton("Sílaba inicial", gameSelection);
        addButton("Sílaba final", gameSelection);
        addButton("Juntar sílabas", gameSelection);
        addButton("Desembaralhar letras", gameSelection);
        addButton("Forca", gameSelection);
        addButton("Ditado", gameSelection);
        addButton("Consoante + H", removeSelection);
        addButton("Consoante + L", removeSelection);
        addButton("Consoante + R", removeSelection);
        addButton("SS", removeSelection);
        addButton("Ç", removeSelection);
        addButton("Acentuação", removeSelection);
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
        
        const remove = [];
        removeSelection.childNodes.forEach((element) => {
            if (element.className == "selected") {
                remove.push(element.textContent);
            }
        })
        info[4] = remove;

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
    const wordsToRemove = info[4];

    const removeWords = (function () {
        const removeConsH = (value) => {
            return value.word.indexOf("CH") == -1 && value.word.indexOf("NH") == -1 && value.word.indexOf("LH") == -1;
        }

        const removeConsL = (value) => {
            return value.word.indexOf("BL") == -1 && value.word.indexOf("CL") == -1 && value.word.indexOf("FL") == -1 && 
                value.word.indexOf("GL") == -1 && value.word.indexOf("PL") == -1 && value.word.indexOf("TL") == -1;
        }

        const removeConsR = (value) => {
            return value.word.indexOf("BR") == -1 && value.word.indexOf("CR") == -1 && value.word.indexOf("DR") == -1 && 
                value.word.indexOf("FR") == -1 && value.word.indexOf("GR") == -1 && value.word.indexOf("PR") == -1 &&
                value.word.indexOf("TR") == -1 && value.word.indexOf("VR") == -1;
        }

        const removeSS = (value) => {
            return value.word.indexOf("SS") == -1;
        }

        const removeC = (value) => {
            return value.word.indexOf("Ç") == -1;
        }
        const removeAccents = (value) => {
            return value.word.indexOf("Ã") == -1 && value.word.indexOf("Õ") == -1 && value.word.indexOf("Â") == -1 &&
                value.word.indexOf("Ê") == -1 && value.word.indexOf("Î") == -1 && value.word.indexOf("Á") == -1 &&
                value.word.indexOf("É") == -1 && value.word.indexOf("Í") == -1 && value.word.indexOf("Ó") == -1 &&
                value.word.indexOf("Ú") == -1;
        }

        for (let i = 0; i < wordsToRemove.length; i++) {
            if (wordsToRemove[i] == "Consoante + H") {
                allWords = allWords.filter(removeConsH);
            } else if (wordsToRemove[i] == "Consoante + L") {
                allWords = allWords.filter(removeConsL);
            } else if (wordsToRemove[i] == "Consoante + R") {
                allWords = allWords.filter(removeConsR);
            } else if (wordsToRemove[i] == "SS") {
                allWords = allWords.filter(removeSS);
            } else if (wordsToRemove[i] == "Ç") {
                allWords = allWords.filter(removeC);
            } else if (wordsToRemove[i] == "Acentuação") {
                allWords = allWords.filter(removeAccents);
            }
        }
    })();

    let gameArray = usedGames;
    let gameCounter = 1;

    let thisGame = "";

    const selectWords = (value) => {
        for (let i = 0; i < usedLetters.length ; i++) {
            if (value.word.charAt(0) === usedLetters[i]) {
                return true;
            }
        } 
        return false;
    }
    
    const selectFinalWords = (value) => {
        for (let i = 0; i < usedLetters.length ; i++) {
            if (value.word.charAt(value.word.length - 1) === usedLetters[i]) {
                return true;
            }
        } 
        return false;
    }

    const selectSyllable = (value) => {
        if (value.syllables.length > 1) {
            for (let i = 0; i < usedLetters.length ; i++) {
                if (value.syllables[0].charAt(0) === usedLetters[i]) {
                    if (value.syllables[0].length > 1) {
                        return true;
                    }
                }
            } 
        }
        return false;
    }

    const selectSyllableFinal = (value) => {
        if (value.syllables.length > 1) {
            for (let i = 0; i < usedLetters.length ; i++) {
                if (value.syllables[value.syllables.length - 1].charAt(0) === usedLetters[i]) {
                    if (value.syllables[value.syllables.length - 1].length > 1) {
                        return true;
                    }
                }
            } 
        }
        return false;
    }

    const selectDitado = (value) => {
        for (let i = 0; i < usedLetters.length ; i++) {
            if (value.word.charAt(0) === usedLetters[i]) {
                return true;
            }
        } 
        return false;
    }

    let usableWords = allWords.filter(selectWords);
    let usableFinalWords = allWords.filter(selectFinalWords);
    let usableSyllable = allWords.filter(selectSyllable);
    let usableFinalSyllable = allWords.filter(selectSyllableFinal);
    let usableDitado = allWords.filter(selectDitado);

    const transformText = (text) => {
        if (letterType.length == "2") {
            return [text, text.toLowerCase()];
        } else if (letterType[0] == "Maiúscula") {
            return [text];
        } else if (letterType[0] == "Minúscula") {
            return [text.toLowerCase()];
        }
    };

    const WordHistory = [];
    let correctTotal = 0;
    let wrongTotal = 0;

    const addWordHistory = (word, value, answer, game) => {
        WordHistory.push([word, value, answer, game]);
    }

    const makeAreaGame = (function () {
        main.textContent = "";
        const Game = document.createElement('div');
        Game.id = "Game";
        main.appendChild(Game);
    })();

    const history =(function () {
        const history = document.createElement('div');
        history.id = "history";

        const correct = document.createElement('div');
        correct.textContent = correctTotal + " Corretos";
        correct.id = "correctTotal";

        const wrong = document.createElement('div');
        wrong.textContent = wrongTotal + " Errados";
        wrong.id = "wrongTotal";

        const showhistory = document.createElement('div');
        showhistory.textContent = "";
        showhistory.id = "History";

        const showHistory = () => {
            if (showhistory.textContent == ""){
                for (let i = 0; i < WordHistory.length ; i++) {
                    const word = document.createElement('div');
                    word.textContent = WordHistory[i][0].word;
                    word.className = WordHistory[i][1];
                    const answer = document.createElement('div');
                    if (WordHistory[i][1] == "wrong") {
                        answer.textContent = WordHistory[i][2];
                    }
                    answer.className = WordHistory[i][1];
                    const game = document.createElement('div');
                    game.textContent = WordHistory[i][3];
                    game.className = WordHistory[i][1];
                    showhistory.appendChild(word);
                    showhistory.appendChild(answer);
                    showhistory.appendChild(game);
                }
            } else {
                hideHistory();
            }   
        }

        const hideHistory = () => {
            while (showhistory.firstChild) {
                showhistory.removeChild(showhistory.firstChild);
            }
        }

        showhistory.addEventListener('click', function(event) {
            hideHistory();
        })
        

        wrong.addEventListener('click', function(event) {
            showHistory();
        })

        correct.addEventListener('click', function(event) {
            showHistory();
        })
        
        history.appendChild(correct);
        history.appendChild(wrong);
        history.appendChild(showhistory);

        document.body.appendChild(history);

        const updateScore = () => {
            correct.textContent = correctTotal + " Corretos";
            wrong.textContent = wrongTotal + " Errados";
             if (showhistory.firstChild){
                hideHistory();
                showHistory();
             }                    
        }
        return {updateScore}
    })();

    const updateTotal = (value) => {
        if (value == "correct") {
            correctTotal += 1;
        } else {
            wrongTotal += 1;
        }
        history.updateScore();
    }

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

    const makeDisplay = (Question, imgSrc, tipText, audioSrc) => {
        const question = document.createElement('div');
        const imgNWord = document.createElement('div');
        
        imgNWord.className = "help";
        question.className = "question";
        
        const questionText = transformText(Question);

        for (let i = 0; i < questionText.length;  i++){
            const questionTEXT = document.createElement('div');
            questionTEXT.textContent = questionText[i];
            question.appendChild(questionTEXT);
        }
        Game.appendChild(question);

        const img = document.createElement('img');
        img.src = imgSrc;
        imgNWord.appendChild(img);

        const audioNText = document.createElement('div');

        const audioImg = document.createElement('img');
        audioImg.src = "./images/playAudio.png"
        const audioHelp = new Audio(audioSrc);
        audioImg.addEventListener('click', function(event) {
            audioHelp.play();
        })
        audioNText.appendChild(audioImg);

        const wordHelp = transformText(tipText);
        
        const text = document.createElement('div');
        
        for (let i = 0; i < wordHelp.length;  i++){
            const tip = document.createElement('div');
            tip.textContent = wordHelp[i];
            text.appendChild(tip);
        }
        audioNText.appendChild(text);
        imgNWord.appendChild(audioNText);
        Game.appendChild(imgNWord)

    }

    const makeDisplayDitado = (Question, imgSrc, audioSrc) => {
        const question = document.createElement('div');
        const imgNAudio = document.createElement('div');
        
        imgNAudio.className = "help";
        question.className = "question";
        
        const questionText = transformText(Question);

        for (let i = 0; i < questionText.length;  i++){
            const questionTEXT = document.createElement('div');
            questionTEXT.textContent = questionText[i];
            question.appendChild(questionTEXT);
        }
        Game.appendChild(question);

        const img = document.createElement('img');
        img.src = imgSrc;
        imgNAudio.appendChild(img);

        const audioNText = document.createElement('div');

        const audioImg = document.createElement('img');
        audioImg.src = "./images/playAudio.png"
        const audioHelp = new Audio(audioSrc);
        audioImg.addEventListener('click', function(event) {
            audioHelp.play();
        })
        audioNText.appendChild(audioImg);

        imgNAudio.appendChild(audioNText);
        Game.appendChild(imgNAudio)

    }

    const endGame = () =>{
        const finalMessage = document.createElement('div');
        finalText = transformText("FIM DE JOGO");

        for (let i = 0; i < finalText.length;  i++){
            const finalLine = document.createElement('div');
            finalLine.textContent = finalText[i];
            finalMessage.appendChild(finalLine);
        }

        finalMessage.id = "endGame";
        document.body.appendChild(finalMessage);
        main.textContent = "";
    }

    const playRound = () => {
        const Game = document.querySelector('#Game');
        thisGame = choseGame();
        Game.textContent = "";

        switch (thisGame) {
            case "Letra inicial": {
                if (usableWords.length > 0) {
                    makeLetra();
                } else {
                    endGame();
                }
                break;
            }
            case "Letra final": {
                if (usableFinalWords.length > 0) {
                    makeLetraFinal();
                } else {
                    endGame();
                }
                break;
            }
            case "Sílaba inicial": {
                if (usableSyllable.length > 0) {
                    makeSilaba();
                } else {
                    endGame();
                }
                break;
            }
            case "Sílaba final": {
                if (usableFinalSyllable.length > 0) {
                    makeSilabaFinal();
                } else {
                    endGame();
                }
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
            case "Ditado": {
                if (usableDitado.length > 0) {
                    makeDitado();
                } else {
                    endGame();
                }
                break;

            }
        }
    }

    const selectWordUsable = () => {
        return Math.floor(Math.random() * usableWords.length);
    }

    const selectWordFinal = () => {
        return Math.floor(Math.random() * usableFinalWords.length);
    }

    const selectWordSyllable = () => {
        return Math.floor(Math.random() * usableSyllable.length);
    }

    const selectWordSyllableFinal = () => {
        return Math.floor(Math.random() * usableFinalSyllable.length);
    }

    const selectWordDitado = () => {
        return Math.floor(Math.random() * usableDitado.length);
    }

    const deleteWord = (word) => {
        usableWords = usableWords.filter(value => value != word);
        usableFinalWords = usableFinalWords.filter(value => value != word);
        usableSyllable = usableSyllable.filter(value => value != word);
        usableFinalSyllable = usableFinalSyllable.filter(value => value != word);
        usableDitado = usableDitado.filter(value => value != word);
    }

    const makeLetra = () => {
        const word = usableWords[selectWordUsable()];
        const letter = word.word.slice(0, 1);

        makeDisplay("QUAL É A LETRA INICIAL?", word.img, "__" + word.word.slice(1), word.audio);

        const game = document.querySelector('#Game');

        const options = document.createElement('div');
        options.className = "buttons";
        
        let consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];

        const removeConsonant = (letter) => {
            consonants = consonants.filter(value => value != letter);
        }

        const getConsonant = () => {
            let letter = consonants[Math.floor(Math.random() * consonants.length + 1)];
            removeConsonant(letter);
            return letter;
        }

        let firstTest = true

        let createButton = (letter, boolean) => {
            const button = document.createElement('div');
            const buttonText = transformText(letter);
            for (let i = 0; i < buttonText.length;  i++){
                const value = document.createElement('div');
                value.textContent = buttonText[i];
                button.appendChild(value);
            }
            if (boolean == true) {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"correct",letter, "Letra Inicial");
                        updateTotal("correct");
                    }
                    deleteWord(word);
                    playRound();
                })
            } else {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"wrong",letter, "Letra Inicial");
                        firstTest = false;
                        updateTotal("wrong");
                    }
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
            let buttonsValue = [];
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

        game.appendChild(options);
    }

    const makeLetraFinal = () => {
        const word = usableFinalWords[selectWordFinal()];
        const letter = word.word.slice(-1);

        makeDisplay("QUAL É A LETRA FINAL?", word.img,word.word.slice(0, -1) + "__", word.audio);

        const game = document.querySelector('#Game');

        const options = document.createElement('div');
        options.className = "buttons";
        
        let consonants = ["B","C","D","F","G","H","J","K","L","M","N","P","Q","R","S","T","V","W","X","Y","Z"];

        const removeConsonant = (letter) => {
            consonants = consonants.filter(value => value != letter);
        }

        const getConsonant = () => {
            let letter = consonants[Math.floor(Math.random() * consonants.length + 1)];
            removeConsonant(letter);
            return letter;
        }

        let firstTest = true

        let createButton = (letter, boolean) => {
            const button = document.createElement('div');
            const buttonText = transformText(letter);
            for (let i = 0; i < buttonText.length;  i++){
                const value = document.createElement('div');
                value.textContent = buttonText[i];
                button.appendChild(value);
            }
            if (boolean == true) {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"correct",letter, "Letra Final");
                        updateTotal("correct");
                    }
                    deleteWord(word);
                    playRound();
                })
            } else {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"wrong",letter, "Letra Final");
                        firstTest = false;
                        updateTotal("wrong");
                    }
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
            let buttonsValue = [];
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

        game.appendChild(options);
    }

    const makeSilaba = () => {
        const word = usableSyllable[selectWordSyllable()];
        const syllable = word.syllables[0];
        
        const makeRestWord = () => {
            let restWord = "";
            for (i = 1; i < word.syllables.length; i++) {
                restWord = restWord + word.syllables[i];
            }
            return restWord;
        }

        makeDisplay("QUAL É A SÍLABA INICIAL?", word.img, "__" + makeRestWord(), word.audio);

        const game = document.querySelector('#Game');

        const options = document.createElement('div');
        options.className = "buttons";
        
        let firstTest = true

        let createButton = (syllable, boolean) => {
            const button = document.createElement('div');
            const buttonText = transformText(syllable);
            for (let i = 0; i < buttonText.length;  i++){
                const value = document.createElement('div');
                value.textContent = buttonText[i];
                button.appendChild(value);
            }
            if (boolean == true) {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"correct",syllable, "Sílaba Inicial");
                        updateTotal("correct");
                    }
                    deleteWord(word);
                    playRound();
                })
            } else {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"wrong",syllable, "Sílaba Inicial");
                        firstTest = false;
                        updateTotal("wrong");
                    }
                    button.className = "wrong";
                })
            }
            options.appendChild(button);
        }

        let changeSyllable = (initialValue, FinalValue) => {
            return syllable.replace(initialValue,FinalValue);
        }

        if (syllable.includes("QU") || (syllable.includes("GU") && syllable.indexOf("A") !== -1 && syllable.indexOf("E") !== -1
            && syllable.indexOf("I") !== -1 && syllable.indexOf("O") !== -1)) {
                createButton(changeSyllable(/[AEIO]/, "A"), syllable == changeSyllable(/[AEIO]/, "A"));
                createButton(changeSyllable(/[AEIO]/, "E"), syllable == changeSyllable(/[AEIO]/, "E"));
                createButton(changeSyllable(/[AEIO]/, "I"), syllable == changeSyllable(/[AEIO]/, "I"));
                createButton(changeSyllable(/[AEIO]/, "O"), syllable == changeSyllable(/[AEIO]/, "O"));
                createButton(changeSyllable(/[AEIO]/, ""), syllable == changeSyllable(/[AEIO]/, ""));
        } else if (syllable.includes("Ã")) {
            createButton(syllable, true);
            createButton(changeSyllable(/Ã/, "E"), false);
            createButton(changeSyllable(/Ã/, "I"), false);
            createButton(changeSyllable(/Ã/, "Õ"), false);
            createButton(changeSyllable(/Ã/, "U"), false);
        } else if (syllable.includes("Â") || syllable.includes("Ê") || syllable.includes("Ô")) {
            createButton(changeSyllable(/[ÂÊÎ]/, "Â"), syllable == changeSyllable(/[ÂÊÎ]/, "Â"));
            createButton(changeSyllable(/[ÂÊÎ]/, "Ê"), syllable == changeSyllable(/[ÂÊÎ]/, "Ê"));
            createButton(changeSyllable(/[ÂÊÎ]/, "Î"), false);
            createButton(changeSyllable(/[ÂÊÎ]/, "Ô"), syllable == changeSyllable(/[ÂÊÎ]/, "Ô"));
            createButton(changeSyllable(/[ÂÊÎ]/, "Û"), false);
        } else if (syllable.includes("Á") || syllable.includes("É") || syllable.includes("Í") || 
            syllable.includes("Ó") || syllable.includes("Ú")) {
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Á"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Á"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "É"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "É"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Í"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Í"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Ó"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Ó"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Ú"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Ú"));
        } else {
            createButton(changeSyllable(/[AEIOU]/, "A"), syllable == changeSyllable(/[AEIOU]/, "A"));
            createButton(changeSyllable(/[AEIOU]/, "E"), syllable == changeSyllable(/[AEIOU]/, "E"));
            createButton(changeSyllable(/[AEIOU]/, "I"), syllable == changeSyllable(/[AEIOU]/, "I"));
            createButton(changeSyllable(/[AEIOU]/, "O"), syllable == changeSyllable(/[AEIOU]/, "O"));
            createButton(changeSyllable(/[AEIOU]/, "U"), syllable == changeSyllable(/[AEIOU]/, "U"));
        }
        game.appendChild(options);
    }

    const makeSilabaFinal = () => {
        const word = usableFinalSyllable[selectWordSyllableFinal()];
        const syllable = word.syllables[word.syllables.length - 1];
        
        const makeRestWord = () => {
            let restWord = "";
            for (i = 0; i < word.syllables.length - 1; i++) {
                restWord = restWord + word.syllables[i];
            }
            return restWord;
        }

        makeDisplay("QUAL É A SÍLABA FINAL?", word.img,makeRestWord() + "__", word.audio);

        const game = document.querySelector('#Game');

        const options = document.createElement('div');
        options.className = "buttons";
        
        let firstTest = true

        let createButton = (syllable, boolean) => {
            const button = document.createElement('div');
            const buttonText = transformText(syllable);
            for (let i = 0; i < buttonText.length;  i++){
                const value = document.createElement('div');
                value.textContent = buttonText[i];
                button.appendChild(value);
            }
            if (boolean == true) {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"correct",syllable, "Sílaba Final");
                        updateTotal("correct");
                    }
                    deleteWord(word);
                    playRound();
                })
            } else {
                button.addEventListener('click', function(event) {
                    if (firstTest == true) {
                        addWordHistory(word,"wrong",syllable, "Sílaba Final");
                        firstTest = false;
                        updateTotal("wrong");
                    }
                    button.className = "wrong";
                })
            }
            options.appendChild(button);
        }

        let changeSyllable = (initialValue, FinalValue) => {
            return syllable.replace(initialValue,FinalValue);
        }

        if (syllable.includes("ÃO")) {
            createButton(changeSyllable(/ÃO/, "A"), false);
            createButton(changeSyllable(/ÃO/, "E"), false);
            createButton(changeSyllable(/ÃO/, "I"), false);
            createButton(changeSyllable(/ÃO/, "O"), false);
            createButton(changeSyllable(/ÃO/, "U"), false);
            createButton(syllable, true);
        } else if (syllable.includes("QU") || (syllable.includes("GU") && syllable.indexOf("A") !== -1 && syllable.indexOf("E") !== -1
            && syllable.indexOf("I") !== -1 && syllable.indexOf("O") !== -1)) {
                createButton(changeSyllable(/[AEIO]/, "A"), syllable == changeSyllable(/[AEIO]/, "A"));
                createButton(changeSyllable(/[AEIO]/, "E"), syllable == changeSyllable(/[AEIO]/, "E"));
                createButton(changeSyllable(/[AEIO]/, "I"), syllable == changeSyllable(/[AEIO]/, "I"));
                createButton(changeSyllable(/[AEIO]/, "O"), syllable == changeSyllable(/[AEIO]/, "O"));
                createButton(changeSyllable(/[AEIO]/, ""), syllable == changeSyllable(/[AEIO]/, ""));
                createButton(changeSyllable(/[AEIO]/, "ÃO"), syllable == changeSyllable(/[AEIO]/, "ÃO"));
        } else if (syllable.includes("Ã")) {
            createButton(syllable, true);
            createButton(changeSyllable(/Ã/, "E"), false);
            createButton(changeSyllable(/Ã/, "I"), false);
            createButton(changeSyllable(/Ã/, "Õ"), false);
            createButton(changeSyllable(/Ã/, "U"), false);
            createButton(changeSyllable(/Ã/, "ÃO"), false);
        } else if (syllable.includes("Â") || syllable.includes("Ê") || syllable.includes("Ô")) {
            createButton(changeSyllable(/[ÂÊÎ]/, "Â"), syllable == changeSyllable(/[ÂÊÎ]/, "Â"));
            createButton(changeSyllable(/[ÂÊÎ]/, "Ê"), syllable == changeSyllable(/[ÂÊÎ]/, "Ê"));
            createButton(changeSyllable(/[ÂÊÎ]/, "Î"), false);
            createButton(changeSyllable(/[ÂÊÎ]/, "Ô"), syllable == changeSyllable(/[ÂÊÎ]/, "Ô"));
            createButton(changeSyllable(/[ÂÊÎ]/, "Û"), false);
            createButton(changeSyllable(/[ÂÊÎ]/, "ÃO"), false);
        } else if (syllable.includes("Á") || syllable.includes("É") || syllable.includes("Í") || 
            syllable.includes("Ó") || syllable.includes("Ú")) {
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Á"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Á"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "É"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "É"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Í"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Í"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Ó"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Ó"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "Ú"), syllable == changeSyllable(/[ÁÉÍÓÚ]/, "Ú"));
            createButton(changeSyllable(/[ÁÉÍÓÚ]/, "ÃO"), false);
        } else {
            createButton(changeSyllable(/[AEIOU]/, "A"), syllable == changeSyllable(/[AEIOU]/, "A"));
            createButton(changeSyllable(/[AEIOU]/, "E"), syllable == changeSyllable(/[AEIOU]/, "E"));
            createButton(changeSyllable(/[AEIOU]/, "I"), syllable == changeSyllable(/[AEIOU]/, "I"));
            createButton(changeSyllable(/[AEIOU]/, "O"), syllable == changeSyllable(/[AEIOU]/, "O"));
            createButton(changeSyllable(/[AEIOU]/, "U"), syllable == changeSyllable(/[AEIOU]/, "U"));
            createButton([...new Set(changeSyllable(/[AEIOU]/gi, "ÃO"))].join(""), false);
        }
        game.appendChild(options);
    }

    const makeDitado = () => {
        const word = usableDitado[selectWordDitado()];

        makeDisplayDitado("COMO SE ESCREVE?", word.img, word.audio);

        const game = document.querySelector('#Game');

        const answer = document.createElement('div');
        answer.className = "ditado";
        
        let firstTest = true

        const input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("spellcheck", "false");
        answer.appendChild(input);

        const button = document.createElement('button');
        button.textContent = "ENVIAR";
        button.addEventListener('click', function(event) {
            testAnswer();
        })
        answer.appendChild(button);

        const testAnswer = () => {
            if (input.value.toUpperCase() == word.word) {
                if (firstTest == true) {
                    addWordHistory(word, "correct", word.word,"Ditado");
                    updateTotal("correct");
                }
                deleteWord(word);
                playRound();
            } else {
                if (firstTest == true) {
                    addWordHistory(word, "wrong", input.value.toUpperCase(), "Ditado");
                    firstTest = false;
                    updateTotal("wrong");
                }
                input.className = "wrong";
            }
        }

        game.appendChild(answer);
    }

    playRound(); 
}
