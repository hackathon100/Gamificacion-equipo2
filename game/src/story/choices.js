var choices = [
  {
    choices: [
      {
        routeBegins: "usaPath",
        content: "USA",
        resetStore: "true"
      },
      {
        routeBegins: "urrsPath",
        content: "URRS",
        resetStore: "true"
      },
    ]
  },

  //USA PATH
  {
    choices: [
      //TODO store, de ser necesario
      {
        //store: "blockAffection",
        routeBegins: "decided-nervous",
        content: "Estaba meditando en silencio las opciones que tenemos señor Presidente."
      },
      {
        routeBegins: "decided-nervous",
        content: "Emm… si, disculpe señor Presidente, la situación me tiene perplej@"
      }
    ]
  },
  {
    choices: [
      //TODO store, de ser necesario
      {
        //store: "blockAffection",
        routeBegins: "attack",
        content: "Creo que el General tiene razón, debemos responder militarmente lo antes posible",
        //nextIndex: 0
      },
      {
        routeBegins: "planification",
        content: "Me inclino por la prudencia, para planificar de mejor manera el panorama, como planteo el Secretario de Estado",
        //nextIndex: 0
      }
    ]
  },
  {
    choices: [
      //TODO store, de ser necesario
      {
        //store: "blockAffection",
        routeBegins: "bomb",
        content: "Bombardeemos Cuba y rematemos con una invasión terrestre tal como aconseja el General.",
        //nextIndex: 0
      },
      {
        routeBegins: "doNothing",
        content: "Mantengamos la correlación de fuerzas como plantea el Secretario de Estado, no hagamos nada.",
        //nextIndex: 0
      },
      {
        routeBegins: "economic",
        content: "Tal como dice su asesor debemos hacer algún movimiento. Podríamos bloquear económicamente la isla para " + 
                 "que dejen de llegar misiles soviéticos.",
        //nextIndex: 0
      }
    ]
  },
  {
    choices: [
      //TODO store, de ser necesario
      {
        //store: "blockAffection",
        routeBegins: "noWar",
        content: "El embajador fue muy claro, un acto de guerra sería catastrófico en este momento.",
        //nextIndex: 0
      },
      {
        routeBegins: "war",
        content: "El General tiene razón, nuestra debilidad podría ser peor a la larga.",
        //nextIndex: 0
      }
    ]
  },
  {
    choices: [
      //TODO store, de ser necesario
      {
        //store: "blockAffection",
        routeBegins: "noInvade",
        content: "Aceptemos públicamente todos las peticiones del acuerdo: no invadir Cuba y retirar los misiles de " + 
                 "Turquía a cambio del retiro de los misiles cubanos.",
        //nextIndex: 0
      },
      {
        routeBegins: "agreement",
        content: "Encontremos un acuerdo intermedio en el que podamos conservar la paz y a nuestros aliados de la OTAN.",
        //nextIndex: 0
      },
      {
        routeBegins: "invade",
        content: "La caída del U-2 es el primer ataque, debemos responder invadiendo Cuba.",
        //nextIndex: 0
      }
    ]
  },

  //CHOICES URRS PATH
];

export default choices;
