The webpage displays a growing orange circle and a text tada inside the circle  when the Show Circle button is clicked.

The project contains HTML, CSS, and JavaScript files:

index.html contains a single button for starting the circle animation.

styles.css file defines a CSS transition that animates the circle's size increase over 2 seconds.

circle.js file contains a click event handler showCircleClick() for the Show Circle button that calls showCircle() to display the orange circle. The showCircle() function returns a Promise object that may be fulfilled or rejected.
    
    The promise is fulfilled in one second if showCircle() is not called a second time before the second elapses.
    If the promise is fulfilled, the <div> containing the circle is passed to the callback function. The message "Ta da!" was added to the <div>'s inner HTML.
    The promise is rejected if showCircle() is called a second time before the second elapses.
    If the promise is rejected, an error message is passed to the callback function. The error message should be displayed using alert().

    

