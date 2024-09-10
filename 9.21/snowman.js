// Size of a single snowflake
const flakeSize = 8;

window.addEventListener("DOMContentLoaded", function() {
   let canvas = document.querySelector("canvas");
   
   drawGround(canvas);
   drawSnowText(canvas);
   drawSnowman(canvas);  
   drawSnowflakes(canvas);   
});

function drawGround(canvas) {
   let context = canvas.getContext("2d");

   // Background 
   context.fillStyle = "#bbb";
   context.fillRect(0, 0, canvas.width, canvas.height);

   // Ground
   context.fillStyle = "brown";
   context.fillRect(0, canvas.height - 80, canvas.width, canvas.height);
}

function drawSnowflakes(canvas) {   
   for (let c = 0; c < 100; c++) {
      let x = Math.floor(Math.random() * canvas.width);
      let y = Math.floor(Math.random() * canvas.height);
      drawSingleFlake(canvas, x, y);
   }
}

function drawSnowText(canvas) {
   // TODO: Complete the function
   let context = canvas.getContext("2d");
   // add front of the text
   context.font = "80px Verdana";
   // text center
   context.textAlign = "center";
   // draw bottom of the baseline
   context.textBaseline = "top";
   // color of the text
   context.fillStyle = "blue";
   //draw the text 
   context.fillText("SNOW", canvas.width / 2,10);

}

function drawSnowman(canvas) { 
   // TODO: Complete the function
   let context = canvas.getContext("2d");
   //begin draw
   context.beginPath();
   //Adds an arc to the path
   context.arc(150, 200, 50, 0 , Math.PI * 2);
   //fill with while color
   context.fillStyle = "white";
   // fill it
   context.fill();

   //begin draw
   context.beginPath();
   //Adds an arc to the path
   context.arc(150, 120, 40, 0, Math.PI * 2);
   //fill with while color
   context.fillStyle = "white";
   // fill it
   context.fill();


   //begin draw
   context.beginPath();
   //Adds an arc to the path
   context.arc(150, 60, 25, 0, Math.PI * 2);
   //fill with while color
   context.fillStyle = "white";
    // fill it
   context.fill();
}

function drawSingleFlake(canvas, x, y) {
   // TODO: Complete the function
   let context = canvas.getContext("2d");
   // begin drawing
   context.beginPath()
   // move x and y to this point
   context.moveTo(x,y);
   // then make a line and move to this point
   context.lineTo(x + flakeSize / 2, y + flakeSize / 2);
   // then make another line and move to this point
   context.lineTo(x, y + flakeSize);
   // then make another  line and move to this point
   context.lineTo(x - flakeSize / 2, y + flakeSize / 2);
   // then close the path
   context.closePath()
   // fill color
   context.fillStyle = "#eee";
   // fill it
   context.fill();

}
