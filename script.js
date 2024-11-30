const questions = [
    //{ question: "¿Cuál es la capital de Francia?", answer: "París" },
    //{ question: "¿Cuánto es 5 + 7?", answer: "12" },
    //{ question: "¿Quién escribió 'Cien años de soledad'?", answer: "Gabriel García Márquez" },
    //{ question: "¿En qué fase de contratación se hace el otorgamiento de la Buena Pro?", answer: "Procedimientos de selección" },
{ question: "¿Quién es el encargado de sancionar administrativamente en el RNP a proveedores, postores o contratistas?", answer: "Tribunal de Contrataciones del Estado" },
{ question: "¿Cuál es la principal función del OSCE?", answer: "Regular y supervisar las contrataciones públicas, garantizando transparencia y eficiencia" },
{ question: "¿Qué tipo de información se registra en el SEACE?", answer: "Documentos de actos preparatorios, selección y ejecución contractual" },
{ question: "¿Cuáles son los principios rectores del SEACE?", answer: "Transparencia y publicidad" },
{ question: "¿Qué entidad administra el SEACE?", answer: "OSCE (Organismo Supervisor de las Contrataciones del Estado)" },
{ question: "¿Qué se requiere para ser consultor de obras en el RNP?", answer: "Tener una profesión específica como arquitectura o ingeniería civil" },
{ question: "¿Qué es el Certificado SEACE?", answer: "Un mecanismo de identificación y seguridad para el acceso al SEACE" },
{ question: "¿Quiénes pueden solicitar el Certificado SEACE?", answer: "Proveedores, entidades públicas y otros usuarios autorizados" },
{ question: "¿Cómo se solicita el Certificado SEACE?", answer: "A través de un formulario en la página web del OSCE" },
{ question: "¿Cuál es el tiempo de espera para obtener el Certificado SEACE?", answer: "3 días hábiles" },
{ question: "¿Qué ocurre si la solicitud del Certificado SEACE es observada?", answer: "Se envía una notificación al solicitante para corregirla" },
{ question: "¿Cómo se entrega el Certificado SEACE?", answer: "Electrónicamente al correo del usuario registrado" },
{ question: "¿Qué debe hacer el usuario después de recibir el Certificado SEACE?", answer: "Cambiar la contraseña inicial" },
{ question: "¿Qué se debe hacer en caso de olvidar la contraseña del Certificado SEACE?", answer: "Generar una nueva usando la opción ¿Olvidó su contraseña?" },
{ question: "¿Cuáles son los pasos generales para obtener el Certificado SEACE?", answer: "Completar el formulario y enviarlo por la Mesa de Partes Virtual del OSCE" },
  { question: "¿Qué documentos adicionales pueden requerirse al solicitar el Certificado SEACE?", answer: "Anexo 3" },
{ question: "¿Qué es el Anexo 3 en el proceso de solicitud del Certificado SEACE?", answer: "Un documento para el consentimiento de datos personales" },
{ question: "¿Qué es el arbitraje en contrataciones públicas?", answer: "Método para resolver disputas en contrataciones sin pasar por juicio" },
{ question: "¿Cuál es la misión del OSCE?", answer: "Promover contrataciones públicas íntegras, eficientes y competitivas" },
{ question: "¿Cada cuánto tiempo debe actualizarse la contraseña del Certificado SEACE?", answer: "Cada 4 meses" },
{ question: "¿Qué sucede si un proveedor no está registrado en el RNP?", answer: "No podrá contratar con el Estado" },
{ question: "¿Cuántos órganos existen en el  SNPP?", answer: "6" },
{ question: "¿Cuáles son los 5 requisitos que se necesita para ser una Entidad pública?", answer: "BSPSNP, Presupuesto, Oficina de presupuesto, Oficina de contabilidad y SIAF-RP" },
{ question: "¿Qué significa SIAF-RP?", answer: "Sistema Integrado de Administración Financiera de los Recursos Públicos" },
{ question: "El proceso presupuestario consta de 5 etapas o ciclos ¿Cuáles son?", answer: "Programación multianual, Formulación, Aprobación, Ejecución y Evaluación" },
{ question: "¿Cuál es su nombre técnico de Meta Presupuestal?", answer: "Secuencia-Programática-Funcional" },
{ question: "¿Cuáles son los tipos de gastos?", answer: "Gasto corriente, Gasto de capital y servicio a la deuda" },
{ question: "¿Cuál es el ente rector del SNA?", answer: "Dirección General de Abastecimiento" },
{ question: "¿Quienes conforman la SNA?", answer: "DGA, OSCE, La central compras públicas y las áreas involucradas en la gestión de la CAP" },
{ question: "¿Quién está encargado de desarrollar y actualizar el CUBSO?", answer: "Dirección General de Abastecimiento" },
{ question: "¿Cuántos principios tiene el SNA?", answer: "8" },
{ question: "¿Qué actores participan en la PMBSO?", answer: "Área involucrada en la gestión de la CAP, OPP y área usuaria" },
{ question: "¿Cual es la cadena de ingreso de “servicios de comedor y cafeterias”?", answer: "133925" },





{ question: "¿Cuáles son los criterios de la PMBSO?", answer: "Flexibilidad,Razonabilidad, Consistencia, Equilibrio, Programación Multianual" },
{ question: "¿Mediante quién tiene que estar aprobado el Cuadro Multianual de Necesidades?", answer: "Titular de la Entidad o por el funcionario a quien se  hubiera delegado la facultad" },
{ question: "¿Cuáles son los tipos de Proveedores?", answer: "Proveedor de Servicios, Proveedor de Bienes,Consultor de obra y Ejecutor de obra" },
{ question: "¿Quién es la Presidenta Ejecutiva del OSCE?", answer: "Laura Lisset  Gutierrez Gonzales" },
{ question: "¿Según las funciones de la central de compras públicas, la compra corporativa se divide en dos cuales son ?", answer: "Obligatorias y Facultativas" },
{ question: "¿Qué es un rubro presupuestal?", answer: "Una categoría dentro de un presupuesto" },
{ question: "¿Qué se incluye en un rubro presupuestal de gastos corrientes?", answer: "Pagos por sueldos y servicios" },
{ question: "¿Qué se entiende por rubro de inversión?", answer: "Gastos en obras o proyectos de largo plazo" },
{ question: "¿Qué documento es esencial para iniciar la cadena presupuestal?", answer: "El presupuesto base" },
{ question: "Según el Sistema Nacional de Presupuesto Público  se divide en dos niveles cuales son:", answer: "Nivel Central y Nivel Descentralizado" },

    // Agrega más preguntas aquí
];
let currentQuestion = null;
let currentPlayer = "X";
let selectedCell = null;
let timer;
let countdownTimer;
let countdownValue = 15;
let moves = 0;
let answersHistory = []; // Array para almacenar las respuestas

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
    [0, 4, 8], [2, 4, 6]             // Diagonales
];

