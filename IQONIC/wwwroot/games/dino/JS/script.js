const dino = document.getElementById("dino");
const cactus = document.getElementById("macaroon");
const game = document.getElementById("game");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump () {
    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function (){
        dino.classList.remove("jump")
    }, 300)
}


let isAlive;

function startGame() {
    game.classList.add("running");

    return setInterval(function () {
        console.log("abc")
        let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let macaroonLeft = parseInt(window.getComputedStyle(macaroon).getPropertyValue("left"));

        if (macaroonLeft < 15 && macaroonLeft > 0 && dinoTop >= 140) {
            clearInterval(isAlive);
            isAlive = null
            alert("GAME OVER!")
            game.classList.remove("running");

        }
    }, 10)

}

game.addEventListener("click", function () {

    if (isAlive) return;

    isAlive = startGame()
})