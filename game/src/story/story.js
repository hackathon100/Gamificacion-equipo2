// bg
const microphone = require("./bg/microphone.jpeg");
const entrance = require("./bg/entrance.jpeg");
const oval = require("./bg/oval.png");
const coldwar = require("./bg/coldwar.png");
const soviet2 = require("./bg/soviet2.jpg");
const whitehouse = require("./bg/white-house.png");
const excom = require("./bg/meet.png");
const caribe = require("./bg/ships.png");
const desk = require("./bg/desk.png");
const press_tv = require("./bg/press-tv2.png");
const bobby = require("./bg/bobby.png");
const jfk_death = require("./bg/jfk.png");
const tv = require("./bg/tv.png");
const top_secret = require("./bg/top-secret.png");
const black = require("./bg/black.png");

// bgm
const take = require("./bgm/take.mp3");
const anthem = require("./bgm/soviet-march.mp3");
const intro = require("./bgm/intro.mp3");
const usa_war = require("./bgm/usa-war.mp3");

// speakers
const b = "Block";

// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
const nk = require("./sprites/mono.png");
const tp = require("./sprites/transparente.png");
const fc = require("./sprites/fidel.png");
const jfkSprt = require("./sprites/kennedy1.png");
//const jfk2 = require("./sprites/kennedy2.png");
const kgb = require("./sprites/kgb-putin.png");
const mp = require("./sprites/mike-pence.png");
const rk = require("./sprites/robert-k.png");
const sm = require("./sprites/soviet-militar1.png");
const usa = require("./sprites/us-asesora.png");
const usm = require("./sprites/us-militar.png");
const ad = require("./sprites/ambassor.png");
const mago = require("./sprites/mago.png");
const red_phone = require("./sprites/phone.png");

// sounds
const click = require("./sounds/answer-ok.mp3");
const goal = require("./sounds/goal.mp3");

//Nombres USA PATH
const JFK = "John F. Kennedy";
const RK = "Robert Kennedy";
const AD = "Anatoli Dobrynin";
const GRAL = "General"
const OFFI = GRAL;
const ASSE = "Asesora";
const SDE = "Secretario de Estado";

//Nombres URSS PATH
const KGB = "Agente de la KGB"
const GRALS = "General Sovietico"
const KRU = "Kruschev"
const MDD = "Malinovsky" //Ministro de Defensa

//Nombre protagonista
const protName = "Prota";

