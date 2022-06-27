starRadius = 2.6;
fillStar = "#ffff00"
fillSky = "#006fff"



function drawStars(ctx) {
    stars = [];
    numberStars = 50;

    for (let i = 0; i < numberStars; i++) {
        stars[i] = new Star();
        stars[i].coord["x"] = getRandomInt(10, 990);

        stars[i].coord["y"] = getRandomInt(10, 490);

        ctx.fillStyle = fillStar;

        ctx.beginPath();
        ctx.arc(
            stars[i].coord["x"],
            stars[i].coord["y"],
            starRadius,
            0,
            2 * Math.PI
        );
        ctx.fill();
    }
    setInterval(function () {
        var randomStar = getRandomInt(0, numberStars);
        if (stars[randomStar].fallen === false) {
            makeStarFall(stars[randomStar], ctx);
        } else randomStar = getRandomInt(0, numberStars);
    }, 1500);
}

function makeStarFall(star, ctx) {
    var randX = getRandomInt(5, 7);
    var randY = getRandomInt(5, 7);

    moveStar(star, randX, randY, ctx);
}

function moveStar(star, x, y, ctx) {
    setInterval(function () {
      clearStar(star, ctx);
      star.coord["x"] += x;
      star.coord["y"] += y;
      ctx.beginPath();
      ctx.arc(star.coord["x"], star.coord["y"], starRadius, 0, 2 * Math.PI);
      ctx.fill();
    }, 20);
  }
  
  function clearStar(star, ctx) {
    // Used to clear (fill a circle with background color)
    ctx.fillStyle = fillSky; 
    ctx.beginPath();
    // Filling with a slightly larger radius in order to cover 
    ctx.arc(star.coord["x"], star.coord["y"], starRadius + 1, 0, 2 * Math.PI);
    ctx.fill();
    ctx.fillStyle = fillStar; 
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