// Inicia la música de fondo al cargar la página
window.onload = function() {
    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.play();
};

// Maneja el clic en la celda
function handleCellClick(cell, cellNumber) {
    if (cell.classList.contains("x-mark") || cell.classList.contains("o-mark")) return;

    currentQuestion = questions[Math.floor(Math.random() * questions.length)];
    selectedCell = cell;
    flipCell(cell, currentQuestion.question);
    document.getElementById("answer-buttons").classList.remove("hidden");

    const backgroundMusic = document.getElementById("background-music");
    backgroundMusic.pause();

    resetCountdown();
    startCountdown();

    timer = setTimeout(() => {
        switchPlayer();
    }, 15000);
}


// Verifica la respuesta
function checkAnswer(isCorrect) {
    clearTimeout(timer);
    stopCountdown();
    document.getElementById("answer-buttons").classList.add("hidden");

    // Registrar la pregunta, respuesta correcta y si fue acertada
    answersHistory.push({
        question: currentQuestion.question,
        correctAnswer: currentQuestion.answer,
        isCorrect: isCorrect
    });

    if (isCorrect) {
        const correctSound = document.getElementById("correct-sound");
        correctSound.play();

        flipCell(selectedCell, currentQuestion.answer);
        setTimeout(() => {
            flipCell(selectedCell, currentPlayer);
            moves++;

            setTimeout(() => {
                if (checkWinner()) {
                    // Si hay un ganador, se muestra en displayWinner
                } else if (moves === 9) {
                    displayWinner("No hay ganador");
                } else {
                    switchPlayer();
                    const backgroundMusic = document.getElementById("background-music");
                    backgroundMusic.play();
                }
            }, 4000);
        }, 4000);
    } else {
        const wrongSound = document.getElementById("wrong-sound");
        wrongSound.play();
        resetCell();
        switchPlayer();
        const backgroundMusic = document.getElementById("background-music");
        backgroundMusic.play();
    }
}


// Cambia el jugador actual
function switchPlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

// Restablece la celda al número original
function resetCell() {
    if (selectedCell) {
        flipCell(selectedCell, Array.from(document.querySelectorAll('.michi-cell')).indexOf(selectedCell) + 1);
    }
    selectedCell = null;
    stopCountdown();
}

