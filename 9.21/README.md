The webpage displays a canvas with a gray background brown ground and a snowman scene.
The index.html file contains a single 300 x 300 canvas. 
The snowman.js file contains three completed functions:
The DOMContentLoaded event handler calls drawGround(), drawSnowText(), drawSnowman(), and drawSnowflakes() to create the snowman scene.
drawGround() displays brown ground under a light gray sky.
drawSnowflakes() calls drawSingleFlake() 100 times to display 100 snowflakes in randomly chosen locations.
To draw the snow text:
drawSnowText() function:
font: 80px Verdana
text-align: center
text-baseline: top
fillStyle: blue
fillText()to display the text at coordinate (canvas.width / 2, 10)

To draw the snowman:
The drawSnowman() function:
Bottom circle: arc() centered at (150, 200) with radius 50 that begins at 0 and ends at Math.PI * 2
Middle circle: arc() centered at (150, 120) with radius 40 that begins at 0 and ends at Math.PI * 2
Top circle: arc() centered at (150, 60) with radius 25 that begins at 0 and ends at Math.PI * 2
All three circles use fillStyle white and are displayed with the fill() function

To draw the snowflakes
drawSingleFlake(x,y) function:
Start a new path
Move to the coordinate (x, y)
Draw a line to (x + flakeSize / 2, y + flakeSize / 2), then to (x, y + flakeSize), and then to (x - flakeSize / 2, y + flakeSize / 2)
Use fillStyle #eee
Use fill() to display the diamond
