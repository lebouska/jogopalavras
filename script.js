const main = document.querySelector('#main')
const formPlace = document.querySelector('form');
const letterSelection = document.querySelector('.letterSelection');
const typeSelection = document.querySelector('.typeSelection');
const gameSelection = document.querySelector('.gameSelection');
const removeSelection = document.querySelector('.removeSelection');
const startButton = document.querySelector('#start');
const qntPoints = document.querySelector('#qntPoints');
const selectLetters = document.querySelector('#selectAll');
const selectRemove = document.querySelector('#removeAll');


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
    addWord("ALÇA",["AL","ÇA"],"./images/alca.png","./audio/alca.mp3");
    addWord("ALFABETO",["AL","FA","BE","TO"],"./images/alfabeto.png","./audio/alfabeto.mp3");
    addWord("ALFACE",["AL","FA","CE"],"./images/alface.png","./audio/alface.mp3");
    addWord("ALGEMA",["AL","GE","MA"],"./images/algema.png","./audio/algema.mp3");
    addWord("ALGODÃO",["AL","GO","DÃO"],"./images/algodao.png","./audio/algodao.mp3");
    addWord("ALMOÇO",["AL","MO","ÇO"],"./images/almoco.png","./audio/almoco.mp3");
    addWord("ALMOFADA",["AL","MO","FA","DA"],"./images/almofada.png","./audio/almofada.mp3");
    addWord("AMARELO",["A","MA","RE","LO"],"./images/amarelo.png","./audio/amarelo.mp3");
    addWord("AMBULÂNCIA",["AM","BU","LÂN","CI","A"],"./images/ambulancia.png","./audio/ambulancia.mp3");
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
    
    addWord("UVA",["U","VA"],"./images/uva.png","./audio/uva.mp3");
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

    addWord("BABADOR",["BA","BA","DOR"],"./images/babador.png","./audio/babador.mp3");
    addWord("BACIA",["BA","CI","A"],"./images/bacia.png","./audio/bacia.mp3");
    addWord("BAGUETE",["BA","GUE","TE"],"./images/baguete.png","./audio/baguete.mp3");
    addWord("BAIANA",["BAI","A","NA"],"./images/baiana.png","./audio/baiana.mp3");
    addWord("BAILE",["BAI","LE"],"./images/baile.png","./audio/baile.mp3");
    addWord("BANHEIRO",["BA","NHEI","RO"],"./images/banheiro.png","./audio/banheiro.mp3");
    addWord("BALA",["BA","LA"],"./images/bala.png","./audio/bala.mp3");
    addWord("BALANÇA",["BA","LAN","ÇA"],"./images/balanca.png","./audio/balanca.mp3");
    addWord("BALANÇO",["BA","LAN","ÇO"],"./images/balanco.png","./audio/balanco.mp3");
    addWord("BALÃO",["BA","LÃO"],"./images/balao.png","./audio/balao.mp3");
    addWord("BALCÃO",["BAL","CÃO"],"./images/balcao.png","./audio/balcao.mp3");
    addWord("BALDE",["BAL","DE"],"./images/balde.png","./audio/balde.mp3");
    addWord("BALÉ",["BA","LÉ"],"./images/bale.png","./audio/bale.mp3");
    addWord("BAMBI",["BAM","BI"],"./images/bambi.png","./audio/bambi.mp3");
    addWord("BAMBOLÊ",["BAM","BO","LÊ"],"./images/bambole.png","./audio/bambole.mp3");
    addWord("BAMBU",["BAM","BU"],"./images/bambu.png","./audio/bambu.mp3");
    addWord("BANANA",["BA","NA","NA"],"./images/banana.png","./audio/banana.mp3");
    addWord("BANANEIRA",["BA","NA","NEI","RA"],"./images/bananeira.png","./audio/bananeira.mp3");
    addWord("BANCA",["BAN","CA"],"./images/banca.png","./audio/banca.mp3");
    addWord("BANCO",["BAN","CO"],"./images/banco.png","./audio/banco.mp3");
    addWord("BANDEIRA",["BAN","DEI","RA"],"./images/bandeira.png","./audio/bandeira.mp3");
    addWord("BARBA",["BAR","BA"],"./images/barba.png","./audio/barba.mp3");
    addWord("BARBANTE",["BAR","BAN","TE"],"./images/barbante.png","./audio/barbante.mp3");
    addWord("BARBEADOR",["BAR","BE","A","DOR"],"./images/barbeador.png","./audio/barbeador.mp3");
    addWord("BARCO",["BAR","CO"],"./images/barco.png","./audio/barco.mp3");
    addWord("BARRIGA",["BAR","RI","GA"],"./images/barriga.png","./audio/barriga.mp3");
    addWord("BARRIL",["BAR","RIL"],"./images/barril.png","./audio/barril.mp3");
    addWord("BASQUETE",["BAS","QUE","TE"],"./images/basquete.png","./audio/basquete.mp3");
    addWord("BATATA",["BA","TA","TA"],"./images/batata.png","./audio/batata.mp3");
    addWord("BATERIA",["BA","TE","RI","A"],"./images/bateria.png","./audio/bateria.mp3");
    addWord("BATOM",["BA","TOM"],"./images/batom.png","./audio/batom.mp3");
    addWord("BAÚ",["BA","Ú"],"./images/bau.png","./audio/bau.mp3");
    addWord("BEBÊ",["BE","BÊ"],"./images/bebe.png","./audio/bebe.mp3");
    addWord("BEBEDOURO",["BE","BE","DOU","RO"],"./images/bebedouro.png","./audio/bebedouro.mp3");
    addWord("BEIJA-FLOR",["BEI","JA","-","FLOR"],"./images/beija-flor.png","./audio/beija-flor.mp3");
    addWord("BEIJO",["BEI","Jo"],"./images/beijo.png","./audio/beijo.mp3");
    addWord("BEISEBOL",["BEI","SE","BOL"],"./images/beisebol.png","./audio/beisebol.mp3");
    addWord("BELICHE",["BE","LI","CHE"],"./images/beliche.png","./audio/beliche.mp3");
    addWord("BELISCÃO",["BE","LIS","CÃO"],"./images/beliscao.png","./audio/beliscao.mp3");
    addWord("BENGALA",["BEN","GA","LA"],"./images/bengala.png","./audio/bengala.mp3");
    addWord("BERÇO",["BER","ÇO"],"./images/berco.png","./audio/berco.mp3");
    addWord("BERINJELA",["BE","RIN","JE","LA"],"./images/berinjela.png","./audio/berinjela.mp3");
    addWord("BERMUDA",["BER","MU","DA"],"./images/bermuda.png","./audio/bermuda.mp3");
    addWord("BESOURO",["BE","SOU","RO"],"./images/besouro.png","./audio/besouro.mp3");
    addWord("BETERRABA",["BE","TER","RA","BA"],"./images/beterraba.png","./audio/beterraba.mp3");
    addWord("BEZERRO",["BE","ZER","RO"],"./images/bezerro.png","./audio/bezerro.mp3");
    addWord("BIBLIOTECA",["BI","BLI","O","TE","CA"],"./images/biblioteca.png","./audio/biblioteca.mp3");
    addWord("BICICLETA",["BI","CI","CLE","TA"],"./images/bicicleta.png","./audio/bicicleta.mp3");
    addWord("BICO",["BI","CO"],"./images/bico.png","./audio/bico.mp3");
    addWord("BIGODE",["BI","GO","DE"],"./images/bigode.png","./audio/bigode.mp3");
    addWord("BINGO",["BIN","GO"],"./images/bingo.png","./audio/bingo.mp3");
    addWord("BINÓCULO",["BI","NÓ","CU","LO"],"./images/binoculo.png","./audio/binoculo.mp3");
    addWord("BOCA",["BO","CA"],"./images/boca.png","./audio/boca.mp3");
    addWord("BODE",["BO","DE"],"./images/bode.png","./audio/bode.mp3");
    addWord("BOIA",["BO","IA"],"./images/boia.png","./audio/boia.mp3");
    addWord("BOINA",["BOI","NA"],"./images/boina.png","./audio/boina.mp3");
    addWord("BOLA",["BO","LA"],"./images/bola.png","./audio/bola.mp3");
    addWord("BOLHA",["BO","LHA"],"./images/bolha.png","./audio/bolha.mp3");
    addWord("BOLICHE",["BO","LI","CHE"],"./images/boliche.png","./audio/boliche.mp3");
    addWord("BOLO",["BO","LO"],"./images/bolo.png","./audio/bolo.mp3");
    addWord("BOLSA",["BOL","SA"],"./images/bolsa.png","./audio/bolsa.mp3");
    addWord("BOMBA",["BOM","BA"],"./images/bomba.png","./audio/bomba.mp3");
    addWord("BOMBEIRO",["BOM","BEI","RO"],"./images/bombeiro.png","./audio/bombeiro.mp3");
    addWord("BOMBOM",["BOM","BOM"],"./images/bombom.png","./audio/bombom.mp3");
    addWord("BONÉ",["BO","NÉ"],"./images/bone.png","./audio/bone.mp3");
    addWord("BONECA",["BO","NE","CA"],"./images/boneca.png","./audio/boneca.mp3");
    addWord("BORBOLETA",["BOR","BO","LE","TA"],"./images/borboleta.png","./audio/borboleta.mp3");
    addWord("BORRACHA",["BOR","RA","CHA"],"./images/borracha.png","./audio/borracha.mp3");
    addWord("BOTA",["BO","TA"],"./images/bota.png","./audio/bota.mp3");
    addWord("BOTÃO",["BO","TÃO"],"./images/botao.png","./audio/botao.mp3");
    addWord("BOTIJÃO",["BO","TI","JÃO"],"./images/botijao.png","./audio/botijao.mp3");
    addWord("BOTO",["BO","TO"],"./images/boto.png","./audio/boto.mp3");
    addWord("BRAÇO",["BRA","ÇO"],"./images/braco.png","./audio/braco.mp3");
    addWord("BRANCO",["BRAN","CO"],"./images/branco.png","./audio/branco.mp3");
    addWord("BRASIL",["BRA","SIL"],"./images/brasil.png","./audio/brasil.mp3");
    addWord("BRIGADEIRO",["BRI","GA","DEI","RO"],"./images/brigadeiro.png","./audio/brigadeiro.mp3");
    addWord("BRÓCOLIS",["BRÓ","CO","LIS"],"./images/brocolis.png","./audio/brocolis.mp3");
    addWord("BRUXA",["BRU","XA"],"./images/bruxa.png","./audio/bruxa.mp3");
    addWord("BUEIRO",["BU","EI","RO"],"./images/bueiro.png","./audio/bueiro.mp3");
    addWord("BULE",["BU","LE"],"./images/bule.png","./audio/bule.mp3");
    addWord("BUQUÊ",["BU","QUÊ"],"./images/buque.png","./audio/buque.mp3");
    addWord("BURRO",["BUR","RO"],"./images/burro.png","./audio/burro.mp3");
    addWord("BUZINA",["BU","ZI","NA"],"./images/buzina.png","./audio/buzina.mp3");

    addWord("CABANA",["CA","BA","NA"],"./images/cabana.png","./audio/cabana.mp3");
    addWord("CABEÇA",["CA","BE","ÇA"],"./images/cabeca.png","./audio/cabeca.mp3");
    addWord("CABELO",["CA","BE","LO"],"./images/cabelo.png","./audio/cabelo.mp3");
    addWord("CABIDE",["CA","BI","DE"],"./images/cabide.png","./audio/cabide.mp3");
    addWord("CAÇADOR",["CA","ÇA","DOR"],"./images/cacador.png","./audio/cacador.mp3");
    addWord("CACAU",["CA","CAU"],"./images/cacau.png","./audio/cacau.mp3");
    addWord("CACHECOL",["CA","CHE","COL"],"./images/cachecol.png","./audio/cachecol.mp3");
    addWord("CACHIMBO",["CA","CHIM","BO"],"./images/cachimbo.png","./audio/cachimbo.mp3");
    addWord("CACHORRO",["CA","CHOR","RO"],"./images/cachorro.png","./audio/cachorro.mp3");
    addWord("CACO",["CA","CO"],"./images/caco.png","./audio/caco.mp3");
    addWord("CACTO",["CAC","TO"],"./images/cacto.png","./audio/cacto.mp3");
    addWord("CADARÇO",["CA","DAR","ÇO"],"./images/cadarco.png","./audio/cadarco.mp3");
    addWord("CADEADO",["CA","DE","A","DO"],"./images/cadeado.png","./audio/cadeado.mp3");
    addWord("CADERNO",["CA","DER","NO"],"./images/caderno.png","./audio/caderno.mp3");
    addWord("CAFÉ",["CA","FÉ"],"./images/cafe.png","./audio/cafe.mp3");
    addWord("CAIXA",["CAI","XA"],"./images/caixa.png","./audio/caixa.mp3");
    addWord("CAJU",["CA","JU"],"./images/caju.png","./audio/caju.mp3");
    addWord("CALÇA",["CAL","ÇA"],"./images/calca.png","./audio/calca.mp3");
    addWord("CALDEIRÃO",["CAL","DEI","RÃO"],"./images/caldeirao.png","./audio/caldeirao.mp3");
    addWord("CALENDÁRIO",["CA","LEN","DÁ","RI","O"],"./images/calendario.png","./audio/calendario.mp3");
    addWord("CAMA",["CA","MA"],"./images/cama.png","./audio/cama.mp3");
    addWord("CAMALEÃO",["CA","MA","LE","ÃO"],"./images/camaleao.png","./audio/camaleao.mp3");
    addWord("CAMELO",["CA","ME","LO"],"./images/camelo.png","./audio/camelo.mp3");
    addWord("CAMISA",["CA","MI","SA"],"./images/camisa.png","./audio/camisa.mp3");
    addWord("CANECA",["CA","NE","CA"],"./images/caneca.png","./audio/caneca.mp3");
    addWord("CANETA",["CA","NE","TA"],"./images/caneta.png","./audio/caneta.mp3");
    addWord("CANHÃO",["CA","NHÃO"],"./images/canhao.png","./audio/canhao.mp3");
    addWord("CANUDO",["CA","NU","DO"],"./images/canudo.png","./audio/canudo.mp3");
    addWord("CAPA",["CA","PA"],"./images/capa.png","./audio/capa.mp3");
    addWord("CAPOEIRA",["CA","PO","EI","RA"],"./images/capoeira.png","./audio/capoeira.mp3");
    addWord("CARACOL",["CA","RA","COL"],"./images/caracol.png","./audio/caracol.mp3");
    addWord("CARANGUEJO",["CA","RAN","GUE","JO"],"./images/caranguejo.png","./audio/caranguejo.mp3");
    addWord("CARIMBO",["CA","RIM","BO"],"./images/carimbo.png","./audio/carimbo.mp3");
    addWord("CARNE",["CAR","NE"],"./images/carne.png","./audio/carne.mp3");
    addWord("CARRO",["CAR","RO"],"./images/carro.png","./audio/carro.mp3");
    addWord("CARROSSEL",["CAR","ROS","SEL"],"./images/carrossel.png","./audio/carrossel.mp3");
    addWord("CARTA",["CAR","TA"],"./images/carta.png","./audio/carta.mp3");
    addWord("CARTÃO",["CAR","TÃO"],"./images/cartao.png","./audio/cartao.mp3");
    addWord("CASA",["CA","SA"],"./images/casa.png","./audio/casa.mp3");
    addWord("CASACO",["CA","SA","CO"],"./images/casaco.png","./audio/casaco.mp3");
    addWord("CASCA",["CAS","CA"],"./images/casca.png","./audio/casca.mp3");
    addWord("CATA-VENTO",["CA","TA","-","VEN","TO"],"./images/cata-vento.png","./audio/cata-vento.mp3");
    addWord("CAVALO",["CA","VA","LO"],"./images/cavalo.png","./audio/cavalo.mp3");
    addWord("CAVEIRA",["CA","VEI","RA"],"./images/caveira.png","./audio/caveira.mp3");
    addWord("CEBOLA",["CE","BO","LA"],"./images/cebola.png","./audio/cebola.mp3");
    addWord("CÉDULA",["CÉ","DU","LA"],"./images/cedula.png","./audio/cedula.mp3");
    addWord("CELULAR",["CE","LU","LAR"],"./images/celular.png","./audio/celular.mp3");
    addWord("CENOURA",["CE","NOU","RA"],"./images/cenoura.png","./audio/cenoura.mp3");
    addWord("CENTOPEIA",["CEN","TO","PEI","A"],"./images/centopeia.png","./audio/centopeia.mp3");
    addWord("CERCA",["CER","CA"],"./images/cerca.png","./audio/cerca.mp3");
    addWord("CEREAL",["CE","RE","AL"],"./images/cereal.png","./audio/cereal.mp3");
    addWord("CÉREBRO",["CÉ","RE","BRO"],"./images/cerebro.png","./audio/cerebro.mp3");
    addWord("CEREJA",["CE","RE","JA"],"./images/cereja.png","./audio/cereja.mp3");
    addWord("CERVEJA",["CER","VE","JA"],"./images/cerveja.png","./audio/cerveja.mp3");
    addWord("CESTA",["CES","TA"],"./images/cesta.png","./audio/cesta.mp3");
    addWord("CÉU",["CÉU"],"./images/ceu.png","./audio/ceu.mp3");
    addWord("CHÁ",["CHÁ"],"./images/cha.png","./audio/cha.mp3");
    addWord("CHALEIRA",["CHA","LEI","RA"],"./images/chaleira.png","./audio/chaleira.mp3");
    addWord("CHAPÉU",["CHA","PÉU"],"./images/chapeu.png","./audio/chapeu.mp3");
    addWord("CHAVE",["CHA","VE"],"./images/chave.png","./audio/chave.mp3");
    addWord("CHICLETE",["CHI","CLE","TE"],"./images/chiclete.png","./audio/chiclete.mp3");
    addWord("CHICOTE",["CHI","CO","TE"],"./images/chicote.png","./audio/chicote.mp3");
    addWord("CHIFRE",["CHI","FRE"],"./images/chifre.png","./audio/chifre.mp3");
    addWord("CHINELO",["CHI","NE","LO"],"./images/chinelo.png","./audio/chinelo.mp3");
    addWord("CHOCALHO",["CHO","CA","LHO"],"./images/chocalho.png","./audio/chocalho.mp3");
    addWord("CHOCOLATE",["CHO","CO","LA","TE"],"./images/chocolate.png","./audio/chocolate.mp3");
    addWord("CHUPETA",["CHU","PE","TA"],"./images/chupeta.png","./audio/chupeta.mp3");
    addWord("CHURRASCO",["CHUR","RAS","CO"],"./images/churrasco.png","./audio/churrasco.mp3");
    addWord("CHUTEIRA",["CHU","TEI","RA"],"./images/chuteira.png","./audio/chuteira.mp3");
    addWord("CHUVA",["CHU","VA"],"./images/chuva.png","./audio/chuva.mp3");
    addWord("CHUVEIRO",["CHU","VEI","RO"],"./images/chuveiro.png","./audio/chuveiro.mp3");
    addWord("CIDADE",["CI","DA","DE"],"./images/cidade.png","./audio/cidade.mp3");
    addWord("CIGARRO",["CI","GAR","RO"],"./images/cigarro.png","./audio/cigarro.mp3");
    addWord("CINEMA",["CI","NE","MA"],"./images/cinema.png","./audio/cinema.mp3");
    addWord("CINTO",["CIN","TO"],"./images/cinto.png","./audio/cinto.mp3");
    addWord("CINZA",["CIN","ZA"],"./images/cinza.png","./audio/cinza.mp3");
    addWord("CIRCO",["CIR","CO"],"./images/circo.png","./audio/circo.mp3");
    addWord("CLIPE",["CLI","PE"],"./images/clipe.png","./audio/clipe.mp3");
    addWord("COADOR",["CO","A","DOR"],"./images/coador.png","./audio/coador.mp3");
    addWord("COALA",["CO","A","LA"],"./images/coala.png","./audio/coala.mp3");
    addWord("COBERTOR",["CO","BER","TOR"],"./images/cobertor.png","./audio/cobertor.mp3");
    addWord("COBRA",["CO","BRA"],"./images/cobra.png","./audio/cobra.mp3");
    addWord("COELHO",["CO","E","LHO"],"./images/coelho.png","./audio/coelho.mp3");
    addWord("COFRE",["CO","FRE"],"./images/cofre.png","./audio/cofre.mp3");
    addWord("COGUMELO",["CO","GU","ME","LO"],"./images/cogumelo.png","./audio/cogumelo.mp3");
    addWord("COLA",["CO","LA"],"./images/cola.png","./audio/cola.mp3");
    addWord("COLAR",["CO","LAR"],"./images/colar.png","./audio/colar.mp3");
    addWord("COLCHÃO",["COL","CHÃO"],"./images/colchao.png","./audio/colchao.mp3");
    addWord("COLEIRA",["CO","LEI","RA"],"./images/coleira.png","./audio/coleira.mp3");
    addWord("COLHER",["CO","LHER"],"./images/colher.png","./audio/colher.mp3");
    addWord("COLMEIA",["COL","MEI","A"],"./images/colmeia.png","./audio/colmeia.mp3");
    addWord("COMETA",["CO","ME","TA"],"./images/cometa.png","./audio/cometa.mp3");
    addWord("COMPUTADOR",["COM","PU","TA","DOR"],"./images/computador.png","./audio/computador.mp3");
    addWord("CONCHA",["CON","CHA"],"./images/concha.png","./audio/concha.mp3");
    addWord("CONE",["CO","NE"],"./images/cone.png","./audio/cone.mp3");
    addWord("COPO",["CO","PO"],"./images/copo.png","./audio/copo.mp3");
    addWord("CORAÇÃO",["CO","RA","ÇÃO"],"./images/coracao.png","./audio/coracao.mp3");
    addWord("CORDA",["COR","DA"],"./images/corda.png","./audio/corda.mp3");
    addWord("COROA",["CO","RO","A"],"./images/coroa.png","./audio/coroa.mp3");
    addWord("CORRENTE",["COR","REN","TE"],"./images/corrente.png","./audio/corrente.mp3");
    addWord("CORUJA",["CO","RU","JA"],"./images/coruja.png","./audio/coruja.mp3");
    addWord("COTOVELO",["CO","TO","VE","LO"],"./images/cotovelo.png","./audio/cotovelo.mp3");
    addWord("COZINHA",["CO","ZI","NHA"],"./images/cozinha.png","./audio/cozinha.mp3");
    addWord("CRUZ",["CRUZ"],"./images/cruz.png","./audio/cruz.mp3");
    addWord("CUCA",["CU","CA"],"./images/cuca.png","./audio/cuca.mp3");
    addWord("CUBO",["CU","BO"],"./images/cubo.png","./audio/cubo.mp3");
    addWord("CUPIDO",["CU","PI","DO"],"./images/cupido.png","./audio/cupido.mp3");
    addWord("CURUPIRA",["CU","RU","PI","RA"],"./images/curupira.png","./audio/curupira.mp3");

    addWord("DADO",["DA","DO"],"./images/dado.png","./audio/dado.mp3");
    addWord("DÁLMATA",["DÁL","MA","TA"],"./images/dalmata.png","./audio/dalmata.mp3");
    addWord("DAMAS",["DA","MAS"],"./images/damas.png","./audio/damas.mp3");
    addWord("DATA",["DA","TA"],"./images/data.png","./audio/data.mp3");
    addWord("DARDO",["DAR","DO"],"./images/dardo.png","./audio/dardo.mp3");
    addWord("DEDO",["DE","DO"],"./images/dedo.png","./audio/dedo.mp3");
    addWord("DEGRAU",["DE","GRAU"],"./images/degrau.png","./audio/degrau.mp3");
    addWord("DELEGADO",["DE","LE","GA","DO"],"./images/delegado.png","./audio/delegado.mp3");
    addWord("DENTADURA",["DEN","TA","DU","RA"],"./images/dentadura.png","./audio/dentadura.mp3");
    addWord("DENTE",["DEN","TE"],"./images/dente.png","./audio/dente.mp3");
    addWord("DENTIFRÍCIO",["DEN","TE","FRÍ","CIO"],"./images/dentifricio.png","./audio/dentifricio.mp3");
    addWord("DENTISTA",["DEN","TIS","TA"],"./images/dentista.png","./audio/dentista.mp3");
    addWord("DESENHAR",["DE","SE","NHAR"],"./images/desenhar.png","./audio/desenhar.mp3");
    addWord("DESERTO",["DE","SER","TO"],"./images/deserto.png","./audio/deserto.mp3");
    addWord("DESENTUPIDOR",["DE","SEN","TU","PI","DOR"],"./images/desentupidor.png","./audio/desentupidor.mp3");
    addWord("DESFILE",["DES","FI","LE"],"./images/desfile.png","./audio/desfile.mp3");
    addWord("DESPERTADOR",["DES","PER","TA","DOR"],"./images/despertador.png","./audio/despertador.mp3");
    addWord("DETERGENTE",["DE","TER","GEN","TE"],"./images/detergente.png","./audio/detergente.mp3");
    addWord("DETETIVE",["DE","TE","TI","VE"],"./images/detetive.png","./audio/detetive.mp3");
    addWord("DEZ",["DEZ"],"./images/dez.png","./audio/dez.mp3");
    addWord("DIA",["DI","A"],"./images/dia.png","./audio/dia.mp3");
    addWord("DIAMANTE",["DI","A","MAN","TE"],"./images/diamante.png","./audio/diamante.mp3");
    addWord("DIÁRIO",["DI","Á","RI","O"],"./images/diario.png","./audio/diario.mp3");
    addWord("DICIONÁRIO",["DI","CI","O","NÁ","RI","O"],"./images/dicionario.png","./audio/dicionario.mp3");
    addWord("DINHEIRO",["DI","NHEI","RO"],"./images/dinheiro.png","./audio/dinheiro.mp3");
    addWord("DINAMITE",["DI","NA","MI","TE"],"./images/dinamite.png","./audio/dinamite.mp3");
    addWord("DINOSSAURO",["DI","NOS","SAU","RO"],"./images/dinossauro.png","./audio/dinossauro.mp3");
    addWord("DIPLOMA",["DI","PLO","MA"],"./images/diploma.png","./audio/diploma.mp3");
    addWord("DIRIGIR",["DI","RI","GIR"],"./images/dirigir.png","./audio/dirigir.mp3");
    addWord("DISCO",["DIS","CO"],"./images/disco.png","./audio/disco.mp3");
    addWord("DISQUETE",["DIS","QUE","TE"],"./images/disquete.png","./audio/disquete.mp3");
    addWord("DOCE",["DO","CE"],"./images/doce.png","./audio/doce.mp3");
    addWord("DOCUMENTO",["DO","CU","MEN","TO"],"./images/documento.png","./audio/documento.mp3");
    addWord("DOENTE",["DO","EN","TE"],"./images/doente.png","./audio/doente.mp3");
    addWord("DOIS",["DO","IS"],"./images/dois.png","./audio/dois.mp3");
    addWord("DÓLAR",["DÓ","LAR"],"./images/dolar.png","./audio/dolar.mp3");
    addWord("DOMADOR",["DO","MA","DOR"],"./images/domador.png","./audio/domador.mp3");
    addWord("DOMINÓ",["DO","MI","NÓ"],"./images/domino.png","./audio/domino.mp3");
    addWord("DORA",["DO","RA"],"./images/dora.png","./audio/dora.mp3");
    addWord("DORMIR",["DOR","MIR"],"./images/dormir.png","./audio/dormir.mp3");
    addWord("DOURADO",["DOU","RA","DO"],"./images/dourado.png","./audio/dourado.mp3");
    addWord("DOUTOR",["DOU","TOR"],"./images/doutor.png","./audio/doutor.mp3");
    addWord("DOZE",["DO","ZE"],"./images/doze.png","./audio/doze.mp3");
    addWord("DRAGÃO",["DRA","GÃO"],"./images/dragao.png","./audio/dragao.mp3");
    addWord("DUENDE",["DU","EN","DE"],"./images/duende.png","./audio/duende.mp3");
    addWord("DUMBO",["DUM","BO"],"./images/dumbo.png","./audio/dumbo.mp3");
    addWord("DUNA",["DU","NA"],"./images/duna.png","./audio/duna.mp3");

    addWord("FACA",["FA","CA"],"./images/faca.png","./audio/faca.mp3");
    addWord("FAIXA",["FAI","XA"],"./images/faixa.png","./audio/faixa.mp3");
    addWord("FAMÍLIA",["FA","MÍ","LIA"],"./images/familia.png","./audio/familia.mp3");
    addWord("FANTASIA",["FAN","TA","SI","A"],"./images/fantasia.png","./audio/fantasia.mp3");
    addWord("FANTASMA",["FAN","TAS","MA"],"./images/fantasma.png","./audio/fantasma.mp3");
    addWord("FANTOCHE",["FAN","TO","CHE"],"./images/fantoche.png","./audio/fantoche.mp3");
    addWord("FARINHA",["FA","RI","NHA"],"./images/farinha.png","./audio/farinha.mp3");
    addWord("FAROFA",["FA","RO","FA"],"./images/farofa.png","./audio/farofa.mp3");
    addWord("FAROL",["FA","ROL"],"./images/farol.png","./audio/farol.mp3");
    addWord("FAZENDA",["FA","ZEN","DA"],"./images/fazenda.png","./audio/fazenda.mp3");
    addWord("FAZENDEIRO",["FA","ZEN","DEI","RO"],"./images/fazendeiro.png","./audio/fazendeiro.mp3");
    addWord("FECHADURA",["FE","CHA","DU","RA"],"./images/fechadura.png","./audio/fechadura.mp3");
    addWord("FEIJÃO",["FE","I","JÃO"],"./images/feijao.png","./audio/feijao.mp3");
    addWord("FEIRA",["FEI","RA"],"./images/feira.png","./audio/feira.mp3");
    addWord("FÊNIX",["FÊ","NIX"],"./images/fenix.png","./audio/fenix.mp3");
    addWord("FERRADURA",["FER","RA","DU","RA"],"./images/ferradura.png","./audio/ferradura.mp3");
    addWord("FERRAMENTAS",["FER","RA","MEN","TAS"],"./images/ferramentas.png","./audio/ferramentas.mp3");
    addWord("FERRO",["FER","RO"],"./images/ferro.png","./audio/ferro.mp3");
    addWord("FESTA",["FES","TA"],"./images/festa.png","./audio/festa.mp3");
    addWord("FILA",["FI","LA"],"./images/fila.png","./audio/fila.mp3");
    addWord("FILÉ",["FI","LÉ"],"./images/file.png","./audio/file.mp3");
    addWord("FILHA",["FI","LHA"],"./images/filha.png","./audio/filha.mp3");
    addWord("FILHO",["FI","LHO"],"./images/filho.png","./audio/filho.mp3");
    addWord("FILHOTE",["FI","LHO","TE"],"./images/filhote.png","./audio/filhote.mp3");
    addWord("FILME",["FIL","ME"],"./images/filme.png","./audio/filme.mp3");
    addWord("FILTRO",["FIL","TRO"],"./images/filtro.png","./audio/filtro.mp3");
    addWord("FIO",["FI","O"],"./images/fio.png","./audio/fio.mp3");
    addWord("FITA",["FI","TA"],"./images/fita.png","./audio/fita.mp3");
    addWord("FIVELA",["FI","VE","LA"],"./images/fivela.png","./audio/fivela.mp3");
    addWord("FLAMINGO",["FLA","MIN","GO"],"./images/flamingo.png","./audio/flamingo.mp3");
    addWord("FLAUTA",["FLAU","TA"],"./images/flauta.png","./audio/flauta.mp3");
    addWord("FLECHA",["FLE","CHA"],"./images/flecha.png","./audio/flecha.mp3");
    addWord("FLOR",["FLOR"],"./images/flor.png","./audio/flor.mp3");
    addWord("FLORESTA",["FLO","RES","TA"],"./images/floresta.png","./audio/floresta.mp3");
    addWord("FOCA",["FO","CA"],"./images/foca.png","./audio/foca.mp3");
    addWord("FOGÃO",["FO","GÃO"],"./images/fogao.png","./audio/fogao.mp3");
    addWord("FOGO",["FO","GO"],"./images/fogo.png","./audio/fogo.mp3");
    addWord("FOGUEIRA",["FO","GUEI","RA"],"./images/fogueira.png","./audio/fogueira.mp3");
    addWord("FOGUETE",["FO","GUE","TE"],"./images/foguete.png","./audio/foguete.mp3");
    addWord("FOLHA",["FO","LHA"],"./images/folha.png","./audio/folha.mp3");
    addWord("FORCA",["FOR","CA"],"./images/forca.png","./audio/forca.mp3");
    addWord("FÔRMA",["FÔR","MA"],"./images/forma.png","./audio/forma.mp3");
    addWord("FORMIGA",["FOR","MI","GA"],"./images/formiga.png","./audio/formiga.mp3");
    addWord("FORNO",["FOR","NO"],"./images/forno.png","./audio/forno.mp3");
    addWord("FÓSFORO",["FÓS","FO","RO"],"./images/fosforo.png","./audio/fosforo.mp3");
    addWord("FOTO",["FO","TO"],"./images/foto.png","./audio/foto.mp3");
    addWord("FRALDA",["FRAL","DA"],"./images/fralda.png","./audio/fralda.mp3");
    addWord("FRANGO",["FRAN","GO"],"./images/frango.png","./audio/frango.mp3");
    addWord("FRANJA",["FRAN","JA"],"./images/franja.png","./audio/franja.mp3");
    addWord("FREIRA",["FREI","RA"],"./images/freira.png","./audio/freira.mp3");
    addWord("FRIGIDEIRA",["FRI","GI","DEI","RA"],"./images/frigideira.png","./audio/frigideira.mp3");
    addWord("FRUTAS",["FRU","TAS"],"./images/frutas.png","./audio/frutas.mp3");
    addWord("FUMAÇA",["FU","MA","ÇA"],"./images/fumaca.png","./audio/fumaca.mp3");
    addWord("FUNIL",["FU","NIL"],"./images/funil.png","./audio/funil.mp3");
    addWord("FURADEIRA",["FU","RA","DEI","RA"],"./images/furadeira.png","./audio/furadeira.mp3");
    addWord("FURO",["FU","RO"],"./images/furo.png","./audio/furo.mp3");
    addWord("FUTEBOL",["FU","TE","BOL"],"./images/futebol.png","./audio/futebol.mp3");