// Verifica si hay una combinación ganadora
function checkWinner() {
    const cells = document.querySelectorAll(".michi-cell span");
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        if (
            cells[a].textContent === currentPlayer &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        ) {
            highlightWinningCells([a, b, c]); // Resalta las celdas ganadoras
            setTimeout(() => {
                displayWinner(`${currentPlayer} es el GANADOR`);
            }, 1000); // Espera 3 segundos antes de mostrar el mensaje de ganador
            return true;
        }
        return false;
    });
}
// Resalta las celdas ganadoras
function highlightWinningCells([a, b, c]) {
    const cells = document.querySelectorAll(".michi-cell");
    cells[a].style.backgroundColor = "green";
    cells[b].style.backgroundColor = "green";
    cells[c].style.backgroundColor = "green";
}

// Muestra el mensaje de ganador
// Mostrar el botón de resumen al final del juego
function displayWinner(message) {
    setTimeout(() => {
        document.querySelector(".michi-container").classList.add("hidden");
        document.getElementById("winner-message").textContent = message;
        document.getElementById("winner-message").classList.remove("hidden");
        
        // Guardar las respuestas en el almacenamiento local
        localStorage.setItem('answersHistory', JSON.stringify(answersHistory));

        // Mostrar botón para ver el resumen
        const resumenButton = document.createElement("button");
        resumenButton.textContent = "Ver Resumen de Respuestas";
        resumenButton.className = "back-button";
        resumenButton.onclick = () => {
            window.location.href = "resumen.html";
        };
        document.body.appendChild(resumenButton);
        // Seleccionar el contenedor de la imagen y la etiqueta img
        const imageContainer = document.getElementById("winner-image-container");
        const winnerImage = document.getElementById("winner-image");

        // Establecer la imagen según el mensaje de ganador
        if (message.includes("es el GANADOR")) {
            winnerImage.src = "las.webp"; // Ruta de la imagen de ganador
            winnerImage.alt = "Imagen del ganador";
        } else {
            winnerImage.src = "muerto.jpg"; // Ruta de la imagen de "no hay ganador"
            winnerImage.alt = "Imagen de no hay ganador";
        }

        // Mostrar la imagen
        imageContainer.classList.remove("hidden");
        const winSound = document.getElementById("win-sound");
        const loseSound = document.getElementById("lose-sound");
        const backgroundMusic = document.getElementById("background-music");

        backgroundMusic.pause();

        if (message.includes("es el GANADOR")) {
            winSound.play();
        } else {
            loseSound.play();
        }
    }, 2000);
}

// Reinicia el juego


// Función para voltear la celda
function flipCell(cell, content) {
    cell.classList.add('flip');
    setTimeout(() => {
        // Verifica si es una pregunta/respuesta, "X" o "O"
        const isQuestion = questions.some(q => q.question === content || q.answer === content);
        const symbolClass = content === "X" ? "x-mark" : content === "O" ? "o-mark" : "";
        cell.innerHTML = `<span class="${isQuestion ? 'question-text' : symbolClass}">${content}</span>`;
        cell.classList.remove('flip');
    }, 500);
}



// Funciones del cronómetro
function startCountdown() {
    document.getElementById("timer").classList.remove("hidden");
    const tickTockSound = document.getElementById("tick-tock-sound");
    tickTockSound.play();
    countdownTimer = setInterval(() => {
        countdownValue--;
        document.getElementById("timer").textContent = countdownValue;
        if (countdownValue <= 0) {
            clearInterval(countdownTimer);
            tickTockSound.pause();
            tickTockSound.currentTime = 0;
            switchPlayer();
            const backgroundMusic = document.getElementById("background-music");
            backgroundMusic.play();
        }
    }, 1000);
}

function resetCountdown() {
    clearInterval(countdownTimer);
    countdownValue = 15;
    document.getElementById("timer").textContent = countdownValue;
    document.getElementById("timer").classList.add("hidden");
}

function stopCountdown() {
    clearInterval(countdownTimer);
    const tickTockSound = document.getElementById("tick-tock-sound");
    tickTockSound.pause();
    tickTockSound.currentTime = 0;
    document.getElementById("timer").classList.add("hidden");
}
function showAnswersSummary() {
    const answersList = document.getElementById("answers-list");
    answersList.innerHTML = ""; // Limpiar lista previa

    answersHistory.forEach(answer => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>Pregunta:</strong> ${answer.question} <br>
            <strong>Respuesta correcta:</strong> ${answer.correctAnswer} <br>
            <strong>Resultado:</strong> <span style="color: ${answer.isCorrect ? "green" : "red"};">
                ${answer.isCorrect ? "Correcto" : "Incorrecto"}
            </span>
        `;
        answersList.appendChild(listItem);
    });

    document.getElementById("answers-summary").classList.remove("hidden");
}