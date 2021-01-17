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

// speakers
const b = "Block";

// sprites
const bn = require("./sprites/block-neutral.png");
const bh = require("./sprites/block-happy.png");
const bp = require("./sprites/block-pout.png");
const nk = require("./sprites/mono.png");
const tp = require("./sprites/transparente.png");
const fc = require("./sprites/fidel.png");
const jfk = require("./sprites/kennedy1.png");
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

//Names
const JFK = "John F. Kennedy"
const RK = "Robert Kennedy"
const AD = "Anatoli Dobrynin"

let story = [
  {
    //TODO Cambiar los fondos y personajes
    bg: coldwar,
    bgm: anthem,
    sprite: mago,
    speaker: "",
    //TODO Textos no terminados, faltan detalles
    text: "Oye tú, debemos viajar hacia el año 1962 del planeta Tierra, a un periodo en que los habitantes de esta " +
          "realidad estuvieron a punto de perecer debido a una lucha de poderes ocurrida entre los dos más " +
          "grandes imperios que dominaban el mundo..."
  },
  {
    text: "en ese entonces: Estados Unidos y la Unión de Repúblicas Socialistas Soviéticas. Nuestro objetivo será " +
          "encontrar “EL TELÉFONO ROJO”, un objeto que utilizan los poderosos humanos para comunicarse y que guarda " +
          "un tremendo potencial (poder falico)..."
  },
  {
    text: "debido a que su origen en este plano se dio solo gracias a que las personas indicadas tomaron las decisiones " +
          "correctas. Gracias a nuestros poderes (inserte magia) adoptaremos la forma de los asesores más influyentes " +
          "de algún importante consejo..."
  },
  {
    text: "de expertos y tu labor será propiciar que los hechos ocurran tal y como se dieron en esta realidad. Cualquier " +
          "alteración en las decisiones que tomen los gobernantes provocará probablemente que este planeta se aniquile " +
          "a si mismo, pero..."
  },
  {
    text: "aún más importante, ¡NO PODREMOS OBTENER EL TELÉFONO ROJO! Que es la verdadera razón del porque estamos aquí. " +
          "Si bien yo elegí el cuando, tu puedes inclinarte por el dónde."
  },
  { 
    choicesExist: true,
    receiveJump:"features",
    text: "¿Quieres que vayamos a Estados Unidos? ¿o prefieres que viajemos a la Unión Soviética?",
  },

  //INICIO USA PATH
  {
    //TODO Transiciones/efectos, definir speaker si es necesario
    routeBegins: "usaPath",
    bg: whitehouse,
    speaker: "",
    sprite: tp ,
    text: "16 de octubre de 1962 a las 11:50. Oficina Oval del Presidente, Washington D.C."
  },
  {
    //TODO Transiciones/efectos
    speaker: "Oficial",
    bg: oval,
    sprite: usm,
    text: "Señor presidente. Un avión de reconocimiento ha traído preocupantes noticias desde Cuba.",
  },
  {
    text: "Fotografías aéreas han descubierto misiles nucleares soviéticos de alcance intermedio " + 
          "capaces de alcanzar Washington D.C. en solo 13 minutos.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfk,
    text: "Nikita Khruschev ha faltado al acuerdo que tenía con nosotros respecto a la instalación " +
          "de ojivas nucleares en Cuba y ha cruzado un límite que puede traer consecuencias catastróficas.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "Asesor",
    sprite: usa,
    text: "Señor presidente, las elecciones están al caer y la presión de los republicanos por la situación " +
          "cubana se esta convirtiendo en un problema real para su reelección.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfk,
    text: "¿Cuando cree que estarán listas para atacar?",
  },
  {
    //TODO Transiciones/efectos
    sprite: usm,
    speaker: "Oficial",
    text: "En un par de horas señor. Deberíamos bombardear antes de que puedan estar preparados, e intentar " +
          "nuevamente una invasión terrestre. Castro no podrá resistir una segunda arremetida. ",
  },
  {
    //TODO Transiciones/efectos
    speaker: "Secretario de Estado",
    sprite: mp,
    text: "Creo que sería más prudente utilizar el tiempo que requieren para instalar las cabezas nucleares en " + 
          "planificar una estrategia más elaborada",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfk,
    choicesExist: true,
    text: "¿Y tu que crees “protagonista”? Has estado muy silencios@",
  },
  {
    routeBegins: "decided-nervous",
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
    speaker: "",
    sprite: tp,
    bg: whitehouse,
    text: "16 de octubre a las 18:30. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfk,
    bg: excom,
    text: "Señores, convoqué al EXCOM para que tomemos una decisión conjunta respecto a la situación de los misiles cubanos.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "Oficial",
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
    speaker: "Asesor",
    sprite: usa,
    text: "Si bien un ataque directo parece ser la opción más lógica, creo que a esta altura los misiles soviéticos " + 
          "ya deben estar preparados para lanzar un contrataque a cualquier ciudad importante de los Estados Unidos, " + 
          "además de que ante la baja de alguno de los...",
  },
  {
    text: "soldados soviéticos que está en Cuba esto sería considerado un acto de guerra por parte de la URSS.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "Secretario de Estado",
    sprite: mp,
    text: "Yo creo que no deberíamos hacer nada.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfk,
    text: "¿Cómo?",
  },
  {
    //TODO Transiciones/efectos
    speaker: "Secretario de Estado",
    sprite: mp,
    text: "Eso, creo que la correlación de fuerzas seguiría tal cual. Nosotros tenemos misiles de la OTAN repartidos " + 
          "por Turquía e Italia. Y ser aniquilados por una guerra nuclear con los cubanos tiene el mismo resultado " +
          "que serlo ante los soviéticos",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfk,
    text: "Concuerdo en ese punto, pero no podemos darnos el lujo como gobierno de dejar pasar una afrenta de esta " + 
          "magnitud. Se vería como un acto de debilidad ya no solo para el electorado republicano sino que para el " + 
          "propio Kruschev.",
  },
  {
    choicesExist: true,
    text: "Los misiles comenzarían a ser enviados por todo Ásia y África. No queremos que una segunda o tercera Cuba " + 
          "surja aquí en nuestras narices, el apoyo económico de la Alianza Para el Progreso sería solo una pérdida de " + 
          "dólares. ¿Qué deberíamos hacer “protagonista”?",
  },
  {
    //TODO Transiciones/efectos
    routeBegins: "economic",
    sprite: tp,
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
    speaker: "General",
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
    sprite: jfk,
    text: "Creo que un ataque a Cuba sería como un dominó mundial en donde la URSS procedería a tomar Berlín, " + 
          "lo que las naciones de la OTAN responderían con un ataque nuclear directo. La respuesta soviética " + 
          "sería devolver el ataque lo que...",
  },
  {
    text: "nos obligaría a entrar en esta escalada de Destrucción Mutua Asegurada. Debemos informar al pueblo " + 
          "estadounidense sobre lo que ocurre para que estén preparados para lo peor. Acompáñame “protagonista”",
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
    sprite: jfk,
    bg: oval,
    text: "Entiendo que el bloqueo este operativo. General, cual es el protocolo de la marina en caso de que " + 
          "arribe un carguero soviético.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "General",
    sprite: usm,
    text: "Bueno, si el barco no se detiene ante las advertencias de nuestros buques, se dispararán salvas de " + 
          "advertencia, si aun así siguen intrincados en su inerme obcecación, los marines están preparados para " +
          "el abordaje y captura del navío.",
  },
  {
    //TODO Transiciones/efectos, JFK preocupado
    speaker: JFK,
    sprite: jfk,
    text: "¡QUE¡",
  },
  {
    //TODO Transiciones/efectos
    speaker: "General",
    sprite: usm,
    text: "Y En caso de que nuestros radares detecten un submarino, lanzarán cargas de profundidad para obligarlos a salir.",
  },
  {
    //TODO Transiciones/efectos
    speaker: JFK,
    sprite: jfk,
    text: "Bobby, necesito que vayas a la embajada soviética y parlamentes con el embajador Anatoli Dobriynin, necesitamos " + 
          "predecir la respuesta que tendrá Moscú ante un protocolo de esta magnitud. Necesito que seas muy discreto. Que " + 
          "te acompañe “protagonista”",
  },
  {
    //TODO Transiciones/efectos
    speaker: RK,
    sprite: rk,
    text: "Enseguida, tomaremos todas las precauciones. Vamos “protagonista”.",
  },
  {
    //TODO Transiciones/efectos
    speaker: "",
    sprite: tp,
    text: "23 de octubre en la noche. Embajada soviética",
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
          "será considerada como un acto de guerra por parte del Kremlin. Por lo que si su supuesto es cierto Robert, debería " + 
          "ajustar los protocolos de la marina.",
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
    sprite: jfk,
    bg: oval,
    text: "Bobby, “Protagonista”, como les fue con el embajador.",
  },
  {
    speaker: "Robert", //TODO Robert Kennedy??
    sprite: rk,
    text: "No tenemos muy buenas noticias Jack. La detención del convoy soviético será tomado como un acto de guerra. Tenemos " + 
          "que enviar un asesor que se encargue de que la marina por nada del mundo le dispare a un navío soviético.",
  },
  {
    speaker: "General",
    sprite: usm,
    text: "Señor Presidente, un bloqueo sin la coacción de la fuerza no es realmente un bloqueo. La nación se vería débil ante " + 
          "la URSS y el Pacto de Varsovia.",
  },
  {
    speaker: JFK,
    sprite: jfk,
    choicesExist: true,
    text: "¿Qué opinas “protagonista”?",
  },
  {
    //TODO Transiciones/efectos
    routeBegins: "noWar",
    speaker: "",
    bg: whitehouse,
    sprite: tp,
    text: "26 de octubre a las 18:00. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    speaker: "Asesor",
    sprite: usa,
    bg: oval,
    text: "Los soviéticos quieren negociar Señor. Retiraran los misiles a cambio de que declaremos publicamente que no " + 
          "invadiremos Cuba nunca más.",
  },
  {
    speaker: JFK,
    sprite: jfk,
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
    speaker: "General",
    bg: oval,
    sprite: usm,
    text: "Los soviéticos están exigiendo un nuevo acuerdo a través de Radio Moscú, Kruschev quiere que los EE.UU también retire " + 
          "los misiles de Turquía. Es inaceptable Señor, no podemos sacrificar la seguridad de un aliado a cambio de la nuestra, " + 
          "eso sería el fin de la OTAN.",
  },
  {
    speaker: JFK,
    sprite: jfk,
    text: "En cualquier caso esos misiles están obsoletos, general, pero tiene razón, un conflicto con nuestros aliados en un momento " + 
          "como este sería un desequilibrió que no nos podemos dar el lujo de sufrir.",
  },
  {
    speaker: "Asesor",
    sprite: usa,
    text: "¿Por qué Kruschev ofrecería dos tratos distintos en 24 horas?",
  },
  {
    speaker: "Secretario de Estado",
    sprite: mp,
    text: "Quizás fue depuesto de su cargo y el ejército rojo está al mando. Eso cambiaría todo el proceso de negociaciones.",
  },
  {
    speaker: "General",
    sprite: usm,
    text: "La Fuerza Aérea informa que una aeronave U-2 de reconocimiento no ha regresado de Cuba. Probablemente ha cayo en combate " + 
          "señor. Esto ha comenzado.",
  },
  {
    speaker: JFK,
    sprite: jfk,
    //TODO mira al protagonista
    text: "Llegó el momento de tomar decisiones importantes. Necesito escuchar a todos mis asesores.",
  },
  {
    speaker: JFK,
    choicesExist: true,
    text: "Llegó el momento de tomar decisiones importantes. Necesito escuchar a todos mis asesores.",
  },

  //Epilogo
  {
    routeBegins: "agreement",
    speaker: "",
    bg: whitehouse,
    sprite: tp,
    text: "27 de octubre a las 19:30. Oficina Oval del Presidente, Washington D.C.",
  },
  {
    text: "Los colaboradores más cercanos a Kennedy encontraron una forma de aceptar el trato sin romper la OTAN. Primero " + 
          "enviaron una carta pública aceptando el primer trato de Kruschev, NUNCA INVADIRÁN CUBA. Robert Kennedy y tu en " + 
          "persona llevaron el acuerdo al embajador soviético, pero con un segundo mensaje “top secret”: ",
          bg: top_secret,
  },
  {
    speaker: RK,
    sprite: rk,
    text: "Los oficiales quieren retribución por la caída del avión de reconocimiento, por lo que podemos aceptar públicamente " + 
          "solo el compromiso de no invasión de Cuba, pero no el retiro de los misiles en Turquía, al menos no públicamente. " + 
          "Embajador Dobriynin, acepten este trato y la promesa de este gobierno es que los misiles de Turquía habrán sido " + 
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
    text: "28 de octubre",
    spriteLeft: tp,
    sprite: tp,
    bg: black,
  },
  //TODO Arreglar textos (lo mas probable es que haya que separarlos porque son muy largos)
  {
    sprite: red_phone,
    spriteLeftEffect: "shake",
    text: "Kruschev y el Presidium aceptaron el trato, el EXCOM celebra y el mundo respira. De aquí en adelante se " + 
          "estableció una línea directa de comunicación entre Washington y Moscú que no tuviera demoras: haz conseguido " + 
          "EL TELÉFONO ROJO. Un paso más adelante para que podamos salvar nuestra realidad.",
  },
  {
    sprite: tp,
    spriteLeft: tp,
    text: "En 1968 EE.UU y la URSS firmaron el Tratado de No Proliferación Nuclear que limita la posesión de armas " + 
          "nucleares. La mayor parte de EXCOM nunca se enteró del intercambio de misiles secreto. Quedaron creyendo que " + 
          "la diplomacia de hierro respaldada por su poderío militar fue lo que les dio la victoria en esta crisis, y " + 
          "que si esto funcionó con un gran imperio como la Unión Soviética, como no va a servir contra un pequeño país… " + 
          "como Vietnam. Pero esa es otra historia.",
    bg: coldwar,
  },
  {
    bg: jfk_death,
    sprite: tp,
    spriteLeft: tp,
    text: "En 1963 J. F. Kennedy fue asesinado en Dallas mientras aún ejercía como presidente, convirtiéndose en el " + 
          "cuarto presidente estadounidense que muere en el ejercicio de su cargo. Su hermano Robert corrió una suerte " + 
          "similar: en 1968 fue abatido por un tirador mientras se encontraba en plena campaña presidencial en California. ",
  },
  {
    bg: bobby,
    text: "Un trágico destino para estos sujetos. Lamentablemente sabes que no podemos intervenir en las lineas temporales " + 
          "que ya han sido trazadas, solo procurar que los hilos sigan su camino para encontrar los artefactos (mágicos, " + 
          "faéricos, viles, oscuros, abisales, bla).",
  },
  //TODO USA MALAS RESPUESTAS
  //Fin USA PATH
  //TODO URRS PATH
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
