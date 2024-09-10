A web API to fetch and display quotes on a selected topic and number of quotes. A quote web API returns a collection of randomly selected quotes related to a given topic. The API supports two query string parameters: topic - Specifies the requested topic. Valid topics are love, motivational, wisdom, and humor. count - Specifies the number of quotes requested and must be a number from 1 to 5.

If the topic is not given or not recognized, the API returns an error message.

The HTML contains select option drop-downs for the topic How many quotes(default 3) and a fetch button. 
The CSS styles of the body and the quote The quote.js contains contendloaddocument handler. This handler contains a click event. when clicking a callback function fetchQuotes() handles the event.

The fetchQuotes() function in quote.js is called with the selected topic and counts when the Fetch Quotes button is clicked. 

fetchQuotes()  uses the Fetch API to request quotes from the quote web API.
Call fetch() with an appropriate URL based on the topic and count parameters. 

if the response is fulfilled:
using then method if the response is fulfilled then return JSON data else throw the error.
If successful then the JSON data passes to next then method to check the data. if the data is an array. Then display the quotes in an ordered list.
Each quote  is followed by a space, a dash, a space, and the source. 
else show an API error message.

if the response is rejected:
throw an error catch method catch the error and display the error 

