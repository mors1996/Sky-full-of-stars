fillStar = "#ffff00"
fillSky = "#006fff"


function drawStars(ctx) {
    stars = []
    numberStars = 50

    for (let i = 0; i < numberStars; i++) {
        stars[i] = new Star();
        stars[i].coord["x"] = getRandomInt(10, 990)

        stars[i].coord["y"] = getRandomInt(10, 490)

        ctx.fillStyle = fillStar; //red





        ctx.beginPath();
        ctx.arc(stars[i].coord["x"], stars[i].coord["y"], 2.6, 0, 2 * Math.PI);
        ctx.fill();

    }
    setInterval(function () {
        var randomStar = getRandomInt(0, numberStars)
        makeStarFall(stars[randomStar], ctx)
    }, 1500);



}

function makeStarFall(star, ctx) {
    var randX = getRandomInt(5, 7)
    var randY = getRandomInt(5, 7)

    moveStar(star, randX, randY, ctx)

}

function moveStar(star, x, y, ctx) {
    setInterval(function () {
        ctx.fillStyle = fillSky; //cover in blue as the sky
        ctx.beginPath();
        ctx.arc(star.coord["x"], star.coord["y"], 2.6, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = fillStar; //cover in blue as the sky

        star.coord["x"] += x;
        star.coord["y"] += y;
        ctx.beginPath();
        ctx.arc(star.coord["x"], star.coord["y"], 2.6, 0, 2 * Math.PI);
        ctx.fill();

    }, 20)
}


function drawCeiling(ctx) {

    ctx.fillStyle = fillSky;
    ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}