/*
    addWord("GADO",["GA","DO"],"./images/gado.png","./audio/gado.mp3");
    addWord("GAFANHOTO",["GA","FA","NHO","TO"],"./images/gafanhoto.png","./audio/gafanhoto.mp3");
    addWord("GAIOLA",["GAI","O","LA"],"./images/gaiola.png","./audio/gaiola.mp3");
    addWord("GAITA",["GAI","TA"],"./images/gaita.png","./audio/gaita.mp3");
    addWord("GAIVOTA",["GAI","VO","TA"],"./images/GAIVOTA.png","./audio/gaivota.mp3");
    addWord("GALÃO",["GA","LÃO"],"./images/galao.png","./audio/galao.mp3");
    addWord("GALÁXIA",["GA","LÁ","XIA"],"./images/galaxia.png","./audio/galaxia.mp3");
    addWord("GALHO",["GA","LHO"],"./images/galho.png","./audio/galho.mp3");
    addWord("GALERIA",["GA","LE","RI","A"],"./images/galeria.png","./audio/galeria.mp3");
    addWord("GALINHA",["GA","LI","NHA"],"./images/galinha.png","./audio/galinha.mp3");
    addWord("GALINHEIRO",["GA","LI","NHEI","RO"],"./images/galinheiro.png","./audio/galinheiro.mp3");
    addWord("GALO",["GA","LO"],"./images/galo.png","./audio/galo.mp3");
    addWord("GALOCHA",["GA","LO","CHA"],"./images/galocha.png","./audio/galocha.mp3");
    addWord("GALPÃO",["GAL","PÃO"],"./images/galpao.png","./audio/galpao.mp3");
    addWord("GAMBÁ",["GAM","BÁ"],"./images/gamba.png","./audio/gamba.mp3");
    addWord("GANCHO",["GAN","CHO"],"./images/gancho.png","./audio/gancho.mp3");
    addWord("GANDULA",["GAN","DU","LA"],"./images/gandula.png","./audio/gandula.mp3");
    addWord("GANGORRA",["GAN","GOR","RA"],"./images/gangorra.png","./audio/gangorra.mp3");
    addWord("GANHADOR",["GAN","NHA","DOR"],"./images/ganhador.png","./audio/ganhador.mp3");
    addWord("GANSO",["GAN","SO"],"./images/ganso.png","./audio/ganso.mp3");
    addWord("GARAGEM",["GA","RA","GEM"],"./images/garagem.png","./audio/garagem.mp3");
    addWord("GARÇA",["GAR","ÇA"],"./images/garca.png","./audio/garca.mp3");
    addWord("GARÇOM",["GAR","ÇOM"],"./images/garcom.png","./audio/garcom.mp3");
    addWord("GARÇONETE",["GAR","ÇO","NE","TE"],"./images/garconete.png","./audio/garconete.mp3");
    addWord("GARFO",["GAR","FO"],"./images/garfo.png","./audio/garfo.mp3");
    addWord("GARGALHADA",["GAR","GA","LHA","DA"],"./images/gargalhada.png","./audio/gargalhada.mp3");
    addWord("GARGALO",["GAR","GA","LO"],"./images/gargalo.png","./audio/gargalo.mp3");
    addWord("GARGANTA",["GAR","GAN","TA"],"./images/garganta.png","./audio/garganta.mp3");
    addWord("GÁRGULA",["GAR","GU","LA"],"./images/gargula.png","./audio/gargula.mp3");
    addWord("GARI",["GA","RI"],"./images/gari.png","./audio/gari.mp3");
    addWord("GARIMPEIRO",["GA","RIM","PEI","RO"],"./images/garimpeiro.png","./audio/garimpeiro.mp3");
    addWord("GAROTA",["GA","RO","TA"],"./images/garota.png","./audio/garota.mp3");
    addWord("GAROTO",["GA","RO","TO"],"./images/garoto.png","./audio/garoto.mp3");
    addWord("GARRA",["GAR","RA"],"./images/garra.png","./audio/garra.mp3");
    addWord("GARRAFA",["GAR","RA","FA"],"./images/garrafa.png","./audio/garrafa.mp3");
    addWord("GASOLINA",["GA","SO","LI","NA"],"./images/gasolina.png","./audio/gasolina.mp3");
    addWord("GATO",["GA","TO"],"./images/gato.png","./audio/gato.mp3");
    addWord("GAÚCHO",["GA","Ú","CHO"],"./images/gaucho.png","./audio/gaucho.mp3");
    addWord("GAVETA",["GA","VE","TA"],"./images/gaveta.png","./audio/gaveta.mp3");
    addWord("GAVIÃO",["GA","VI","ÃO"],"./images/gaviao.png","./audio/gaviao.mp3");
    addWord("GAZELA",["GA","ZE","LA"],"./images/gazela.png","./audio/gazela.mp3");
    addWord("GELADEIRA",["GE","LA","DEI","RA"],"./images/geladeira.png","./audio/geladeira.mp3");
    addWord("GELATINA",["GE","LA","TI","NA"],"./images/gelatina.png","./audio/gelatina.mp3");
    addWord("GELEIA",["GE","LEI","A"],"./images/geleia.png","./audio/geleia.mp3");
    addWord("GELO",["GE","LO"],"./images/gelo.png","./audio/gelo.mp3");
    addWord("GEMA",["GE","MA"],"./images/gema.png","./audio/gema.mp3");
    addWord("GÊMEOS",["GÊ","ME","OS"],"./images/gemeos.png","./audio/gemeos.mp3");
    addWord("GENERAL",["GE","NE","RAL"],"./images/general.png","./audio/general.mp3");
    addWord("GENGIVA",["GEN","GI","VA"],"./images/gengiva.png","./audio/gengiva.mp3");
    addWord("GIBI",["GI","BI"],"./images/gibi.png","./audio/gibi.mp3");
    addWord("GIGANTE",["GI","GAN","TE"],"./images/.gigante.png","./audio/gigante.mp3");
    addWord("GILETE",["GI","LE","TE"],"./images/gilete.png","./audio/gilete.mp3");
    addWord("GINASTA",["GI","NAS","TA"],"./images/ginasta.png","./audio/ginasta.mp3");
    addWord("GIRAFA",["GI","RA","FA"],"./images/girafa.png","./audio/girafa.mp3");
    addWord("GIRASSOL",["GI","RAS","SOL"],"./images/girasol.png","./audio/girassol.mp3");
    addWord("GIRINO",["GI","RI","NO"],"./images/girino.png","./audio/girino.mp3");
    addWord("GIZ",["GIZ"],"./images/giz.png","./audio/giz.mp3");
    addWord("GLADIADOR",["GLA","DI","A","DOR"],"./images/gladiador.png","./audio/gladiador.mp3");
    addWord("GLOBO",["GLOBO"],"./images/globo.png","./audio/globo.mp3");
    addWord("GNOMO",["GNO","MO"],"./images/gnomo.png","./audio/gnomo.mp3");
    addWord("GOIABA",["GOI","A","BA"],"./images/goiaba.png","./audio/goiaba.mp3");
    addWord("GOLA",["GO","LA"],"./images/gola.png","./audio/gola.mp3");
    addWord("GOLEIRO",["GO","LEI","RO"],"./images/goleiro.png","./audio/goleiro.mp3");
    addWord("GOLFE",["GOL","FE"],"./images/golfe.png","./audio/golfe.mp3");
    addWord("GOLFINHO",["GOL","FI","NHO"],"./images/golfinho.png","./audio/golfinho.mp3");
    addWord("GORILA",["GO","RI","LA"],"./images/gorila.png","./audio/gorila.mp3");
    addWord("GÔNDOLA",["GÔN","DO","LA"],"./images/gondola.png","./audio/gondola.mp3");
    addWord("GOSMA",["GOS","MA"],"./images/gosma.png","./audio/gosma.mp3");
    addWord("GOTA",["GO","TA"],"./images/gota.png","./audio/gota.mp3");
    addWord("GOTEIRA",["GO","TEI","RA"],"./images/goteira.png","./audio/goteira.mp3");
    addWord("GRADE",["GRA","DE"],"./images/grade.png","./audio/grade.mp3");
    addWord("GRAFITE",["GRA","FI","TE"],"./images/grafite.png","./audio/grafite.mp3");
    addWord("GRAMA",["GRA","MA"],"./images/grama.png","./audio/grama.mp3");
    addWord("GRAMPEADOR",["GRAM","PE","A","DOR"],"./images/grampeador.png","./audio/grampeador.mp3");
    addWord("GRAMPO",["GRAM","PO"],"./images/grampo.png","./audio/grampo.mp3");
    addWord("GRAVATA",["GRA","VA","TA"],"./images/gravata.png","./audio/gravata.mp3");
    addWord("GRAXA",["GRA","XA"],"./images/graxa.png","./audio/graxa.mp3");
    addWord("GRILO",["GRI","LO"],"./images/grilo.png","./audio/grilo.mp3");
    addWord("GRUTA",["GRU","TA"],"./images/gruta.png","./audio/gruta.mp3");
    addWord("GUARANÁ",["GUA","RA","NÁ"],"./images/guarana.png","./audio/guarana.mp3");
    addWord("GUARDA-CHUVA",["GUAR","DA","-","CHU","VA"],"./images/guarda-chuva.png","./audio/guarda-chuva.mp3");
    addWord("GUARDA-ROUPA",["GUAR","DA","-","ROU","PA"],"./images/guarda-roupa.png","./audio/guarda-roupa.mp3");
    addWord("GUARDA-SOL",["GUAR","DA","-","SOL"],"./images/guarda-sol.png","./audio/guarda-sol.mp3");
    addWord("GUDE",["GU","DE"],"./images/gude.png","./audio/gude.mp3");
    addWord("GUIDÃO",["GUI","DÃO"],"./images/guidao.png","./audio/guidao.mp3");
    addWord("GUINDASTE",["GUIN","DAS","TE"],"./images/guindaste.png","./audio/guindaste.mp3");
    addWord("GUIRLANDA",["GUIR","LAN","DA"],"./images/guirlanda.png","./audio/guirlanda.mp3");

    addWord("HAMBÚRGUER",["HAM","BÚR","GUER"],"./images/hamburguer.png","./audio/hamburguer.mp3");
    addWord("HANDEBOL",["HAN","DE","BOL"],"./images/handebol.png","./audio/handebol.mp3");
    addWord("HANGAR",["HAN","GAR"],"./images/hangar.png","./audio/hangar.mp3");
    addWord("HARPA",["HAR","PA"],"./images/harpa.png","./audio/harpa.mp3");
    addWord("HASTE",["HAS","TE"],"./images/haste.png","./audio/haste.mp3");
    addWord("HÉLICE",["HÉ","LI","CE"],"./images/helice.png","./audio/helice.mp3");
    addWord("HELICÓPTERO",["HE","LI","CÓP","TE","RO"],"./images/helicoptero.png","./audio/helicoptero.mp3");
    addWord("HÉRCULES",["HÉR","CU","LES"],"./images/hercules.png","./audio/hercules.mp3");
    addWord("HERÓI",["HE","RÓI"],"./images/heroi.png","./audio/heroi.mp3");
    addWord("HEXÁGONO",["HE","XÁ","GO","NO"],"./images/hexagono.png","./audio/hexagono.mp3");
    addWord("HIDRANTE",["HI","DRAN","TE"],"./images/hidrante.png","./audio/hidrante.mp3");
    addWord("HIDRELÉTRICA",["HI","DRE","LÉ","TRI","CA"],"./images/hidreletrica.png","./audio/hidreletrica.mp3");
    addWord("HIENA",["HI","E","NA"],"./images/hiena.png","./audio/hiena.mp3");
    addWord("HIPOPÓTAMO",["HI","PO","PÓ","TA","MO"],"./images/hipopotamo.png","./audio/hipopotamo.mp3");
    addWord("HOLOFOTE",["HO","LO","FO","TE"],"./images/holofote.png","./audio/holofote.mp3");
    addWord("HOLOGRAMA",["HO","LO","GRA","MA"],"./images/holograma.png","./audio/holograma.mp3");
    addWord("HOMEM",["HO","MEM"],"./images/homem.png","./audio/homem.mp3");
    addWord("HORTA",["HOR","TA"],"./images/horta.png","./audio/horta.mp3");
    addWord("HORTELÃ",["HOR","TE","LÃ"],"./images/hortela.png","./audio/hortela.mp3");
    addWord("HOSPITAL",["HOSPITAL"],"./images/hospital.png","./audio/hospital.mp3");
    addWord("HUMANO",["HU","MA","NO"],"./images/humano.png","./audio/humano.mp3");
    
    addWord("JABUTI",["JA","BU","TI"],"./images/jabuti.png","./audio/jabuti.mp3");
    addWord("JABUTICABA",["JA","BU","TI","CA","BA"],"./images/jabuticaba.png","./audio/jabuticaba.mp3");
    addWord("JACA",["JA","CA"],"./images/jaca.png","./audio/jaca.mp3");
    addWord("JACARÉ",["JA","CA","RÉ"],"./images/jacare.png","./audio/jacare.mp3");
    addWord("JAGUAR",["JA","GUAR"],"./images/jaguar.png","./audio/jaguar.mp3");
    addWord("JALECO",["JA","LE","CO"],"./images/jaleco.png","./audio/jaleco.mp3");
    addWord("JANELA",["JA","NE","LA"],"./images/janela.png","./audio/janela.mp3");
    addWord("JANTAR",["JAN","TAR"],"./images/jantar.png","./audio/jantar.mp3");
    addWord("JAPONÊS",["JA","PO","NÊS"],"./images/japones.png","./audio/japones.mp3");
    addWord("JAQUETA",["JA","QUE","TA"],"./images/jaqueta.png","./audio/jaqueta.mp3");
    addWord("JARDIM",["JAR","DIM"],"./images/jardim.png","./audio/jardim.mp3");
    addWord("JARRA",["JAR","RA"],"./images/jarra.png","./audio/jarra.mp3");
    addWord("JAULA",["JAU","LA"],"./images/jaula.png","./audio/jaula.mp3");
    addWord("JAVALI",["JA","VA","LI"],"./images/javali.png","./audio/javali.mp3");
    addWord("JEGUE",["JE","GUE"],"./images/jegue.png","./audio/jegue.mp3");
    addWord("JIBOIA",["JI","BOI","A"],"./images/jiboia.png","./audio/jiboia.mp3");
    addWord("JILÓ",["JI","LÓ"],"./images/jilo.png","./audio/jilo.mp3");
    addWord("JIPE",["JI","PE"],"./images/jipe.png","./audio/jipe.mp3");
    addWord("JOANINHA",["JO","A","NI","NHA"],"./images/joaninha.png","./audio/joaninha.mp3");
    addWord("JOELHO",["JO","E","LHO"],"./images/joelho.png","./audio/joelho.mp3");
    addWord("JOGADOR",["JO","GA","DOR"],"./images/jogador.png","./audio/jogador.mp3");
    addWord("JOGO",["JO","GO"],"./images/jogo.png","./audio/jogo.mp3");
    addWord("JORNAL",["JOR","NAL"],"./images/jornal.png","./audio/jornal.mp3");
    addWord("JUDÔ",["JU","DÔ"],"./images/judo.png","./audio/judo.mp3");
    addWord("JUIZ",["JU","IZ"],"./images/juiz.png","./audio/juiz.mp3");
    addWord("JUMENTO",["JU","MEN","TO"],"./images/jumento.png","./audio/jumento.mp3");
    
    addWord("KARAOKÊ",["KA","RA","O","KÊ"],"./images/karaoke.png","./audio/karaoke.mp3");
    addWord("KETCHUP",["KET","CHUP"],"./images/ketchup.png","./audio/ketchup.mp3");
    addWord("KIWI",["KI","WI"],"./images/kiwi.png","./audio/kiwi.mp3");
    
    addWord("LÃ",["LÃ"],"./images/la.png","./audio/la.mp3");
    addWord("LÁBIO",["LÁ","BIO"],"./images/labio.png","./audio/labio.mp3");
    addWord("LABIRINTO",["LA","BI","RIN","TO"],"./images/labirinto.png","./audio/labirinto.mp3");
    addWord("LAÇO",["LA","ÇO"],"./images/laco.png","./audio/laco.mp3");
    addWord("LADEIRA",["LA","DEI","RA"],"./images/ladeira.png","./audio/ladeira.mp3");
    addWord("LADRÃO",["LA","DRÃO"],"./images/ladrao.png","./audio/ladrao.mp3");
    addWord("LADRILHO",["LA","DRI","LHO"],"./images/ladrilho.png","./audio/ladrilho.mp3");
    addWord("LAGARTA",["LA","GAR","TA"],"./images/lagarta.png","./audio/lagarta.mp3");
    addWord("LAGARTIXA",["LA","GAR","TI","XA"],"./images/lagartixa.png","./audio/lagartixa.mp3");
    addWord("LAGO",["LA","GO"],"./images/lago.png","./audio/lago.mp3");
    addWord("LAGOSTA",["LA","GOS","TA"],"./images/lagosta.png","./audio/lagosta.mp3");
    addWord("LÁGRIMA",["LÁ","GRI","MA"],"./images/lagrima.png","./audio/lagrima.mp3");
    addWord("LAMA",["LA","MA"],"./images/lama.png","./audio/lama.mp3");
    addWord("LÂMPADA",["LÂM","PA","DA"],"./images/lampada.png","./audio/lampada.mp3");
    addWord("LANCHEIRA",["LAN","CHEI","RA"],"./images/lancheira.png","./audio/lancheira.mp3");
    addWord("LANTERNA",["LAN","TER","NA"],"./images/lanterna.png","./audio/lanterna.mp3");
    addWord("LÁPIS",["LÁ","PIS"],"./images/lapis.png","./audio/lapis.mp3");
    addWord("LARANJA",["LA","RAN","JA"],"./images/laranja.png","./audio/laranja.mp3");
    addWord("LAREIRA",["LA","REI","RA"],"./images/lareira.png","./audio/lareira.mp3");
    addWord("LATA",["LA","TA"],"./images/lata.png","./audio/lata.mp3");
    addWord("LAVA",["LA","VA"],"./images/lava.png","./audio/lava.mp3");
    addWord("LEÃO",["LE","ÃO"],"./images/leao.png","./audio/leao.mp3");
    addWord("LEGUMES",["LE","GU","MES"],"./images/legumes.png","./audio/legumes.mp3");
    addWord("LEITÃO",["LEI","TÃO"],"./images/leitao.png","./audio/leitao.mp3");
    addWord("LEITE",["LEI","TE"],"./images/leite.png","./audio/leite.mp3");
    addWord("LEITURA",["LEI","TU","RA"],"./images/leitura.png","./audio/leitura.mp3");
    addWord("LENÇO",["LEN","ÇO"],"./images/lenco.png","./audio/lenco.mp3");
    addWord("LENHA",["LE","NHA"],"./images/lenha.png","./audio/lenha.mp3");
    addWord("LENHADOR",["LE","NHA","DOR"],"./images/lenhador.png","./audio/lenhador.mp3");
    addWord("LESMA",["LES","MA"],"./images/lesma.png","./audio/lesma.mp3");
    addWord("LHAMA",["LHA","MA"],"./images/lhama.png","./audio/lhama.mp3");
    addWord("LIBÉLULA",["LI","BÉ","LU","LA"],"./images/libelula.png","./audio/libelula.mp3");
    addWord("LIMÃO",["LI","MÃO"],"./images/limao.png","./audio/limao.mp3");
    addWord("LÍNGUA",["LÍN","GUA"],"./images/lingua.png","./audio/lingua.mp3");
    addWord("LINGUIÇA",["LIN","GUI","ÇA"],"./images/linguica.png","./audio/linguica.mp3");
    addWord("LINHA",["LI","NHA"],"./images/linha.png","./audio/linha.mp3");
    addWord("LIQUIDIFICADOR",["LI","QUI","DI","FI","CA","DOR"],"./images/liquidificador.png","./audio/liquidificador.mp3");
    addWord("LISTA",["LIS","TA"],"./images/lista.png","./audio/lista.mp3");
    addWord("LISTRAS",["LIS","TRAS"],"./images/listras.png","./audio/listras.mp3");
    addWord("LIVRO",["LI","VRO"],"./images/livro.png","./audio/livro.mp3");
    addWord("LIXA",["LI","XA"],"./images/lixa.png","./audio/lixa.mp3");
    addWord("LIXEIRA",["LI","XEI","RA"],"./images/lixeira.png","./audio/lixeira.mp3");
    addWord("LIXO",["LI","XO"],"./images/lixo.png","./audio/lixo.mp3");
    addWord("LOBISOMEM",["LO","BI","SO","MEM"],"./images/lobisomem.png","./audio/lobisomem.mp3");
    addWord("LOBO",["LO","BO"],"./images/lobo.png","./audio/lobo.mp3");
    addWord("LOJA",["LO","JA"],"./images/loja.png","./audio/loja.mp3");
    addWord("LOUÇA",["LOU","ÇA"],"./images/louca.png","./audio/louca.mp3");
    addWord("LOUSA",["LOU","SA"],"./images/lousa.png","./audio/lousa.mp3");
    addWord("LUA",["LU","A"],"./images/lua.png","./audio/lua.mp3");
    addWord("LUDO",["LU","DO"],"./images/ludo.png","./audio/ludo.mp3");
    addWord("LULA",["LU","LA"],"./images/lula.png","./audio/lula.mp3");
    addWord("LUNETA",["LU","NE","TA"],"./images/luneta.png","./audio/luneta.mp3");
    addWord("LUPA",["LU","PA"],"./images/lupa.png","./audio/lupa.mp3");
    addWord("LUSTRE",["LUS","TRE"],"./images/lustre.png","./audio/lustre.mp3");
    addWord("LUVAS",["LU","VAS"],"./images/luvas.png","./audio/luvas.mp3");

    addWord("MAÇÃ",["MA","ÇÃ"],"./images/maca.png","./audio/maca.mp3");
    addWord("MACACÃO",["MA","CA","CÃO"],"./images/macacao.png","./audio/macacao.mp3");
    addWord("MACACO",["MA","CA","CO"],"./images/macaco.png","./audio/macaco.mp3");
    addWord("MAÇANETA",["MA","ÇA","NE","TA"],"./images/macaneta.png","./audio/macaneta.mp3");
    addWord("MACARRÃO",["MA","CAR","RÃO"],"./images/macarrao.png","./audio/macarrao.mp3");
    addWord("MACHADO",["MACHADO"],"./images/machado.png","./audio/machado.mp3");
    addWord("MACHUCADO",["MA","CHU","CA","DO"],"./images/machucado.png","./audio/machucado.mp3");
    addWord("MADEIRA",["MA","DEI","RA"],"./images/madeira.png","./audio/madeira.mp3");
    addWord("MADRASTA",["MA","DRAS","TA"],"./images/madrasta.png","./audio/madrasta.mp3");
    addWord("MADRINHA",["MA","DRI","NHA"],"./images/madrinha.png","./audio/madrinha.mp3");
    addWord("MÃE",["MÃE"],"./images/mae.png","./audio/mae.mp3");
    addWord("MAESTRO",["MA","ES","TRO"],"./images/maestro.png","./audio/maestro.mp3");
    addWord("MÁGICO",["MÁ","GI","CO"],"./images/magico.png","./audio/magico.mp3");
    addWord("MAGMA",["MAG","MA"],"./images/magma.png","./audio/magma.mp3");
    addWord("MALA",["MA","LA"],"./images/mala.png","./audio/mala.mp3");
    addWord("MALABARISMO",["MA","LA","BA","RIS","MO"],"./images/malabarismo.png","./audio/malabarismo.mp3");
    addWord("MAMÃO",["MA","MÃO"],"./images/mamao.png","./audio/mamao.mp3");
    addWord("MAMUTE",["MA","MU","TE"],"./images/mamute.png","./audio/mamute.mp3");
    addWord("MANCHA",["MAN","CHA"],"./images/mancha.png","./audio/mancha.mp3");
    addWord("MANDIOCA",["MAN","DI","O","CA"],"./images/mandioca.png","./audio/mandioca.mp3");
    addWord("MANEQUIM",["MA","NE","QUIM"],"./images/manequim.png","./audio/manequim.mp3");
    addWord("MANGA",["MAN","GA"],"./images/manga.png","./audio/manga.mp3");
    addWord("MANGUEIRA",["MAN","GUEI","RA"],"./images/mangueira.png","./audio/mangueira.mp3");
    addWord("MANIVELA",["MA","NI","VE","LA"],"./images/manivela.png","./audio/manivela.mp3");
    addWord("MANTEIGA",["MAN","TEI","GA"],"./images/manteiga.png","./audio/manteiga.mp3");
    addWord("MÃO",["MÃO"],"./images/mao.png","./audio/mao.mp3");
    addWord("MAPA",["MA","PA"],"./images/mapa.png","./audio/mapa.mp3");
    addWord("MAQUIAGEM",["MA","QUI","A","GEM"],"./images/maquiagem.png","./audio/maquiagem.mp3");
    addWord("MARACUJÁ",["MA","RA","CU","JÁ"],"./images/maracuja.png","./audio/maracuja.mp3");
    addWord("MARINHEIRO",["MA","RI","NHEI","RO"],"./images/marinheiro.png","./audio/marinheiro.mp3");
    addWord("MARTELO",["MAR","TE","LO"],"./images/martelo.png","./audio/martelo.mp3");
    addWord("MÁSCARA",["MÁS","CA","RA"],"./images/mascara.png","./audio/mascara.mp3");
    addWord("MASSA",["MAS","SA"],"./images/massa.png","./audio/massa.mp3");
    addWord("MATERIAL",["MA","TE","RI","AL"],"./images/material.png","./audio/material.mp3");
    addWord("MECÂNICO",["ME","CÂ","NI","CO"],"./images/mecanico.png","./audio/mecanico.mp3");
    addWord("MEDALHA",["ME","DA","LHA"],"./images/medalha.png","./audio/medalha.mp3");
    addWord("MÉDICO",["MÉ","DI","CO"],"./images/medico.png","./audio/medico.mp3");
    addWord("MEDITAÇÃO",["ME","DI","TA","ÇÃO"],"./images/meditacao.png","./audio/meditacao.mp3");
    addWord("MEGAFONE",["ME","GA","FO","NE"],"./images/megafone.png","./audio/megafone.mp3");
    addWord("MEIAS",["MEI","AS"],"./images/meias.png","./audio/meias.mp3");
    addWord("MELANCIA",["ME","LAN","CIA"],"./images/melancia.png","./audio/melancia.mp3");
    addWord("MELÃO",["ME","LÃO"],"./images/melao.png","./audio/melao.mp3");
    addWord("MENU",["ME","NU"],"./images/menu.png","./audio/menu.mp3");
    addWord("MERCADO",["MER","CA","DO"],"./images/mercado.png","./audio/mercado.mp3");
    addWord("MERGULHAR",["MER","GU","LHAR"],"./images/mergulhar.png","./audio/mergulhar.mp3");
    addWord("MESA",["ME","SA"],"./images/mesa.png","./audio/mesa.mp3");
    addWord("METAL",["ME","TAL"],"./images/metal.png","./audio/metal.mp3");
    addWord("METEORO",["ME","TE","O","RO"],"./images/meteoro.png","./audio/meteoro.mp3");
    addWord("METRÔ",["ME","TRÔ"],"./images/metro.png","./audio/metro.mp3");
    addWord("MEXERICA",["ME","XE","RI","CA"],"./images/mexerica.png","./audio/mexerica.mp3");
    addWord("MICO",["MI","CO"],"./images/mico.png","./audio/mico.mp3");
    addWord("MICRÓBIO",["MI","CRÓ","BIO"],"./images/microbio.png","./audio/microbio.mp3");
    addWord("MICROFONE",["MI","CRO","FO","NE"],"./images/microfone.png","./audio/microfone.mp3");
    addWord("MIGALHA",["MI","GA","LHA"],"./images/migalha.png","./audio/migalha.mp3");
    addWord("MILHO",["MI","LHO"],"./images/milho.png","./audio/milho.mp3");
    addWord("MINEIRO",["MI","NEI","RO"],"./images/mineiro.png","./audio/mineiro.mp3");
    addWord("MINHOCA",["MI","NHO","CA"],"./images/minhoca.png","./audio/minhoca.mp3");
    addWord("MIOLO",["MI","O","LO"],"./images/miolo.png","./audio/miolo.mp3");
    addWord("MOCHILA",["MO","CHI","LA"],"./images/mochila.png","./audio/mochila.mp3");
    addWord("MOEDA",["MO","E","DA"],"./images/moeda.png","./audio/moeda.mp3");
    addWord("MOFO",["MO","FO"],"./images/mofo.png","./audio/mofo.mp3");
    addWord("MOINHO",["MO","I","NHO"],"./images/moinho.png","./audio/moinho.mp3");
    addWord("MOLA",["MO","LA"],"./images/mola.png","./audio/mola.mp3");
    addWord("MOLDE",["MOL","DE"],"./images/molde.png","./audio/molde.mp3");
    addWord("MOLDURA",["MOL","DU","RA"],"./images/moldura.png","./audio/moldura.mp3");
    addWord("MOLETOM",["MO","LE","TOM"],"./images/moletom.png","./audio/moletom.mp3");
    addWord("MONGE",["MON","GE"],"./images/monge.png","./audio/monge.mp3");
    addWord("MONITOR",["MO","NI","TOR"],"./images/monitor.png","./audio/monitor.mp3");
    addWord("MONSTRO",["MONS","TRO"],"./images/monstro.png","./audio/monstro.mp3");
    addWord("MONTANHA",["MON","TA","NHA"],"./images/montanha.png","./audio/montanha.mp3");
    addWord("MORANGO",["MO","RAN","GO"],"./images/morango.png","./audio/morango.mp3");
    addWord("MORCEGO",["MOR","CE","GO"],"./images/morcego.png","./audio/morcego.mp3");
    addWord("MORTADELA",["MOR","TA","DE","LA"],"./images/mortadela.png","./audio/mortadela.mp3");
    addWord("MOSAICO",["MO","SAI","CO"],"./images/mosaico.png","./audio/mosaico.mp3");
    addWord("MOSCA",["MOSCA"],"./images/mosca.png","./audio/mosca.mp3");
    addWord("MOTOCICLETA",["MO","TO","CI","CLE","TA"],"./images/motocicleta.png","./audio/motocicleta.mp3");
    addWord("MUDA",["MU","DA"],"./images/muda.png","./audio/muda.mp3");
    addWord("MULETA",["MU","LE","TA"],"./images/muleta.png","./audio/muleta.mp3");
    addWord("MULHER",["MU","LHER"],"./images/mulher.png","./audio/mulher.mp3");
    addWord("MÚMIA",["MÚ","MIA"],"./images/mumia.png","./audio/mumia.mp3");
    addWord("MUNDO",["MUN","DO"],"./images/mundo.png","./audio/mundo.mp3");
    addWord("MURALHA",["MU","RA","LHA"],"./images/muralha.png","./audio/muralha.mp3");
    addWord("MURO",["MU","RO"],"./images/muro.png","./audio/muro.mp3");
    addWord("MÚSCULO",["MÚS","CU","LO"],"./images/musculo.png","./audio/musculo.mp3");
    addWord("MUSEU",["MU","SEU"],"./images/museu.png","./audio/museu.mp3");
    addWord("MÚSICA",["MÚ","SI","CA"],"./images/musica.png","./audio/musica.mp3");

    addWord("NADADOR",["NA","DA","DOR"],"./images/nadador.png","./audio/nadador.mp3");
    addWord("NARIZ",["NA","RIZ"],"./images/nariz.png","./audio/nariz.mp3");
    addWord("NATAL",["NA","TAL"],"./images/natal.png","./audio/natal.mp3");
    addWord("NATUREZA",["NA","TU","RE","ZA"],"./images/natureza.png","./audio/natureza.mp3");
    addWord("NAVE",["NA","VE"],"./images/nave.png","./audio/nave.mp3");
    addWord("NAVIO",["NA","VIO"],"./images/navio.png","./audio/navio.mp3");
    addWord("NEBLINA",["NE","BLI","NA"],"./images/neblina.png","./audio/neblina.mp3");
    addWord("NENÉM",["NE","NÉM"],"./images/nenem.png","./audio/nenem.mp3");
    addWord("NETO",["NE","TO"],"./images/neto.png","./audio/neto.mp3");
    addWord("NETUNO",["NE","TU","NO"],"./images/netuno.png","./audio/netuno.mp3");
    addWord("NEVE",["NE","VE"],"./images/neve.png","./audio/neve.mp3");
    addWord("NINHO",["NI","NHO"],"./images/ninho.png","./audio/ninho.mp3");
    addWord("NINJA",["NIN","JA"],"./images/ninja.png","./audio/ninja.mp3");
    addWord("NOITE",["NOI","TE"],"./images/noite.png","./audio/noite.mp3");
    addWord("NOVELO",["NO","VE","LO"],"./images/novelo.png","./audio/novelo.mp3");
    addWord("NÚMEROS",["NÚ","ME","ROS"],"./images/numeros.png","./audio/numeros.mp3");
    addWord("NUVEM",["NU","VEM"],"./images/nuvem.png","./audio/nuvem.mp3");
    
    addWord("",[""],"./images/.png","./audio/.mp3");
*/
    
    return {getWords}
})();

