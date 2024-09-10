function checkForm() {
   // TODO: Perform input validation 
   // BECOME FALSE IF ANY ERROR SHOWS
   let formvalid = true;
   // GET THE DIV ELEMENT THAT WILL CONTAINT THE ERROR LIST
   const formerror = document.getElementById("formErrors");
   // checking email
   const re1 = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
   // SMALL LETTER
   const re3 = /[a-z]/
   // CAPITAL LETTER
   const re4 = /[A-Z]/
   // DIGIT
   const re5 = /[0-9]/
   // creating unorder list
   html = "<ul>"
   //Ensure a full name with a length greater than or equal to 1 was provided.
   //Otherwise, display "Missing full name."
   if (document.getElementById("fullName").value.length <= 1){
      // SHOW THE DIV 
       formerror.classList.remove("hide");
       html += `<li>Missing full name.</li>`;
       //BOX BECOME RED WHEN ADD THIS CLASS
       document.getElementById("fullName").classList.add("error")
      formvalid = false
   }
   //Ensure that an email address was provided and that the email address matches the regular expression:
   // /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
   // Otherwise, display "Invalid or missing email address."
   if (!re1.test(document.getElementById("email").value))
   {
      formerror.classList.remove("hide");
      html += `<li>Invalid or missing email address.</li>`;
      //BOX BECOME RED WHEN ADD THIS CLASS
      document.getElementById("email").classList.add("error")
      formvalid = false
   }
   //Ensure the password has 10 to 20 characters.
   //Otherwise, display "Password must be between 10 and 20 characters."
   if (document.getElementById("password").value.length < 10 || document.getElementById("password").value.length > 20) {
      formerror.classList.remove("hide");
      html += `<li>Password must be between 10 and 20 characters.</li>`;
      //BOX BECOME RED WHEN ADD THIS CLASS
      document.getElementById("password").classList.add("error")
      formvalid = false
   }
   //Ensure the password contains at least one lowercase character (use a regular expression).
   //Otherwise, display "Password must contain at least one lowercase character."
   if (!re3.test(document.getElementById("password").value)) {
      formerror.classList.remove("hide");
      html += `<li>Password must contain at least one lowercase character.</li>`;
      //BOX BECOME RED WHEN ADD THIS CLASS
      document.getElementById("password").classList.add("error")
      formvalid = false
   }
   //Ensure the password contains at least one uppercase character (use a regular expression).
   //Otherwise, display "Password must contain at least one uppercase character."
   if (!re4.test(document.getElementById("password").value)) {
      formerror.classList.remove("hide");
      html += `<li>Password must contain at least one uppercase character.</li>`;
      //BOX BECOME RED WHEN ADD THIS CLASS
      document.getElementById("password").classList.add("error")
      formvalid = false
   }
   //Ensure the password contains at least one digit (use a regular expression).
   //Otherwise, display "Password must contain at least one digit."
   if (!re5.test(document.getElementById("password").value)) {
      formerror.classList.remove("hide");
      html += `<li>Password must contain at least one digit.</li>`;
      //BOX BECOME RED WHEN ADD THIS CLASS
      document.getElementById("password").classList.add("error")
      formvalid = false
   }
   //Ensure the password and confirmation password match.
   //Otherwise, display "Password and confirmation password don't match."
   if (document.getElementById("passwordConfirm").value !== document.getElementById("password").value) {
      formerror.classList.remove("hide");
      html += `<li>Password and confirmation password don't match.</li>`;
      //BOX BECOME RED WHEN ADD THIS CLASS
      document.getElementById("passwordConfirm").classList.add("error")
      formvalid = false
   }
   //close the underorderlist
   html += "</ul>"
   //append the unorderlist
   formerror.innerHTML = html;
   //Hide the formErrors <div> by adding the hide class.
   //Remove the error class from all test, email, and password < input > elements.
   if (formvalid) {
      formerror.classList.add("hide");
      const inputs = document.querySelectorAll("input");
      inputs.forEach(input => input.classList.remove("error"));
   }
}

document.getElementById("submit").addEventListener("click", function(event) {
   checkForm();

   // Prevent default form action. DO NOT REMOVE THIS LINE
   event.preventDefault();
});
