var choices = [
  {
    choices: [
      {
        routeBegins: "usaPath",
        content: "Estados Unidos (EE.UU.)",
        resetStore: "true"
      },
      {
        routeBegins: "urssPath",
        content: "Union Sovietica (URSS)",
        resetStore: "true",
        nextIndex: 6
      },
    ]
  },

  //CHOICES USA PATH
  {
    choices: [
      {
        routeBegins: "decided-nervous",
        content: "(Decidid@) Estaba meditando en silencio las opciones que tenemos señor Presidente."
      },
      {
        routeBegins: "decided-nervous",
        content: "(Nervios@) Emm… si, disculpe señor Presidente, la situación me tiene perplej@"
      }
    ]
  },
  {
    choices: [
      {
        routeBegins: "attack",
        content: "Creo que el General tiene razón, debemos responder militarmente lo antes posible",
        nextIndex: 2
      },
      {
        // Correcta
        routeBegins: "planification",
        content: "Me inclino por la prudencia, para planificar de mejor manera el panorama, como planteo el Secretario de Estado",
      }
    ]
  },
  {
    choices: [
      {
        routeBegins: "bomb",
        content: "Bombardeemos Cuba y rematemos con una invasión terrestre tal como aconseja el General.",
        nextIndex: 3
      },
      {
        routeBegins: "doNothing",
        content: "Mantengamos la correlación de fuerzas como plantea el Secretario de Estado, no hagamos nada.",
        nextIndex: 3
      },
      {
        // Correcta
        routeBegins: "economic",
        content: "Tal como dice su asesor debemos hacer algún movimiento. Podríamos bloquear económicamente la isla para " + 
                 "que dejen de llegar misiles soviéticos.",
      }
    ]
  },
  {
    choices: [
      {
        // Correcta
        routeBegins: "noWar",
        content: "El embajador fue muy claro, un acto de guerra sería catastrófico en este momento.",
      },
      {
        routeBegins: "war",
        content: "El General tiene razón, nuestra debilidad podría ser peor a la larga.",
        nextIndex: 4
      }
    ]
  },
  {
    choices: [
      {
        routeBegins: "noInvade",
        content: "Aceptemos públicamente todos las peticiones del acuerdo: no invadir Cuba y retirar los misiles de " + 
                 "Turquía a cambio del retiro de los misiles cubanos.",
        nextIndex: 5
      },
      {
        // Correcta
        routeBegins: "agreement",
        content: "Encontremos un acuerdo intermedio en el que podamos conservar la paz y a nuestros aliados de la OTAN.",
        nextIndex: 0
      },
      {
        routeBegins: "invade",
        content: "La caída del U-2 es el primer ataque, debemos responder invadiendo Cuba.",
        nextIndex: 5
      }
    ]
  },

  //CHOICES URSS PATH
  {
    choices: [
      {
        //Seguro
        routeBegins: "decided-nervURSS",
        content: "En efecto camarada Secretario General, tendríamos que hacerlo secretamente."
      },
      {
        //Dudoso
        routeBegins: "decided-nervURSS",
        content: "Es una posición privilegiada, pero el compañero Castro puede interpretar esto como una señal de imperialismo."
      },
    ]
  },
  {
    choices: [
      {
        routeBegins: "publicPact",
        content: "Hagamos público el pacto de no agresión para prevenir la invasión como señala el Camarada General.",
        nextIndex: 7
      },
      {
        routeBegins: "misileDelivery",
        content: "Entreguemos los misiles a Castro y nuestros oficiales que vele personalmente por la seguridad de su territorio como aconseja el Camarada Agente.",
        nextIndex: 7
      },
      {
        // Correcta
        routeBegins: "waitReaction",
        content: "Lo más prudente es esperar la reacción estadounidense como señala el Camarada Ministro."
      },
    ]
  },
  {
    choices: [
      {
        // Correcta
        routeBegins: "retire",
        content: "La prudencia es imprescindible en este momento, retiremos a nuestros compañeros por ahora."
      },
      {
        routeBegins: "freighters",
        content: "El bloqueo es un acto de guerra claro, los cargueros deben llegar a la isla a toda costa.",
        nextIndex: 8
      },
    ]
  },
  {
    choices: [
      {
        // Correcta
        routeBegins: "negotiate",
        content: "Concuerdo con su estrategia camarada Secretario General, negociemos el retiro a cambio de impedir la invasión de Cuba."
      },
      {
        routeBegins: "missilesToCuba",
        content: "No podemos ceder ante los americanos, los misiles deben quedarse en Cuba.",
        nextIndex: 9
      },
    ]
  },
  {
    choices: [
      {
        routeBegins: "decided-nervURSS2",
        content: "Enseguida camarada Secretario General."
      },
      {
        routeBegins: "decided-nervURSS2",
        content: "A su orden camarada Secretario General ¿hay alguna novedad?"
      },
    ]
  },
  {
    choices: [
      {
        routeBegins: "waitInvasion",
        content: "Esperemos la invasión de Cuba y respondamos en consecuencia convocando al Pacto de Varsovia y movilizando las piezas en Europa.",
        nextIndex: 11
      },
      {
        routeBegins: "firstAttack",
        content: "El que pega primero pega dos veces: hagamos el primer ataque como aconsejo Castro.",
        nextIndex: 11
      },
      {
        // Correcta
        routeBegins: "wait",
        content: "No perdamos la paciencia, esperemos una señal diplomática estadounidense.",
        nextIndex: 0
      },
    ]
  },
];

export default choices;
