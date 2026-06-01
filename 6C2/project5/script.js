
function showScene(sceneId) {
    let scenes = document.getElementsByClassName("scene");

    for (let i = 0; i < scenes.length; i++) {
        scenes[i].style.display = "none";
    }

    let selectedScene = document.getElementById(sceneId);
    selectedScene.style.display = "block";
}

function restart() {
    showScene("start");
}

window.onload = function() {
    showScene("start");
};