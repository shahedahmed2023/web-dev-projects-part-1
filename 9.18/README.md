

This program validates a user registration form. Error messages will be displayed at the bottom of the form, as shown below.
The project contains HTML, CSS, and JavaScript files. 
The register.js file registers a click event handler for the Register button that prevents the form from submitting. 
The event handler calls checkForm() to perform data validation.\
Check for each validation:
1. Ensure a full name with a length greater than or equal to 1 was provided.
    Otherwise, display "Missing full name." 
2. Ensure that an email address was provided and that the email address matches the regular expression:
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/
    Otherwise, display "Invalid or missing email address."
3. Ensure the password has 10 to 20 characters.
    Otherwise, display "Password must be between 10 and 20 characters."
4. Ensure the password contains at least one lowercase character (use a regular expression).
    Otherwise, display "Password must contain at least one lowercase character."
5. Ensure the password contains at least one uppercase character (use a regular expression).
    Otherwise, display "Password must contain at least one uppercase character."
6. Ensure the password contains at least one digit (use a regular expression).
   Otherwise, display "Password must contain at least one digit."
7. Ensure the password and confirmation password match.
   Otherwise, display "Password and confirmation password don't match."

If form validation errors exist:
Display the formErrors <div> by removing the hide class.
Display each of the associated error messages in the formErrors <div> using an unordered list. 
The error message must be displayed in the order the validation is performed, following the order specified below.
Add the error class to each <input> element with invalid input.

If no form validation errors exist:
Hide the formErrors <div> by adding the hide class.
Remove the error class from all test, email, and password <input> elements.
