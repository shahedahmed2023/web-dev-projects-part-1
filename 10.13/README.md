A Memory game using jQuery. The user must click two cards to see what is underneath. If the selected cards match, the cards are left face-up. 
The goal is to find all matching cards. The New Game button starts a new game.
The HTML contains a header for the game name,  a <div> that will contain the the cards, and a new game button.
The CSS styles cards, heard, body, etc.
memory.js:
ready event handler - Adds <div> elements to the card grid and adds click event handlers to each card that calls clickCard() 
with an index that indicates which card is clicked. The global $cardDivs array is initialized with all the div elements.
         call the jQuery method hide() to hide the $game before making cards.

clickCard() - Calls showCard() to display the first and second cards selected and calls hideCard() if the two selected cards do not match.

showCard() - Shows a card by setting the card's inner HTML and color and adding the card-visible class:
         Call slideUp() to slide up the back side of the card in 200 ms. Callback function  of slideup(
        
        Then set the card's inner HTML and color, and add the card-visible class.
        
        Finally, call slideDown() to have the card slide back down in 200 ms, revealing the card's symbol.)
        
hideCard() - Hides a card by removing the card's inner HTML and removing the card-visible class:
      Call the jQuery method slideUp() to slide up the face side of the card in 200 ms. The callback function of slideup(
      
      Then set the card's inner HTML to an empty string and remove the card-visible class.
      
      Finally, call the jQuery method slideDown() to have the blue side of the card slide back down in 200 ms.)

showMatch() - () to animate two matching cards. Used setTimeout() to delay for half a second, then call the jQuery method animate() 
to make the two matching cards' symbol fonts grow in size from 75px to 100px in 200 milliseconds, 
then back down to 75px in 200 milliseconds.

newGame() - so clicking the New Game button fades out and in the game board:

    Call fadeOut() to fade out the div with ID cardGrid.
    
    Randomize the cards.
    
    Hide the cards.
    
    Call fadeIn() to make the cardGrid div visible again.
