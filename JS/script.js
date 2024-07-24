let gameState = {
    currentStage: 0     //Stage tracking
};

const gameStages = [    //JSON Game Stages
    {   //Stage 0 BIENVENIDA
        title: "¡Bienvenido al juego!",
        description: "El siguiente juego basado en texto plantea una historia con múltiples caminos y desenlaces. Te encuentras perdido en un bosque encantado. Los rumores dicen que se esconde un tesoro en el bosque. Puedes morir, quedar atrapado, escapar o volverte millonario, todo dependerá de tus decisiones. Has encontrado un sendero. ¿Deseas seguirlo o crear tu propio camino?",
        options: [
            { text: "Seguir Sendero", nextStage: 1 },
            { text: "Adentrarse en Bosque", nextStage: 8 }
        ],
        imageURL: " "
    },
    {   //Stage 1 SENDERO
        title: "¡Has elegido seguir por el sendero!",
        description: "Has caminado durante varios kilometros y te encuentras con una división de caminos al frente. ¿Qué camino decides tomar?",
        options: [
            { text: "Izquierda", nextStage: 2 },
            { text: "Derecha", nextStage: 3 }
        ],
        imageURL: " "
    },
    {   //Stage 2 SENDERO/IZQUIERDA
        title: "¡Has elegido ir por el camino de la izquierda!",
        description: "Luego de otra larga caminata te has encontrado con una cueva enorme y muy obscura. ¿Qué decides hacer?",
        options: [
            { text: "Entrar", nextStage: 4 },
            { text: "Seguir", nextStage: 5 }
        ],
        imageURL: " "
    },
    {   //Stage 3 SENDERO/DERECHA
        title: "¡Has elegido ir por el camino de la derecha!",
        description: "Luego de otra larga caminata te has encontrado con un río muy agitado. ¿Decides cruzarlo o buscar otro camino?",
        options: [
            { text: "Cruzar Río", nextStage: 6 },
            { text: "Seguir Buscando", nextStage: 7 }
        ],
        imageURL: " "
    },
    {   //Stage 4 SENDERO/IZQUIERDA/ENTRAR     FINAL CUEVA
        title: "¡Has elegido entrar a la cueva!",
        description: "Te encuentras con una aldea perdida y te capturan. HAS QUEDADO ATRAPADO EN LA CUEVA",
        options: [
            { text: "Regresar", nextStage: 2 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/Atrapado-cueva.png"
    },
    {   //Stage 5 SENDERO/IZQUIERDA/SEGUIR      FINAL BARRANCO
        title: "¡Has elegido ignorar la cueva!",
        description: "Caminaste por otros varios kilometros y resbalaste por un barranco. HAS MUERTO",
        options: [
            { text: "Regresar", nextStage: 2 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/Caída-libre.png"
    },
    {   //Stage 6   SENDERO/DERECHA/CRUZAR      FINAL RÍO
        title: "¡Has elegido cruzar el río agitado!",
        description: "Luego de luchar ferozmente contra la corriente logras cruzar y encontrar la salida. FELICIDADES, HAS LOGRADO ESCAPAR DEL BOSQUE",
        options: [
            { text: "Regresar", nextStage: 3 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/Cruzando.png"
    },
    {   //Stage 7   SENDERO/DERECHA/SEGUIR      FINAL DESHIDRATACIÓN
        title: "¡Has elegido buscar otro camino!",
        description: "Caminaste durante días y te quedaste sin comida ni agua. HAS MUERTO",
        options: [
            { text: "Regresar", nextStage: 3 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/Venezuela.png"
    },
    {   //Stage 8   BOSQUE
        title: "¡Has elegido adentrarte en el bosque!",
        description: "Has caminado durante algunas horas y te encuentras una cabaña abandonada. ¿Qué decides hacer?",
        options: [
            { text: "Entrar", nextStage: 9 },
            { text: "Seguir adelante", nextStage: 10 }
        ],
        imageURL: " "
    },
    {   //Stage 9   BOSQUE/ENTRAR
        title: "¡Has elegido entrar a la cabaña!",
        description: "Dentro de la cabaña te encuentras un cofre misterioso y una llave dorada, tienes que elegir cuál tomar. ¿Cuál es tu decisión?",
        options: [
            { text: "Abrir Cofre", nextStage: 11 },
            { text: "Tomar Llave", nextStage: 12 }
        ],
        imageURL: " "
    },
    {   //Stage 10   BOSQUE/SEGUIR
        title: "¡Has elegido ignorar la cabaña y seguir adelante!",
        description: "Luego de seguir caminando durante un rato más, encontraste un grupo de cholos. Te ofrecen un porro de alta calidad. ¿Qué decides hacer?",
        options: [
            { text: "Fumar", nextStage: 13 },
            { text: "Ignorarlos y huir", nextStage: 14 }
        ],
        imageURL: " "
    },
    {   //Stage 11   BOSQUE/ENTRAR/COFRE        FINAL MILLONARIO
        title: "¡Has elegido abrir el cofre!",
        description: "Has encontrado el tesoro del bosque encantado. FELICIDADES. ERES MILLONARIO DE COJONES.",
        options: [
            { text: "Regresar", nextStage: 9 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/millonario.png"
    },
    {   //Stage 12   BOSQUE/ENTRAR/LLAVE        FINAL MUERTO POR CAIDA
        title: "¡Has elegido tomar la llave!",
        description: "Saliendo de la cabaña te resbalaste con excremento de caballo y te enterraste la llave en el corazón al caer. HAS MUERTO",
        options: [
            { text: "Regresar", nextStage: 9 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/Resbalando.png"
    },
    {   //Stage 13   BOSQUE/SEGUIR/FUMAR        FINAL LIDER CHOLOS
        title: "¡Has elegido fumar del porro encantado!",
        description: "Ahora eres parte de la comunidad de cholos y te convierten en su lider. HAS QUEDADO ATRAPADO CON LOS CHOLOS",
        options: [
            { text: "Regresar", nextStage: 10 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/cholos.png"
    },
    {   //Stage 14   BOSQUE/SEGUIR/HUIR         FINAL APUÑALADO CHOLOS
        title: "¡Has elegido ignorar el camino de las drogas!",
        description: "Excelente para tu salud, pero pésimo para caerles bien a los cholos. Te han apuñalado. HAS MUERTO",
        options: [
            { text: "Regresar", nextStage: 10 },
            { text: "Reiniciar juego", nextStage: 0 }
        ],
        imageURL: "Assets/apuñalando.png"
    }
];

function updateGame() {
    const stage = gameStages[gameState.currentStage];                       //Current Stage
    document.getElementById('title').textContent = stage.title;             //Title update
    document.getElementById('description').textContent = stage.description; //Description update
    document.getElementById('button1').textContent = stage.options[0].text; //Left button update
    document.getElementById('button2').textContent = stage.options[1].text; //Right button update
    document.getElementById('image').src = stage.imageURL;                  //Image update
}

function makeChoice(choiceIndex) {
    const currentStage = gameStages[gameState.currentStage];                //Current stage
    const nextStageIndex = currentStage.options[choiceIndex].nextStage;     //Next stage
    gameState.currentStage = nextStageIndex;                                //Stage update
    updateGame();                                                           //Graphic update
}

updateGame();