const makeForm = (function () {
    startButton.addEventListener('click', () => makeInfo());
    selectLetters.addEventListener('click', () => selectAllLetters());
    selectRemove.addEventListener('click', () => SelectAllremove());

    const info = [];

    const changeColor = (letter) => {
        if (letter.className == "selected") {
            letter.classList.remove("selected")
        } else {
            letter.className = "selected";
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

    let selectAll = true
    const selectAllLetters = () => {
        for (const child of letterSelection.children) {
            if (selectAll == true) {
                child.className = "selected";
            } else {
                child.classList.remove("selected")
            }
        }
        if (selectAll == true) {
            selectAll = false;
        } else {
            selectAll = true;
        }
    }

    let removeAll = false
    const SelectAllremove = () => {
        for (const child of removeSelection.children) {
            if (removeAll == true) {
                child.className = "selected";
            } else {
                child.classList.remove("selected")
            }
        }
        if (removeAll == true) {
            removeAll = false;
        } else {
            removeAll = true;
        }
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
        addButton("Preencher vogais", gameSelection);
        addButton("Preencher consoantes", gameSelection);
        addButton("Sílaba inicial", gameSelection);
        addButton("Sílaba final", gameSelection);
        //addButton("Juntar sílabas", gameSelection);
        //addButton("Desembaralhar letras", gameSelection);
        addButton("Forca", gameSelection);
        addButton("Ditado", gameSelection);
        addButton("Consoante + H", removeSelection);
        addButton("Consoante + L", removeSelection);
        addButton("Consoante + R", removeSelection);
        addButton("GU + E/I", removeSelection);
        addButton("SS", removeSelection);
        addButton("Ç", removeSelection);
        addButton("Acentuação", removeSelection);
        addButton("Silabas com 3 letras", removeSelection);
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
        const removeGu = (value) => {
            return value.word.indexOf("GUE") == -1 && value.word.indexOf("GUI") == -1;
        }

        const remove3Letter = (value) => {
            for (let i = 0; i < value.syllables.length; i++) {
                if (value.syllables[i].length > 2) {
                    return false;
                }
            }
            return true;
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
            } else if (wordsToRemove[i] == "GU + E/I") {
                allWords = allWords.filter(removeGu);
            } else if (wordsToRemove[i] == "Silabas com 3 letras") {
                allWords = allWords.filter(remove3Letter);
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

    const selectForca = (value) => {
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
    let usableForca = allWords.filter(selectForca);
    let usableVogais = allWords;
    let usableConsoantes = allWords;

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
        audioImg.src = "./systemimages/playAudio.png"
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

    const makeDisplay2 = (Question, imgSrc, audioSrc) => {
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
        audioImg.src = "./systemimages/playAudio.png"
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
                if (usableForca.length > 0) {
                    makeForca();
                } else {
                    endGame();
                }
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
            case "Preencher vogais": {
                if (usableVogais.length > 0) {
                    makeVogais();
                } else {
                    endGame();
                }
                break;
            }
            case "Preencher consoantes": {
                if (usableConsoantes.length > 0) {
                    makeConsoantes();
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

    const selectWordForca = () => {
        return Math.floor(Math.random() * usableForca.length);
    }

    const selectWordVogais = () => {
        return Math.floor(Math.random() * usableVogais.length);
    }

    const selectWordConsoantes = () => {
        return Math.floor(Math.random() * usableConsoantes.length);
    }

    const deleteWord = (word) => {
        usableWords = usableWords.filter(value => value != word);
        usableFinalWords = usableFinalWords.filter(value => value != word);
        usableSyllable = usableSyllable.filter(value => value != word);
        usableFinalSyllable = usableFinalSyllable.filter(value => value != word);
        usableDitado = usableDitado.filter(value => value != word);
        usableForca = usableForca.filter(value => value != word);
        usableVogais = usableVogais.filter(value => value != word);
        usableConsoantes = usableForca.filter(value => value != word);
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
            let letter = consonants[Math.floor(Math.random() * consonants.length)];
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
            let letter = consonants[Math.floor(Math.random() * consonants.length)];
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

        makeDisplay2("COMO SE ESCREVE?", word.img, word.audio);

        const game = document.querySelector('#Game');

        const answer = document.createElement('div');
        answer.className = "ditado";
        
        let firstTest = true

        const input = document.createElement('input');
        input.setAttribute("type", "text");
        input.setAttribute("spellcheck", "false");
        answer.appendChild(input);

        const button = document.createElement('button');
        let textArray = transformText("ENVIAR");
        let textString = textArray[0];
        if (textArray.length > 1) {
            textString = textString + "\r\n" + textArray[1];
        }
        button.innerText = textString
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

    const makeForca = () => {
        const word = usableForca[selectWordForca()];
        const wordTextForca = transformText(word.word);
        const imgHang = ["./systemimages/0.png","./systemimages/1.png","./systemimages/2.png",
            "./systemimages/3.png", "./systemimages/4.png", "./systemimages/5.png",
            "./systemimages/6.png"]
        let lettersUsed = ["-"]

        let stage = 0
        const updateStage = () => {
            stage += 1
        }

        const MakeDisplayForca = (function () {
            const question = document.createElement('div');
            const hangmanGame = document.createElement('div');

            hangmanGame.className = "Forca";
            question.className = "question";
            
            const questionText = transformText("Forca");
    
            for (let i = 0; i < questionText.length;  i++){
                const questionTEXT = document.createElement('div');
                questionTEXT.textContent = questionText[i];
                question.appendChild(questionTEXT);
            }

            Game.appendChild(question);

            const img = document.createElement('img');
            img.src = word.img;
            hangmanGame.appendChild(img);

            const hangmanImg = document.createElement('img');
            hangmanImg.src = imgHang[0];
            hangmanGame.appendChild(hangmanImg);

            const updateHangmanImg = () => {
                hangmanImg.src= imgHang[stage]
            }
            
            const audioNText = document.createElement('div');
    
            const audioImg = document.createElement('img');
            audioImg.src = "./systemimages/playAudio.png"
            const audioHelp = new Audio(word.audio);
            audioImg.addEventListener('click', function(event) {
                audioHelp.play();
            })
            audioNText.appendChild(audioImg);

            const wordText = document.createElement('div');

            const makeHangmanText = () => {
                wordText.textContent = "";
                for (let i = 0; i < wordTextForca.length;  i++){
                    const textGroup = document.createElement('div');
                    textGroup.className = "ditadoWord"
                    const wordPiecesText = wordTextForca[i].split("");
                    for (let j = 0; j < wordPiecesText.length; j++){
                        const letterSpace = document.createElement('div');
                        for (let k = 0; k < lettersUsed.length; k++){
                            if (lettersUsed[k] == "A") {
                                if (wordPiecesText[j].toUpperCase() == "A" || wordPiecesText[j].toUpperCase() == "Á" || wordPiecesText[j].toUpperCase() == "Â" ||
                                    wordPiecesText[j].toUpperCase() == "Ã"){
                                        letterSpace.textContent = wordPiecesText[j];
                                }
                            } else if (lettersUsed[k] == "E") {
                                if (wordPiecesText[j].toUpperCase() == "E" || wordPiecesText[j].toUpperCase() == "É" || wordPiecesText[j].toUpperCase() == "Ê"){
                                    letterSpace.textContent = wordPiecesText[j];
                                }
                            } else if (lettersUsed[k] == "I") {
                                if (wordPiecesText[j].toUpperCase() == "I" || wordPiecesText[j].toUpperCase() == "Í" ){
                                    letterSpace.textContent = wordPiecesText[j];
                                }
                            } else if (lettersUsed[k] == "O") {
                                if (wordPiecesText[j].toUpperCase() == "O" || wordPiecesText[j].toUpperCase() == "Ó" || wordPiecesText[j].toUpperCase() == "Ô" || 
                                    wordPiecesText[j].toUpperCase() == "Õ"){
                                        letterSpace.textContent = wordPiecesText[j];
                                }
                            } else if (lettersUsed[k] == "U") {
                                if (wordPiecesText[j].toUpperCase() == "U" || wordPiecesText[j].toUpperCase() == "Ú"){
                                    letterSpace.textContent = wordPiecesText[j];
                                }
                            } else if (lettersUsed[k] == "C") {
                                if (wordPiecesText[j].toUpperCase() == "C" || wordPiecesText[j].toUpperCase() == "Ç"){
                                    letterSpace.textContent = wordPiecesText[j];
                                }
                            }  else if (wordPiecesText[j].toUpperCase() == lettersUsed[k]){
                                letterSpace.textContent = wordPiecesText[j];
                            }
                        }
                        textGroup.appendChild(letterSpace);
                    }
                    wordText.appendChild(textGroup);
                }
            }

            const getAnswer = () => {
                const fullWord = [];
                wordText.firstChild.childNodes.forEach((element) => {
                    if (element.textContent) {
                        fullWord.push(element.textContent);
                    }
                })
                let answer = fullWord.join("");
                return answer;
            }
            
            makeHangmanText();
            audioNText.appendChild(wordText);
            hangmanGame.appendChild(audioNText);
            Game.appendChild(hangmanGame)
            return {updateHangmanImg, makeHangmanText, getAnswer};
        })(); 

        const game = document.querySelector('#Game');

        const buttons = document.createElement('div');
        buttons.className = "buttonsDitado";
        
        const makeNextScreenButton = () => {
            buttons.textContent = "";
            buttons.classList.remove("buttonsDitado");
            buttons.className = "nextButton" ;
            const button = document.createElement('button');
            button.addEventListener('click', function(event) {
                deleteWord(word);
                playRound();
            })
            const textArray = transformText("PRÓXIMO");
            let textString = textArray[0];
            if (textArray.length > 1) {
                textString = textString + "\r\n" + textArray[1];
            }
            button.innerText = textString
            buttons.appendChild(button);
        }
                
        for (let i = 65; i < 91; i++) {
            const button = document.createElement('div');
            const textArray = transformText(String.fromCharCode(i));
            let textString = textArray[0];
            if (textArray.length > 1) {
                textString = textString + "\r\n" + textArray[1];
            }
            button.textContent = textString;
            let firstTime = "Yes"

            const testLetter = (letter) => {
                for (let i = 0; i < word.word.length; i++) {
                    if (letter == "A") {
                        if (word.word[i] == "A" || word.word[i] == "Á" || word.word[i] == "Â" || word.word[i] == "Ã"){
                            button.className = "DitadoCorrect";
                        } else if ( i == word.word.length -1 && button.className != "DitadoCorrect"){
                            button.className = "DitadoWrong";
                            updateStage();
                        }
                    } else if (letter == "E") {
                        if (word.word[i] == "E" || word.word[i] == "É" || word.word[i] == "Ê"){
                            button.className = "DitadoCorrect";
                        } else if ( i == word.word.length -1 && button.className != "DitadoCorrect"){
                            button.className = "DitadoWrong";
                            updateStage();
                        }
                    } else if (letter == "I") {
                        if (word.word[i] == "I" || word.word[i] == "Í" ){
                            button.className = "DitadoCorrect";
                        } else if ( i == word.word.length -1 && button.className != "DitadoCorrect"){
                            button.className = "DitadoWrong";
                            updateStage();
                        }
                    } else if (letter == "O") {
                        if (word.word[i] == "O" || word.word[i] == "Ó" || word.word[i] == "Ô" || word.word[i] == "Õ"){
                            button.className = "DitadoCorrect";
                        } else if ( i == word.word.length -1 && button.className != "DitadoCorrect"){
                            button.className = "DitadoWrong";
                            updateStage();
                        }
                    } else if (letter == "U") {
                        if (word.word[i] == "U" || word.word[i] == "Ú"){
                            button.className = "DitadoCorrect";
                        } else if ( i == word.word.length -1 && button.className != "DitadoCorrect"){
                            button.className = "DitadoWrong";
                            updateStage();
                        }
                    } else if (letter == "C") {
                        if (word.word[i] == "C" || word.word[i] == "Ç"){
                            button.className = "DitadoCorrect";
                        } else if ( i == word.word.length -1 && button.className != "DitadoCorrect"){
                            button.className = "DitadoWrong";
                            updateStage();
                        }
                    }  else if (word.word[i] == letter){
                        button.className = "DitadoCorrect";
                    }  else if (i == word.word.length - 1 && button.className != "DitadoCorrect") {
                        button.className = "DitadoWrong";
                        updateStage();
                    }
                }
            }

            button.addEventListener('click', function(event) {
                if (firstTime == "Yes") {
                    firstTime = "No"
                    testLetter(String.fromCharCode(i));
                    lettersUsed.push(String.fromCharCode(i));
                    MakeDisplayForca.updateHangmanImg();
                    MakeDisplayForca.makeHangmanText();
                    if (stage == 6 || MakeDisplayForca.getAnswer() == word.word) {
                        makeNextScreenButton();
                        deleteWord(word);
                        if (MakeDisplayForca.getAnswer() == word.word) {
                            addWordHistory(word,"correct",word, "Forca");
                            updateTotal("correct");

                        } else {
                            addWordHistory(word,"wrong", MakeDisplayForca.getAnswer(), "Sílaba Final");
                            updateTotal("wrong");
                        }
                    }
                }
            })
            buttons.appendChild(button);
        }

        game.appendChild(buttons);
    }

    const makeVogais = () => {
        const word = usableVogais[selectWordVogais()];

        makeDisplay2("PREENCHA COM AS VOGAIS", word.img, word.audio);

        const game = document.querySelector('#Game');

        const answer = document.createElement('div');
        answer.className = "jogoPreencher";
        
        let firstTest = true

        let wordAnswer = document.createElement('div');
        
        for (let i = 0; i < word.word.length; i++) {
            if (word.word[i] == "A" || word.word[i] == "E" || word.word[i] == "I" || word.word[i] == "O" ||
                word.word[i] == "U" || word.word[i] == "Ã" || word.word[i] == "Õ" || word.word[i] == "Á" || 
                word.word[i] == "É" || word.word[i] == "Í" || word.word[i] == "Ó" || word.word[i] == "Ú" ||
                word.word[i] == "Â" || word.word[i] == "Ê" || word.word[i] == "Ô") {
                    let input = document.createElement('input');
                    input.setAttribute("type", "text");
                    input.setAttribute("spellcheck", "false");
                    input.setAttribute("maxlength","1");
                    wordAnswer.appendChild(input);
            } else {
                let letterText = transformText(word.word[i]);
                let letterGroup = document.createElement('div');
                for (j = 0; j < letterText.length; j++) {
                    let letterSpace = document.createElement('div');
                    letterSpace.textContent = letterText[j];
                    letterGroup.appendChild(letterSpace);
                }
                wordAnswer.appendChild(letterGroup);
            }
        }
        answer.appendChild(wordAnswer)

        const button = document.createElement('button');
        let textArray = transformText("ENVIAR");
        let textString = textArray[0];
        if (textArray.length > 1) {
            textString = textString + "\r\n" + textArray[1];
        }
        button.innerText = textString
        button.addEventListener('click', function(event) {
            testAnswer();
        })
        answer.appendChild(button);

        const testAnswer = () => {
            const answerArray = [];
            for (const child of wordAnswer.children) {
                if (child.tagName == "INPUT") {
                    answerArray.push(child.value.toUpperCase());
                } else if (child.tagName == "DIV") {
                    answerArray.push(child.firstChild.textContent);
                }           
            }
            const answerGiven = answerArray.join("");

            const markAnswer = () => {
                let counter = 0
                for (const child of wordAnswer.children) {
                    if (child.tagName == "INPUT") {
                        if (child.value.toUpperCase() == word.word[counter]) {
                            child.className = "correctLetter"
                        } else {
                            child.className = "wrongLetter"
                        }
                    }
                    counter += 1     
                }
            }

            if (answerGiven == word.word) {
                deleteWord(word);
                if (firstTest == true) {
                    addWordHistory(word, "correct", answerGiven, "P. Vogais");
                    updateTotal("correct");
                }
                playRound();
            } else {
                if (firstTest == true) {
                    addWordHistory(word, "wrong", answerGiven, "P. Vogais");
                    updateTotal("wrong");
                    firstTest = false;
                }
                markAnswer();
            }
            
        }

        game.appendChild(answer);
    }

    const makeConsoantes = () => {
        const word = usableConsoantes[selectWordConsoantes()];

        makeDisplay2("PREENCHA COM AS CONSOANTES", word.img, word.audio);

        const game = document.querySelector('#Game');

        const answer = document.createElement('div');
        answer.className = "jogoPreencher";
        
        let firstTest = true

        let wordAnswer = document.createElement('div');
        
        for (let i = 0; i < word.word.length; i++) {
            if (word.word[i] !== "A" && word.word[i] !== "E" && word.word[i] !== "I" && word.word[i] !== "O" &&
                word.word[i] !== "U" && word.word[i] !== "Ã" && word.word[i] !== "Õ" && word.word[i] !== "Á" && 
                word.word[i] !== "É" && word.word[i] !== "Í" && word.word[i] !== "Ó" && word.word[i] !== "Ú" &&
                word.word[i] !== "Â" && word.word[i] !== "Ê" && word.word[i] !== "Ô" && word.word[i] !== "-") {
                    let input = document.createElement('input');
                    input.setAttribute("type", "text");
                    input.setAttribute("spellcheck", "false");
                    input.setAttribute("maxlength","1");
                    wordAnswer.appendChild(input);
            } else {
                let letterText = transformText(word.word[i]);
                let letterGroup = document.createElement('div');
                for (j = 0; j < letterText.length; j++) {
                    let letterSpace = document.createElement('div');
                    letterSpace.textContent = letterText[j];
                    letterGroup.appendChild(letterSpace);
                }
                wordAnswer.appendChild(letterGroup);
            }
        }
        answer.appendChild(wordAnswer)

        const button = document.createElement('button');
        let textArray = transformText("ENVIAR");
        let textString = textArray[0];
        if (textArray.length > 1) {
            textString = textString + "\r\n" + textArray[1];
        }
        button.innerText = textString
        button.addEventListener('click', function(event) {
            testAnswer();
        })
        answer.appendChild(button);

        const testAnswer = () => {
            const answerArray = [];
            for (const child of wordAnswer.children) {
                if (child.tagName == "INPUT") {
                    answerArray.push(child.value.toUpperCase());
                } else if (child.tagName == "DIV") {
                    answerArray.push(child.firstChild.textContent);
                }           
            }
            const answerGiven = answerArray.join("");

            const markAnswer = () => {
                let counter = 0
                for (const child of wordAnswer.children) {
                    if (child.tagName == "INPUT") {
                        if (child.value.toUpperCase() == word.word[counter]) {
                            child.className = "correctLetter"
                        } else {
                            child.className = "wrongLetter"
                        }
                    }
                    counter += 1     
                }
            }

            if (answerGiven == word.word) {
                deleteWord(word);
                if (firstTest == true) {
                    addWordHistory(word, "correct", answerGiven, "P. Consoantes");
                    updateTotal("correct");
                }
                playRound();
            } else {
                if (firstTest == true) {
                    addWordHistory(word, "wrong", answerGiven, "P. Consoantes");
                    updateTotal("wrong");
                    firstTest = false;
                }
                markAnswer();
            }
            
        }

        game.appendChild(answer);
    }

    playRound(); 
}
