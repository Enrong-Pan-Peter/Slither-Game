var sn = [42, 41], dz = 43, fx = 1;
var ctx = document.getElementById("can").getContext("2d");
var gameOver = false;

function draw(t, c) {
    ctx.fillStyle = c;
    ctx.fillRect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18);
}

document.onkeydown = function (e) {
    var n = [-1, -20, 1, 20][(e || event).keyCode - 37] || fx;
    if (sn[1] - sn[0] !== n) fx = n;
};

function gameLoop() {
    if (gameOver) return;

    sn.unshift(n = sn[0] + fx);

    if (sn.indexOf(n, 1) > 0 || n < 0 || n > 399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19) {
        alert("GAME OVER");
        gameOver = true;
        return;
    }

    draw(n, "Lime");

    if (n === dz) {
        while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);
        draw(dz, "red");
    } else {
        draw(sn.pop(), "black");
    }

    setTimeout(gameLoop, 130);
}

function restartGame() {
    sn = [42, 41];
    dz = 43;
    fx = 1;
    gameOver = false;
    ctx.clearRect(0, 0, 400, 400);
    gameLoop();
}

draw(dz, "red");
gameLoop();
