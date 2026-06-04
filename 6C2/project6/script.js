let playerName = "";

function showScene(sceneId) {
    let scenes = document.getElementsByClassName("scene");

    for (let i = 0; i < scenes.length; i++) {
        scenes[i].style.display = "none";
    }

    document.getElementById(sceneId).style.display = "block";
}

function saveName() {
    let input = document.getElementById("playerNameInput");
    let result = document.getElementById("nameResult");

    playerName = input.value.trim();

    if (playerName === "") {
        result.innerText = "Please enter your name.";
        return;
    }

    let nameElements = document.getElementsByClassName("playerName");

    for (let i = 0; i < nameElements.length; i++) {
        nameElements[i].innerText = playerName;
    }

    showScene("riddle1");
}

function saveName2() {
    let input = document.getElementById("playerNameInput2");
    let result = document.getElementById("nameResult2");

    playerName = input.value.trim();

    if (playerName === "") {
        result.innerText = "Please enter your name.";
        return;
    }

    let nameElements = document.getElementsByClassName("playerName");

    for (let i = 0; i < nameElements.length; i++) {
        nameElements[i].innerText = playerName;
    }

    showScene("meeting with friends");
}

function checkAnswer(inputId, correctAnswer, successScene, resultId) {
    let userAnswer = document.getElementById(inputId).value;
    let result = document.getElementById(resultId);

    // нормализация ответа
    userAnswer = userAnswer.trim().toLowerCase();
    correctAnswer = correctAnswer.trim().toLowerCase();

    if (userAnswer === correctAnswer) {
        result.innerText = "Correct! You can continue.";

        setTimeout(function() {
            showScene(successScene);
        }, 1000);
    } else {
        result.innerText = "Wrong answer. Try again!";
    }
}

function restart() {
    showScene("introName");
}

showScene("introName");