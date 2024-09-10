The webpage displays the frogs pointing up, down, left, and right.
The project contains HTML, image, and JavaScript files.
The index.html file contains a 600 x 600 canvas. 
An <img> element uses inline CSS to hide the frog.png image.
The frog.js file contains two functions:
    directions object contain up, down, right, and left property and value.
    The load event handler calls drawFrog() four times with different canvas coordinates and directions.
    The drawFrog() function 
    uses a switch to check the directions.
    Translate the canvas origin from (0, 0) to the center of the frog image, which is (x + frogImg.width / 2, y + frogImg.height / 2)
    Rotate 90 degrees clockwise to draw the frog facing right if the direction right
    , 90 degrees counterclockwise to face left if the direction is right, 
    and 180 degrees to face down direction down.
    Translate the origin back to (0, 0)
    Draw the frog image by calling drawImage() canvas function 
    call resetTransform() so the next call to drawFrog isn't rotated or translated.
