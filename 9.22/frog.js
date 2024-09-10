const directions = {
   UP: 'up',
   DOWN: 'down',
   LEFT: 'left',
   RIGHT: 'right'
}

window.addEventListener("load", function () {
   const canvas = document.querySelector("canvas");

   // Draw 4 frogs facing different directions
   drawFrog(canvas, 50, 50, directions.UP);
   drawFrog(canvas, 180, 50, directions.DOWN);   
   drawFrog(canvas, 50, 180, directions.LEFT);
   drawFrog(canvas, 180, 180, directions.RIGHT);
});

function drawFrog(canvas, x, y, direction = directions.UP) {   
   const context = canvas.getContext("2d");
   const frogImg = document.querySelector("img");

   switch (direction) {
      case directions.DOWN:
         // TODO: Translate, rotate, and translate'
          //translate the origin to the center of the image
         context.translate(x + frogImg.width / 2, y + frogImg.height / 2);
         //180 degrees to face down
         context.rotate(Math.PI);
         //Translate the origin back to (0, 0)
         context.translate(-(x + frogImg.width / 2), -(y + frogImg.height / 2));
         break;
      case directions.LEFT:
         // TODO: Translate, rotate, and translate
          //translate the origin to the center of the image
         context.translate(x + frogImg.width / 2, y + frogImg.height / 2);
         //90 degrees counterclockwise to face left
         context.rotate(-Math.PI / 2);
         //Translate the origin back to (0, 0)
         context.translate(-(x + frogImg.width / 2), -(y + frogImg.height / 2));   
         break;
      case directions.RIGHT:
         // TODO: Translate, rotate, and translate
         //translate the origin to the center of the image
         context.translate(x + frogImg.width / 2, y + frogImg.height / 2);
         //Rotate 90 degrees clockwise to draw the frog facing right
         context.rotate(Math.PI / 2);
         //Translate the origin back to (0, 0)
         context.translate(-(x + frogImg.width / 2), -(y + frogImg.height / 2));
         
         break;
   }
   // draw the image
   context.drawImage(frogImg, x, y);

   // Necessary so next call to drawFrog isn't rotated or translated
   context.resetTransform();
}
