$(function () {
   $("#fetchQuotesBtn").click(function () {
      // Get selected topic and count from drop-down lists
      const selectedTopic = $("#topicSelection option:selected").val();
      const selectedCount = $("#countSelection option:selected").val();
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use $.get() or $.ajax()
   //.ajax method
   $.ajax({
      //link
      url: "https://wp.zybooks.com/quotes.php",
      //get method type
      method: "GET",
      //query string
      data: { topic:topic,count:count},
      // data receive json
      dataType: "json"
   })
      .done(function (data) {
         //checking if data is array or not
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
            //is data is not array show api error
            document.getElementById('quotes').innerHTML = data.error;
      });

 /*  let html = "<ol>";
   for (let c = 0; c < count; c++) {
      html += `<li>Quote ${c + 1} - Anonymous</li>`;
   }
   html += "</ol>";

   $("#quotes").html(html);
   */
}
