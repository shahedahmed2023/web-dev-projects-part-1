A web API to fetch and display quotes on a selected topic and number of quotes.
A quote web API returns a collection of randomly selected quotes related to a given topic. The API supports two query string parameters:
topic - Specifies the requested topic. Valid topics are love, motivational, wisdom, and humor.
count - Specifies the number of quotes requested and must be a number from 1 to 5.

If the topic is not given or not recognized, the API returns an error message.

The HTML contains select option drop-downs for the topic How many quotes(default 3) and a fetch button.
The CSS styles of the body and the quote
The quote.js contain contendloaddocument handler. This handler contains a click event. when clicking a callback function fetchQuotes() handles the event.

The fetchQuotes() function in quote.js is called with the selected topic and counts when the Fetch Topic button is clicked. 

fetchQuotes() to use $.ajax() to request quotes from the quote web API. 
dataType: "JSON" Indicate that the request is expecting a JSON response.
after successfully receiving the data.
check if it is an array.if its
Display the returned quote in an ordered list inside the <div> with ID quotes.
Each quote is followed by a space, a dash, a space, and the source.
else If an error message is received, the error message should be displayed in the <div>. 

