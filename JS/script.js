document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('game-container');

    function startGame() {
        gameContainer.innerHTML = '<h4>¡Bienvenido al juego!</h4>';
        gameContainer.innerHTML += '<p class="question">El siguiente juego basado en texto plantea una historia con múltiples caminos y desenlaces.</p>';
        gameContainer.innerHTML += '<p class="question">Haz click en comenzar</p>';
        gameContainer.innerHTML += '<button id="startButton">Comenzar</button>';

        document.getElementById('startButton').addEventListener('click', () => {
            gameContainer.innerHTML = '<h4>Historia</h4>';
            gameContainer.innerHTML += '<p>Te encuentras perdido en un bosque encantado. Los rumores dicen que se esconde un tesoro en el bosque. Puedes morir, quedar atrapado, escapar o volverte millonario, todo dependerá de tus decisiones.</p>'
            gameContainer.innerHTML += '<p>Has encontrado un sendero. ¿Deseas seguirlo o crear tu propio camino?</p>'
            gameContainer.innerHTML += '<button id="sendero" class="leftButton">Seguir Sendero</button>';
            gameContainer.innerHTML += '<button id="bosque" class="rightButton">Adentrarse en Bosque</button>';

            document.getElementById('sendero').addEventListener('click', () => {
                gameContainer.innerHTML = '<h4>¡Has elegido seguir por el sendero!</h4>';
                gameContainer.innerHTML += '<p>Has caminado durante varios kilometros y te encuentras con una división de caminos al frente.</p>'
                gameContainer.innerHTML += '<p>¿Qué camino decides tomar?</p>'
                gameContainer.innerHTML += '<button id="caminoIzquierda" class="leftButton">Izquierda</button>';
                gameContainer.innerHTML += '<button id="caminoDerecha" class="rightButton">Derecha</button>';

                document.getElementById('caminoIzquierda').addEventListener('click', () => {
                    gameContainer.innerHTML = '<h4>¡Has elegido ir por el camino de la izquierda!</h4>';
                    gameContainer.innerHTML += '<p>Luego de otra larga caminata te has encontrado con una cueva enorme y muy obscura.</p>'
                    gameContainer.innerHTML += '<p>¿Qué decides hacer?</p>'
                    gameContainer.innerHTML += '<button id="entrarCueva" class="leftButton">Entrar</button>';
                    gameContainer.innerHTML += '<button id="ignorarCueva" class="rightButton">Seguir Adelante</button>';

                    document.getElementById('entrarCueva').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido entrar a la cueva!</h4>';
                        gameContainer.innerHTML += '<p>Te encuentras con una aldea perdida y te capturan.</p>'
                        gameContainer.innerHTML += '<p class="atrapado">HAS QUEDADO ATRAPADO EN LA CUEVA</p>'
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/Atrapado-cueva.png">'

                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                    })

                    document.getElementById('ignorarCueva').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido ignorar la cueva!</h4>';
                        gameContainer.innerHTML += '<p>Caminaste por otros varios kilometros y resbalaste por un barranco.</p>'
                        gameContainer.innerHTML += '<p class="muerto">HAS MUERTO</p>'
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/Caída-libre.png">'

                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                        
                    })
                })
                document.getElementById('caminoDerecha').addEventListener('click', () => {
                    gameContainer.innerHTML = '<h4>¡Has elegido ir por el camino de la derecha!</h4>';
                    gameContainer.innerHTML += '<p>Luego de otra larga caminata te has encontrado con un río muy agitado.</p>'
                    gameContainer.innerHTML += '<p>¿Decides cruzarlo o buscar otro camino?</p>'
                    gameContainer.innerHTML += '<button id="cruzarRio" class="leftButton">Cruzar Río</button>';
                    gameContainer.innerHTML += '<button id="buscarCamino" class="rightButton">Seguir Buscando</button>';

                    document.getElementById('cruzarRio').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido cruzar el río agitado!</h4>';
                        gameContainer.innerHTML += '<p>Luego de luchar ferozmente contra la corriente logras cruzar y encontrar la salida.</p>'
                        gameContainer.innerHTML += '<p class="success">FELICIDADES, HAS LOGRADO ESCAPAR DEL BOSQUE</p>'
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/Cruzando.png">'

                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                    })

                    document.getElementById('buscarCamino').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido buscar otro camino!</h4>';
                        gameContainer.innerHTML += '<p>Caminaste durante días y te quedaste sin comida ni agua.</p>'
                        gameContainer.innerHTML += '<p class="muerto">HAS MUERTO</p>'
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/Venezuela.png">'

                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                    })
                })
            });

            document.getElementById('bosque').addEventListener('click', () => {
                gameContainer.innerHTML = '<h4>Has elegido adentrarte en el bosque</h4>';
                gameContainer.innerHTML += '<p>Has caminado durante algunas horas y te encuentras una cabaña abandonada.</p>'
                gameContainer.innerHTML += '<p>¿Qué decides hacer?</p>'
                gameContainer.innerHTML += '<button id="entrarCabaña" class="leftButton">Entrar</button>';
                gameContainer.innerHTML += '<button id="ignorarCabaña" class="rightButton">Seguir adelante</button>';

                document.getElementById('entrarCabaña').addEventListener('click', () => {
                    gameContainer.innerHTML = '<h4>¡Has elegido entrar a la cabaña!</h4>';
                    gameContainer.innerHTML += '<p>Dentro de la cabaña te encuentras un cofre misterioso y una llave dorada, tienes que elegir cuál tomar.</p>'
                    gameContainer.innerHTML += '<p>¿Cuál es tu decisión?</p>'
                    gameContainer.innerHTML += '<button id="abrirCofre" class="leftButton">Abrir Cofre</button>';
                    gameContainer.innerHTML += '<button id="tomarLlave" class="rightButton">Tomar Llave</button>';

                    document.getElementById('abrirCofre').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido abrir el cofre!</h4>';
                        gameContainer.innerHTML += '<p>Has encontrado el tesoro del bosque encantado.</p>'
                        gameContainer.innerHTML += '<p class="success">FELICIDADES. ERES MILLONARIO DE COJONES.</p>'
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/millonario.png">'

                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                    })

                    document.getElementById('tomarLlave').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido tomar la llave!</h4>';
                        gameContainer.innerHTML += '<p>Saliendo de la cabaña te resbalaste con excremento de caballo y te enterraste la llave en el corazón al caer.</p>'
                        gameContainer.innerHTML += '<p class="muerto">HAS MUERTO</p>'
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/Resbalando.png">'

                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                    })
                })
                document.getElementById('ignorarCabaña').addEventListener('click', () => {
                    gameContainer.innerHTML = '<h4>¡Has elegido ignorar la cabaña y seguir adelante!</h4>';
                    gameContainer.innerHTML += '<p>Luego de seguir caminando durante un rato más, encontraste un grupo de cholos. Te ofrecen un porro de alta calidad.</p>'
                    gameContainer.innerHTML += '<p>¿Qué decides hacer?</p>'
                    gameContainer.innerHTML += '<button id="fumarPorro" class="leftButton">Fumar</button>';
                    gameContainer.innerHTML += '<button id="ignorarPorro" class="rightButton">Ignorarlos y huir</button>';

                    document.getElementById('fumarPorro').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido fumar del porro encantado!</h4>';
                        gameContainer.innerHTML += '<p>Ahora eres parte de la comunidad de cholos y te convierten en su lider.</p>';
                        gameContainer.innerHTML += '<p class="atrapado">HAS QUEDADO ATRAPADO CON LOS CHOLOS</p>';
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/cholos.png">';

                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                    })

                    document.getElementById('ignorarPorro').addEventListener('click', () => {
                        gameContainer.innerHTML = '<h4>¡Has elegido ignorar el camino de las drogas!</h4>';
                        gameContainer.innerHTML += '<p>Excelente para tu salud, pero pésimo para caerles bien a los cholos. <strong>Te han apuñalado.</strong></p>'
                        gameContainer.innerHTML += '<p class="muerto">HAS MUERTO</p>'
                        gameContainer.innerHTML += '<button id="restartButton">Volver al Inicio</button><br>';
                        gameContainer.innerHTML +='<img src="Assets/apuñalando.png">'
                    
                        document.getElementById('restartButton').addEventListener('click', () => {
                            startGame();
                        });
                    })
                })
            });
        });
    }
    startGame();
});