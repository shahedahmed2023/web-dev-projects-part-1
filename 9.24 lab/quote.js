window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});


function fetchQuotes(topic, count) {   
   // TODO: Modify to use Fetch API
   let endpoint = "https://wp.zybooks.com/quotes.php";
   // topic and number 
   let queryString = "topic=" + topic + "&count=" + count;
   // make complete URL
   let url = endpoint + "?" + queryString;
   //Get the quote API
   fetch(url)
      // if reponse is fullfil
      //Check for the status 
      // to see if it was fulfilled correctly
      // if not throw an error
      // else return a response as JSON
      .then(response => {
         if (response.ok){
            return response.json();
         }
         else  
            throw new error("Response failed code: " + response.status)
      })
      //If data received
      // then check if its array
      // if its
      // then using loop
      //return the number of quotes
      // else show API error
      .then(data => {
         if (Array.isArray(data) && data.length > 0) {
            // create order list
            let html = "<ol>";
            for (let q of data) {
               // each list
               html += `<li>${q.quote} - ${q.source}</li>`;
            }
            // close order list
            html += "</ol>";
            // append the list to display
            document.getElementById('quotes').innerHTML = html;
         }
         else
            document.getElementById('quotes').innerHTML = data.error;

         
      })
      //If fulfillment failed
      // catch error
      // fulfill correct
      // if the Promise is rejected or if the fulfilled handler throws an exception
      // it catches 
      .catch(error => {
         console.log("Request failed", error)
      });

   // TODO: Remove the call to showAnonymousQuotes()
  //? showAnonymousQuotes(count);
}