let story = [
  {
    //TODO Cambiar los fondos y personajes
    receiveJump: "start",    
    bg: coldwar,
    bgm: intro,
    sprite: mago,
    speaker: "",
    text: protName + ", debemos viajar hacia el año 1962 del planeta Tierra, a un periodo en que los habitantes " +
          "de esta realidad estuvieron a punto de perecer debido a una lucha de poderes ocurrida entre los dos más " +
          "grandes imperios que dominaban el mundo"
  },
  {
    text: "en ese entonces: Estados Unidos y la Unión de Repúblicas Socialistas Soviéticas. Nuestro objetivo será " +
          "encontrar “EL TELÉFONO ROJO”, un artefacto que utilizan los líderes para comunicarse y que alberga grandes " +
          "cantidades de magia multiversal"
  },
  {
    text: "debido a que su origen en este plano se dio solo gracias a que las personas indicadas tomaron las decisiones " +
          "correctas. Gracias a nuestros poderes multiversales adoptaremos la forma de los asesores más influyentes " +
          "de algún importante consejo"
  },
  {
    text: "de expertos y tu labor será propiciar que los hechos ocurran tal y como se dieron en esta realidad. Cualquier " +
          "alteración en las decisiones que tomen los gobernantes provocará probablemente que este planeta se aniquile " +
          "a si mismo, pero aún más importante..."
  },
  {
    text: "NO PODREMOS OBTENER EL TELÉFONO ROJO, que es la verdadera razón para estar aquí. " +
          "Si bien yo elegí el cuando, te permitiré inclinarte por el dónde."
  },
  {
    choicesExist: true,
    receiveJump:"features",
    text: "¿Quieres que vayamos a Estados Unidos? ¿O prefieres que viajemos a la Unión Soviética?",
  },

  //INICIO USA PATH
  {
    routeBegins: "usaPath",
    bgm: usa_war,
    soundEffect: click,
    bg: whitehouse,
    receiveJump: "usaCheck1",
    speaker: "",
    sprite: tp ,
    text: "16 de octubre de 1962 a las 11:50. Oficina Oval del Presidente, Washington D.C."
  },
  {
    speaker: OFFI,
    bg: oval,
    sprite: usm,
    text: "Señor presidente. Un avión de reconocimiento ha traído preocupantes noticias desde Cuba.",
  },
  {
    text: "Fotografías aéreas han descubierto misiles nucleares soviéticos de alcance intermedio " +
          "capaces de alcanzar Washington D.C. en solo 13 minutos.",
  },
  {
    speaker: JFK,
    sprite: jfkSprt,
    text: "Nikita Khruschev ha faltado al acuerdo que tenía con nosotros respecto a la instalación " +
          "de ojivas nucleares en Cuba y ha cruzado un límite que puede traer consecuencias catastróficas.",
  },
  {
    speaker: ASSE,
    sprite: usa,
    text: "Señor presidente, las elecciones están al caer y la presión de los republicanos por la situación " +
          "cubana se esta convirtiendo en un problema real para su reelección.",
  },
  {
    speaker: JFK,
    sprite: jfkSprt,
    text: "¿Cuando cree que estarán listas para atacar?",
  },
  {
    sprite: usm,
    speaker: OFFI,
    text: "En un par de horas señor. Deberíamos bombardear antes de que puedan estar preparados, e intentar " +
          "nuevamente una invasión terrestre. Castro no podrá resistir una segunda arremetida. ",
  },
  {
    //TODO Transiciones/efectos
    speaker: SDE,
    sprite: mp,
    text: "Creo que sería más prudente utilizar el tiempo que requieren para instalar las cabezas nucleares en " +
          "planificar una estrategia más elaborada",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfkSprt,
    choicesExist: true,
    text: "¿Y tu que crees " + protName + "? Has estado muy silencios@",
  },
  {
    routeBegins: "decided-nervous",
    soundEffect: click,
    speaker: JFK,
    text: "Y bien, eres mi más valios@ asesor@ ¿Qué crees que deberíamos hacer?"
  },
  {
    speaker: JFK,
    choicesExist: true,
    text: "Y bien, eres mi más valios@ asesor@ ¿Qué crees que deberíamos hacer?",
  },
  {
    //TODO Transiciones/efectos
    routeBegins: "planification",
    receiveJump: "usaCheck2",
    speaker: "",
    soundEffect: click,
    sprite: tp,
    bg: whitehouse,
    text: "16 de octubre a las 18:30. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfkSprt,
    bg: excom,
    text: "Señores, convoqué al EXCOM para que tomemos una decisión conjunta respecto a la situación de los misiles cubanos.",
  },
  {
    //TODO Transiciones/efectos
    speaker: OFFI,
    sprite: usm,
    text: "Señor Presidente, el Ejército de los Estados Unidos está preparado para un ataque generalizado al territorio cubano.",
  },
  {
    //TODO Transiciones/efectos
    speaker: RK,
    sprite: rk,
    text: "Concuerdo con el oficial hermano, digo, señor Presidente. Castro lleva burlándose de nosotros el tiempo suficiente.",
  },
  {
    //TODO Transiciones/efectos
    speaker: ASSE,
    sprite: usa,
    text: "Si bien un ataque directo parece ser la opción más lógica, creo que a esta altura los misiles soviéticos " + 
          "ya deben estar preparados para lanzar un contrataque a cualquier ciudad importante de los Estados Unidos," + 
          "además de que ante la baja",
  },
  {
    text: "de alguno de los soldados soviéticos que está en Cuba esto sería considerado un acto de guerra por " +
          "parte de la URSS.",
  },
  {
    //TODO Transiciones/efectos
    speaker: SDE,
    sprite: mp,
    text: "Yo creo que no deberíamos hacer nada.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfkSprt,
    text: "¿Cómo?",
  },
  {
    //TODO Transiciones/efectos
    speaker: SDE,
    sprite: mp,
    text: "Eso, creo que la correlación de fuerzas seguiría tal cual. Nosotros tenemos misiles de la OTAN repartidos " + 
          "por Turquía e Italia. Y ser aniquilados por una guerra nuclear con los cubanos tiene el mismo resultado " +
          "que serlo ante los soviéticos",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfkSprt,
    text: "Concuerdo en ese punto, pero no podemos darnos el lujo como gobierno de dejar pasar una afrenta de esta " +
          "magnitud. Se vería como un acto de debilidad ya no solo para el electorado republicano sino que para el " +
          "propio Kruschev.",
  },
  {
    choicesExist: true,
    text: "Los misiles comenzarían a ser enviados por todo Ásia y África. No queremos que una segunda o tercera Cuba " + 
          "surja aquí en nuestras narices, el apoyo económico de la Alianza Para el Progreso sería solo una pérdida de " + 
          "dólares.",
  },
  {
    choicesExist: true,
    text: "¿Qué deberíamos hacer " + protName + "?",
  },
  {
    //TODO Transiciones/efectos
    routeBegins: "economic",
    soundEffect: click,
    sprite: tp,
    receiveJump: "usaCheck3",
    speaker: "",
    bg: caribe,
    text: "17 de octubre a las 12:00. Mar Caribe. 40 barcos de guerra bloquean la isla de Cuba.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "",
    bg: whitehouse,
    text: "19 de octubre a las 09:45. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    //TODO Transiciones/efectos
    speaker: GRAL,
    sprite: usm,
    bg: oval,
    text: "Señor, el informe de la CIA ha llegado. Actualmente dos misiles de alcance medio ya se encuentran " + 
          "operacionales y los soviéticos están armando plataformas de lanzamiento alrededor de toda la isla.",
  },
  {
    text: "Con esa capacidad de fuego podrían alcanzar cualquier centro urbano. La opción de atacar Cuba sigue " +
          " en la mesa.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfkSprt,
    text: "Creo que un ataque a Cuba sería como un dominó mundial en donde la URSS procedería a tomar Berlín, " + 
          "lo que las naciones de la OTAN responderían con un ataque nuclear directo. La respuesta soviética " + 
          "sería devolver el ataque lo que nos obligaría",
  },
  {
    text: "a entrar en esta escalada de Destrucción Mutua Asegurada. Debemos informar al pueblo estadounidense " + 
          "sobre lo que ocurre para que estén preparados para lo peor. Acompáñame " + protName + ".",
  },
  {
    //TODO Transiciones/efectos
    speaker: "",
    bg: tv,
    sprite: tp,
    text: "22 de octubre a las 19:00. Por televisión. Kennedy anuncia públicamente el bloqueo económico de Cuba " +
          "y lanza un ultimátum a la Unión Soviética.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "",
    bg: whitehouse,
    text: "23 de octubre a las 19:06. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfkSprt,
    bg: oval,
    text: "Entiendo que el bloqueo este operativo. General, cual es el protocolo de la marina en caso de que " +
          "arribe un carguero soviético.",
  },
  {
    //TODO Transiciones/efectos
    speaker: GRAL,
    sprite: usm,
    text: "Bueno, si el barco no se detiene ante las advertencias de nuestros buques, se dispararán salvas de " + 
          "advertencia, si aun así siguen intrincados en su inerme obcecación, los marines están preparados para " +
          "el abordaje y captura del navío.",
  },
  {
    //TODO Transiciones/efectos, JFK preocupado
    speaker: JFK,
    sprite: jfkSprt,
    text: "¡QUE¡",
  },
  {
    //TODO Transiciones/efectos
    speaker: GRAL,
    sprite: usm,
    text: "Y En caso de que nuestros radares detecten un submarino, lanzarán cargas de profundidad para obligarlos a salir.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfkSprt,
    text: "Bobby, necesito que vayas a la embajada soviética y parlamentes con el embajador Anatoli Dobrynin, necesitamos " + 
          "predecir la respuesta que tendrá Moscú ante un protocolo de esta magnitud. Necesito que seas muy discreto. Que " + 
          "te acompañe " + protName + ".",
  },
  {
    //TODO Transiciones/efectos
    speaker: RK,
    sprite: rk,
    text: "Enseguida, tomaremos todas las precauciones. Vamos " + protName + ".",
  },
  {
    //TODO Transiciones/efectos
    speaker: "",
    sprite: tp,
    text: "23 de octubre en la noche. Embajada soviética.",
    bg: desk,
  },
  {
    //TODO Transiciones/efectos
    speaker: RK,
    sprite: rk,
    text: "Embajador, digamos que existe la posibilidad de que sus barcos puedan ser detenidos por personal de la Marina " +
          "estadounidense.",
  },
  {
    //TODO Transiciones/efectos
    speaker: AD,
    sprite: ad,
    text: "Bueno, pues digamos que sí existe esa posibilidad, los barcos soviéticos no se detendrán, y más aún, está acción " + 
          "será considerada como un acto de guerra por parte del Kremlin.",
  },
  {
    text: "Por lo que si su supuesto es cierto Robert, debería ajustar los protocolos",
  },
  {
    //TODO Transiciones/efectos
    speaker: "",
    text: "23 de octubre, un poco más tarde. Oficina Oval del Presidente, Washington D.C.",
    sprite: tp,
    bg: whitehouse,
  },
  {
    speaker: JFK,
    sprite: jfkSprt,
    bg: oval,
    text: "Bobby, " + protName + ", ¿como les fue con el embajador?",
  },
  {
    speaker: RK,
    sprite: rk,
    text: "No tenemos muy buenas noticias Jack. La detención del convoy soviético será tomado como un acto de guerra. Tenemos " + 
          "que enviar un asesor que se encargue de que la marina por nada del mundo le dispare a un navío soviético.",
  },
  {
    speaker: GRAL,
    sprite: usm,
    text: "Señor Presidente, un bloqueo sin la coacción de la fuerza no es realmente un bloqueo. La nación " + 
          "se vería débil ante la URSS y el Pacto de Varsovia.",
  },
  {
    speaker: JFK,
    sprite: jfkSprt,
    choicesExist: true,
    text: "¿Qué opinas " + protName + "?",
  },
  {
    //TODO Transiciones/efectos
    routeBegins: "noWar",
    receiveJump: "usaCheck4",
    speaker: "",
    bg: whitehouse,
    soundEffect: click,
    sprite: tp,
    text: "26 de octubre a las 18:00. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    speaker: ASSE,
    sprite: usa,
    bg: oval,
    text: "Los soviéticos quieren negociar Señor. Retiraran los misiles a cambio de que declaremos publicamente que no " + 
          "invadiremos Cuba nunca más.",
  },
  {
    speaker: JFK,
    sprite: jfkSprt,
    text: "Suena bien. A pesar de que Cuba es una amenaza constante, probablemente sus relaciones con los soviéticos se vean " +
          "afectadas por un trato como este.",
  },
  {
    speaker: RK,
    sprite: rk,
    text: "Tenemos un problema Jack, toda la prensa   está reportando que la invasión de Cuba es inminente e indeclinable. Si " +
          "los espías y diplomáticos soviéticos lo creen, la guerra se podría desatar incluso antes de que podamos responder a " +
          "este nuevo trato.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "",
    bg: whitehouse,
    sprite: tp,
    text: "27 de octubre a las 04:00. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    speaker: GRAL,
    bg: oval,
    sprite: usm,
    text: "Los soviéticos están exigiendo un nuevo acuerdo a través de Radio Moscú, Kruschev quiere que los EE.UU también retire " + 
          "los misiles de Turquía.",
  },
  {
    text: "Es inaceptable Señor, no podemos sacrificar la seguridad de un aliado a cambio de la nuestra, eso " + 
          "sería el fin de la OTAN.",
  },
  {
    speaker: JFK,
    sprite: jfkSprt,
    text: "En cualquier caso esos misiles están obsoletos, general, pero tiene razón, un conflicto con nuestros aliados en un momento " +
          "como este sería un desequilibrió que no nos podemos dar el lujo de sufrir.",
  },
  {
    speaker: ASSE,
    sprite: usa,
    text: "¿Por qué Kruschev ofrecería dos tratos distintos en 24 horas?",
  },
  {
    speaker: SDE,
    sprite: mp,
    text: "Quizás fue depuesto de su cargo y el ejército rojo está al mando. Eso cambiaría todo el proceso de negociaciones.",
  },
  {
    speaker: GRAL,
    sprite: usm,
    text: "La Fuerza Aérea informa que una aeronave U-2 de reconocimiento no ha regresado de Cuba. Probablemente ha cayo en combate " + 
          "señor. Esto ha comenzado.",
  },
  {
    speaker: JFK,
    sprite: jfkSprt,
    //TODO mira al protagonista
    text: "Llegó el momento de tomar decisiones importantes. Necesito escuchar a todos mis asesores.",
  },
  {
    speaker: JFK,
    choicesExist: true,
    text: "Llegó el momento de tomar decisiones importantes. Necesito escuchar a todos mis asesores.",
  },

  //Epilogo USA PATH
  {
    routeBegins: "agreement",
    speaker: "",
    bg: whitehouse,
    soundEffect: click,
    sprite: tp,
    text: "27 de octubre a las 19:30. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    bg: top_secret,
    text: "Los colaboradores más cercanos a Kennedy encontraron una forma de aceptar el trato sin romper la OTAN. Primero " + 
    "enviaron una carta pública aceptando el primer trato de Kruschev, NUNCA INVADIRÁN CUBA.",
  },
  {
    text: "Robert Kennedy y tu en persona llevaron el acuerdo al embajador soviético, pero con un segundo mensaje " + 
        "top secret: ",
  },
  {
    speaker: RK,
    sprite: rk,
    text: "Los oficiales quieren retribución por la caída del avión de reconocimiento, por lo que podemos aceptar públicamente " + 
          "solo el compromiso de no invasión de Cuba, pero no el retiro de los misiles en Turquía, al menos no públicamente. " + 
          "Embajador Dobrynin,",
  },
  {
    text: "acepten este trato y la promesa de este gobierno es que los misiles de Turquía habrán sido " + 
          "retirados de aquí a 5 meses. Sin embargo, si esta conversación se filtra, el trato se acaba.",
  },
  {
    speaker: AD,
    sprite: ad,
    text: "Estimad@s, la discreción es parte imprescindible del trabajo diplomático. Sus condiciones serán celosamente " +
          "comunicadas al Kremlin.",
  },
  {
    speaker: "",
    text: "28 de octubre.",
    spriteLeft: tp,
    sprite: tp,
    bg: black,
  },
  //TODO Arreglar textos (lo mas probable es que haya que separarlos porque son muy largos)
  {
    sprite: red_phone,
    soundEffect: goal,
    spriteEffect: "shake",
    text: "Kruschev y el Presidium aceptaron el trato, el EXCOM celebra y el mundo respira. De aquí en adelante se " + 
          "estableció una línea directa de comunicación entre Washington y Moscú que no tuviera demoras: has conseguido " + 
          "EL TELÉFONO ROJO.",
  },
  {
    text: "Un paso más adelante para que podamos salvar nuestra realidad.",
  },
  {
    sprite: tp,
    spriteLeft: tp,
    text: "En 1968 EE.UU y la URSS firmaron el Tratado de No Proliferación Nuclear que limita la posesión de armas " + 
          "nucleares. La mayor parte de EXCOM nunca se enteró del intercambio de misiles secreto. Quedaron creyendo que " + 
          "la diplomacia de hierro respaldada",
  },
  {
    text: "por su poderío militar fue lo que les dio la victoria en esta crisis, y que si esto " + 
          "funcionó con un gran imperio como la Unión Soviética, como no va a servir contra un pequeño país… " + 
          "como Vietnam. Pero esa es otra historia.",
    bg: coldwar,
  },
  {
    bg: jfk_death,
    sprite: tp,
    spriteLeft: tp,
    text: "En 1963 J. F. Kennedy fue asesinado en Dallas mientras aún ejercía como presidente, convirtiéndose en el " + 
          "cuarto presidente estadounidense que muere en el ejercicio de su cargo. Su hermano Robert corrió una suerte " + 
          "similar:",
  },
  {
    bg: bobby,
    text: "en 1968 fue abatido por un tirador mientras se encontraba en plena campaña presidencial en California. " + 
          "Un trágico destino para estos sujetos. ",
  },
  {
    text: "Lamentablemente no podemos intervenir en las líneas temporales que ya han sido trazadas, " + 
          "solo procurar que los hilos sigan su camino para encontrar los artefactos multiversales.",
    jumpTo: "start",
  },
  //TODO USA: MALAS RESPUESTAS -> JUMPTO
  {
    routeBegins: "attack",
    speaker: "",
    text: "Al atacar a Cuba directamente, un contrataque nuclear desde la propia isla vino enseguida. La URSS " + 
          "aprovechó nuestra debilidad e invadió Berlín, por lo que tuvimos que responder con un ataque nuclear " + 
          "equivalente.",
  },
  {
    text: "Hacerle caso al General condujo a un holocausto nuclear de Destrucción Mutua Asegurada. " + 
          "Así nunca conseguiremos el “TELÉFONO ROJO”, inténtalo otra vez.",
    jumpTo: "usaCheck1",
  },
  {
    routeBegins: "bomb",
    speaker: "",
    text: "Al atacar a Cuba directamente, un contrataque nuclear desde la propia isla vino enseguida. La URSS " + 
          "aprovechó nuestra debilidad e invadió Berlín, por lo que tuvimos que responder con un ataque nuclear " + 
          "equivalente.",
  },
  {
    text: "Hacerle caso al General condujo a un holocausto nuclear de Destrucción Mutua Asegurada. " + 
          "Así nunca conseguiremos el “TELÉFONO ROJO”, inténtalo otra vez.",
    jumpTo: "usaCheck2",
  },
  {
    routeBegins: "doNothing",
    speaker: "",
    text: "Los misiles soviéticos siguieron llegando y cuando nos tocó responder fue demasiado tarde. A mediano " + 
          "o largo plazo la guerra nuclear se desató y el “TELÉFONO ROJO” no llegó ni siquiera a ser una idea. " + 
          "Intentémoslo de nuevo.",
    jumpTo: "usaCheck2",
  },
  {
    routeBegins: "war",
    speaker: "",
    text: "Mantener el protocolo provoca que un submarino soviético que estaba incomunicado con Moscú se defienda " + 
          "de las cargas de profundidad disparando torpedos nucleares a los buques del bloque.",
  },
  {
    text: "La guerra nuclear ha comenzado y el TELEFONO ROJO se ha perdido nuevamente. Intentemoslo de nuevo.",
    jumpTo: "usaCheck3",
  },
  {
    routeBegins: "noInvade",
    speaker: "",
    text: "la OTAN llega a su fin y el desequilibrio en las fuerzas occidentales lleva a que eventualmente se desate " + 
          "un holocausto nuclear. Estuvimos muy cerca del TELÉFONO ROJO.",
    jumpTo: "usaCheck4",
  },
  {
    routeBegins: "invade",
    speaker: "",
    text: "Al atacar a Cuba directamente, un contrataque nuclear desde la propia isla vino enseguida. La URSS " + 
          "aprovechó nuestra debilidad e invadió Berlín, por lo que tuvimos que responder con un ataque nuclear " + 
          "equivalente.",
  },
  {
    text: "Hacerle caso al General condujo a un holocausto nuclear de Destrucción Mutua Asegurada. " + 
          "Así nunca conseguiremos el “TELÉFONO ROJO”, inténtalo otra vez.",
    jumpTo: "usaCheck4",
  },
  //Fin USA PATH

  //INICIO URSS PATH
  //bgm: intro,
  {
    routeBegins: "urssPath",
    receiveJump: "urssCheck1",
    speaker: "",
    text: "Abril de 1962. El Kremlin. Moscú."
  },
  {
    speaker: KGB,
    text: "Camarada Secretario General, nuestros espías informan de la instalación de misiles nucleares americanos " + 
          "en territorio turco. El imperialismo americano está a las puertas de la patria.",
  },
  {
    speaker: GRALS,
    text: "Nuestros científicos están trabajando en el alcance de nuestra cohetería, aunque la posibilidad de crear " + 
          "un misil intercontinental aún se ve lejana. Tenemos que buscar locaciones en naciones hermanas en la " + 
          "revolución, Camarada Secretario General.",
  },
  {
    speaker: KRU,
    text: "Cuba es la opción más lógica por lo visto. Su ubicación geográfica es ideal, y significaría una amenaza " + 
          "real y equivalente a Washington. ¿Que opina camarada " + protName + "?",
  },
  {
    choicesExist: true,
    text: "Cuba es la opción más lógica por lo visto. Su ubicación geográfica es ideal, y significaría una amenaza " + 
          "real y equivalente a Washington. ¿Que opina camarada " + protName + "?",
  },
  {
    routeBegins: "decided-nervURSS",
    speaker: KRU,
    text: "Cierto es camarada, pero su cercanía geográfica con el Imperio es razón suficiente para movernos " + 
          "cautelosamente. No queremos que esta vez una nueva invasión como Bahía de Cochinos termine con los " + 
          "ideales del pueblo cubano.",
  },
  {
    speaker: "",
    text: "22 de octubre a las 22:00. El Kremlin. Moscú.",
  },
  {
    speaker: KGB,
    text: "Camarada Secretario General, nuestros agentes en terreno reportan actividad inusual en suelo " + 
          "estadounidense.",
  },
  {
    text: "Los congresistas se están volcando a Washington, la marina estadounidense se desplegó en el " + 
          "Caribe, y los civiles estadounidenses están siendo evacuados de Guantanamo.",
  },
  {
    speaker: GRALS,
    text: "Kennedy dará una conferencia a las 2:00 A.M hora de Moscú y la embajada de EE.UU nos notificó que " + 
          "esperemos comunicación para las 1:00 A.M.",
  },
  {
    speaker: KRU,
    text: "Es evidente que hemos sido descubiertos. La invasión a Cuba será inminente. Reúna al Presidium " + 
          "camarada " + protName + ". Los soviets deben participar de las decisiones que tomaremos de ahora en " + 
          "adelante por el bien de la madre patria.",
  },
  {
    speaker: GRALS,
    text: "Lo lógico sería anunciar un pacto de mutua defensa con Cuba a través de Radio Moscú para prevenir " + 
          "la invasión de la isla.",
  },
  {
    speaker: KGB,
    text: "Otra opción es transferir el control de los misiles a los compañeros cubanos para que defiendan su " + 
          "territorio, y ordenar a los oficiales soviéticos en terreno que utilicen los misiles nucleares de " + 
          "corto alcance como medida defensiva.",
  },
  {
    speaker: MDD,
    text: "Esta última opción reviste muchos riesgos. La decisión precipitada de un oficial podría conducirnos " + 
          "a una guerra nuclear. Deberíamos esperar el mensaje de Kennedy.",
  },
  {
    speaker: KRU,
    choicesExist: true,
    text: "Camarada " + protName + ". ¿Qué cree usted que sería lo más apropiado?",
  },
  {
    routeBegins: "waitReaction",
    receiveJump: "urssCheck2",
    speaker: "",
    text: "23 de octubre a las 1:00. El Kremlin. Moscú.",
  },
  {
    speaker: KRU,
    text: "Camaradas, Kennedy nos ha dado un ultimátum.",
  },
  {
    speaker: GRALS,
    text: "El Bloqueo a Cuba es claramente un acto de guerra. No podemos retroceder ahora que ya estamos adentro, " + 
          "camarada Secretario General.",
  },
  {
    speaker: KGB,
    text: "En este momento 14 cargueros atestados de ojivas nucleares están a punto de alcanzar el bloqueo. Uno " + 
          "de los navíos lleva 3 veces más poder nuclear que el que ha sido detonado hasta este momento por toda " + 
          "la Unión Soviética.",
  },
  {
    speaker: KRU,
    choicesExist: true,
    text: "¿Cómo cree que deberíamos proceder camarada " + protName + "?",
  },
  {
    routeBegins: "retire",
    receiveJump: "urssCheck3",
    speaker: "",
    text: "24 de octubre a las 17:15. El Kremlin. Moscú. ",
  },
  {
    speaker: KRU,
    text: "La salida bélica sería catastrófica para la revolución, tenemos que actuar con prudencia.",
  },
  {
    speaker: MDD,
    text: "Ceder ante la presión imperialista lo destruiría políticamente, camarada Secretario General. Si queremos " + 
          "salir de esta tenemos que por lo menos llevarnos un triunfo.",
  },
  {
    speaker: KRU,
    text: "Ante el Presidium como representantes del pueblo soviético propongo esta estrategia: sacamos los misiles " + 
          "de Cuba y a cambio Kennedy declara que no invadirá nunca más a nuestros compañeros cubanos.",
  },
  {
    speaker: KGB,
    text: "Camarada Secretario General, si bien comparto su estrategia, debo informar que un mensaje así tomaría " + 
          "alrededor de 8 horas en ser traducido, codificado y decodificado antes de llegar a Washington.",
  },
  {
    speaker: GRALS,
    text: "Además el retiro de los misiles será visto como una afrenta para el pueblo soviéticos lo que haría " + 
          "peligrar incluso su continuidad en el cargo de Secretario General.",
  },
  {
    speaker: KRU,
    choicesExist: true,
    text: "Son riesgos que debemos sopesar camaradas. ¿Qué cree usted camarada " + protName + "?",
  },
  {
    routeBegins: "negotiate",
    receiveJump: "urssCheck4",
    speaker: "",
    text: "26 de octubre 10:00. El Kremlin. Moscú.",
  },
  {
    speaker: MDD,
    text: "Camarada Secretario General, lamento insistir en la idea de obtener al menos un victoria de esta " + 
          "situación. La mera salvación de Castro y los suyos no es suficiente. Lo mejor sería exigir un " + 
          "intercambio equivalente. Misiles por misiles.",
  },
  {
    speaker: KRU,
    text: "Turquía y la OTAN por Cuba, suena razonable. Ante el Presidium si todos están de acuerdo, hagamos " + 
          "el anuncio a través de la Radio Moscú.",
  },
  {
    speaker: "",
    text: "27 de octubre a las 06:00. El Kremlin. Moscú.",
  },
  {
    speaker: KGB,
    text: "Camarada Secretario General, tenemos un mensaje desde Cuba: el camarada Castro manifiesta la convicción " + 
          "de que los estadounidenses invadirán hoy en cualquier momento lo que desatará inevitablemente una " + 
          "guerra nuclear, por lo que le recomendó",
  },
  {
    text: "al Presidium a través del camarada embajador que en caso de que ocurra una nueva invasión " + 
          "norteamericana a la isla, la Unión Soviética debería lanzar un primer ataque directo en respuesta.",
  },
  {
    text: "Declara que Cuba sería destruida pero que la revolución se salvaría.",
  },
  {
    speaker: KRU,
    text: "Esto es realmente preocupante, Castro está muy presionado con el bloqueo y los vuelos de reconocimiento.",
  },
  {
    speaker: "",
    text: "27 de octubre a las 17:50. El Kremlin. Moscú.",
  },
  {
    speaker: KRU,
    choicesExist: true,
    text: "Camarada " + protName + ", encarguese de enviar tanto a su familia como a la mía a nuestra residencias " + 
          "de veraneo.",
  },
  {
    routeBegins: "decided-nervURSS2",
    text: "Las noticias de Cuba son alarmantes: un avión de reconocimiento estadounidense ha sido derribado en " + 
          "suelo cubano justo después de que Castro envió ese mensaje acerca de dar el primer golpe. La guerra " + 
          "es inminente y debemos actuar en consecuencia.",
  },
  {
    speaker: GRALS,
    text: "Me informan desde Siberia que un U-2 de reconocimiento estadounidense ha sido detectado.",
  },
  {
    speaker: KRU,
    text: "¡Aquí!",
  },
  {
    speaker: GRALS,
    text: "Si camarada Secretario General, invadió el espacio soviético. ¿Cuales son sus órdenes?",
  },
  {
    speaker: KRU,
    text: "Trasladaremos el presidium a un búnker seguro.",
  },
  {
    speaker: KGB,
    text: "Camarada Secretario General, los informes tanto de nuestros agentes como de los compañeros cubanos " + 
          "manifiestan que el conflicto es inminente. Debemos tomar una decisión ahora mismo.",
  },
  {
    speaker: KRU,
    choicesExist: true,
    text: "Su consejo es particularmente valioso para el Presidium en un momento así, camarada " + protName + ".",
  },

  //Epilogo URSS PATH
  {
    routeBegins: "wait",
    speaker: "",
    text: "28 de octubre. En algún búnker a las afueras de Moscú.",
  },
  {
    speaker: KGB,
    text: "Mensaje de Robert Kennedy a través del camarada embajador Dobrynin.",
  },
  {
    speaker: KRU,
    text: "Aceptan declarar públicamente su promesa de no invadir territorio cubano nunca más a cambio de que " + 
          "retiremos los misiles… Hay más, un mensaje secreto, retirarán los misiles de Turquía en un plazo de " + 
          "5 meses mientras lo mantengamos en reserva.",
  },
  {
    speaker: MDD,
    text: "Para mí suena bien.",
  },
  {
    speaker: KRU,
    text: "¿El Presidium aprueba?",
  },
  {
    speaker: GRALS,
    text: "Unánime, camarada Secretario General.",
  },
  {
    speaker: KRU,
    text: "Camarada " + protName + " encargate que este mensaje llegue a la Radio Moscú lo antes posible, la policía " + 
          "de Moscú se encargará de detener todo el tránsito de la ciudad si es necesario. Aún corremos el riesgo de " + 
          "que la guerra estalle incluso en el trayecto de este mensaje.",
  },
  {
    text: "Mientras tanto yo escribiré a Castro, no le gustará la noticia.",
  },
  {
    speaker: "",
    text: "El EXCOM recibe el mensaje y celebra. El mundo respira. De aquí en adelante se estableció una línea " + 
          "directa de comunicación entre Washington y Moscú que no tuviera demoras...",
  },
  {
    text: "TENEMOS EL TELÉFONO ROJO. Un paso más adelante para que podamos salvar nuestra realidad.",
  },
  {
    text: "En 1968 EE.UU y la URSS firmaron el Tratado de No Proliferación Nuclear que limita la posesión de " + 
          "armas nucleares. La mayor parte de EXCOM nunca se enteró del intercambio de misiles secreto. Quedaron " + 
          "creyendo que la diplomacia de hierro",
  },
  {
    text: "respaldada por su poderío militar fue lo que les dio la victoria en esta crisis, y que si esto funcionó " + 
          "con un gran imperio como la Unión Soviética, como no va a servir contra un pequeño país… como Vietnam.",
  },
  {
    text: "Pero esa es otra historia.En 1964 Kruschev fue sacado de su cargo debido a sus “malas decisiones” " + 
          "entre las que se incluía el desembarco de misiles en Cuba. Terminó sus días como una sombra del " + 
          "hombre poderoso que fue en su momento. ",
  },
  {
    text: "Un amargo destino. Pero así son las distintas realidades, ya han sido trazadas, solo debemos procurar que los " + 
          "hilos sigan su camino para encontrar los artefactos multiversales.",
    jumpTo: "start",
  },
  //

  //TODO URSS: MALAS RESPUESTAS -> JUMPTO
  {
    routeBegins: "publicPact",
    speaker: "",
    text: "El destino de Cuba y la Unión Soviética quedó atado, eventualmente EE.UU invade la isla lo que desencadena " + 
          "una respuesta en cadena de bombardeos nucleares garantizando la Destrucción Mutua.",
    jumpTo: "urssCheck1",
  },
  {
    text: "El TELÉFONO ROJO está fuera de nuestro alcance, camarada " + protName + ".",
  },
  {
    routeBegins: "misileDelivery",
    speaker: "",
    text: "Castro o algún oficial soviético realizan ataques nucleares ante la presión americana lo que desencadena " + 
          "una respuesta en cadena de bombardeos nucleares garantizando la Destrucción Mutua. El TELÉFONO ROJO está " + 
          "fuera de nuestro alcance, camarada " + protName + ".",
    jumpTo: "urssCheck1",
  },
  {
    routeBegins: "freighters",
    speaker: "",
    text: "Los cargueros siguen su camino y son detenidos por la marina estadounidense. Un submarino soviético que " + 
          "estaba incomunicado con Moscú se defiende de las cargas de profundidad disparando torpedos nucleares a ",
  },
  {
    text: "los buques del bloqueo americano. La guerra nuclear ha comenzado y el TELEFONO ROJO se ha perdido " + 
          "nuevamente. Intentemoslo de nuevo camarada " + protName + ".",
    jumpTo: "urssCheck2",
  },
  {
    routeBegins: "missilesToCuba",
    speaker: "",
    text: "Castro o algún oficial soviético realizan ataques nucleares ante la presión americana lo que desencadena " + 
          "una respuesta en cadena de bombardeos nucleares garantizando la Destrucción Mutua. El TELÉFONO ROJO está " + 
          "fuera de nuestro alcance, camarada " + protName + ".",
    jumpTo: "urssCheck3",
  },
  {
    routeBegins: "waitInvasion",
    speaker: "",
    text: "Cuba es invadida y el contrataque nuclear desde la propia isla surge enseguida. El Pacto de Varsovia " + 
          "invade Berlín, y la guerra contra la OTAN está declarada. EE.UU y sus aliados responden con un ataque " + 
          "nuclear equivalente.",
  },
  {
    text: "Resultado: holocausto nuclear de Destrucción Mutua Asegurada. Estábamos tan cerca " + 
          "del “TELÉFONO ROJO”, intentémoslo otra vez camarada " + protName + ".",
    jumpTo: "urssCheck4",
  },
  {
    routeBegins: "firstAttack",
    speaker: "",
    text: "La Destrucción Mutua Asegurada ocurre en cosa de minutos. Tan cerca que estuvimos del “TELÉFONO ROJO”. " + 
          "Vamos de nuevo camarada " + protName + ".",
    jumpTo: "urssCheck4",
  },
  //FIN URSS PATH
];

// The code below is to set undefined properties to the last defined property.
// It is optional and based on preference, so feel free to add or remove any function calls.

setFutureProperties("bg");
setFutureProperties("bgm");
setFutureProperties("speaker");
setFutureProperties("sprite");
setFutureProperties("spriteLeft");
setFutureProperties("spriteRight");

function setFutureProperties(key) {
  let cache = "";
  for (let obj of story) {
    if (obj[key] || obj[key] === "") {
      cache = obj[key];
    } else {
      obj[key] = cache;
    }
  }
}
export default story;
