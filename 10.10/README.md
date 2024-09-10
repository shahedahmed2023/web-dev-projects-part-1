A currency conversion calculator that parses a JSON-formatted string containing exchange rates from US dollars (USD) to several other currencies. 
The exchange data is provided by OpenExchangeRates.org.

First 1: Implement ready event handler
Created a jQuery-ready event handler that updates the options within the <select> element with ID toCurrency such that:
1. The first <option> element is: <option value="" disabled selected>Select currency</option>
2. Only the currencies listed in the rates property of the exchangeRates object appear in the dropdown with 
3. The <option> element for each currency should show the full currency name followed by the currency's abbreviation in parentheses.
4. The value for each <option> element should be the currency abbreviation
5. The allCurrencies object in the provided JavaScript template provides a mapping from all possible abbreviations to full currency name.
                                      Now Select currency dropdown  display six options

Second 2: Implement change event handler:
Created a jQuery change event handler for the select dropdown that:
1. Converts the user-entered US dollars to the selected currency using the rates listed in the exchangeRatesobject.
   Display the converted currency with two decimal digits.
2. Displays the resulting converted currency by updating the read-only <input> element with ID resultCurrency
3. Updates the associated label for resultCurrency to the selected currency's full currency name, currency abbreviation in parentheses, and colon
        Now the conversion from US dollars to the selected currency will happen as soon as the currency is selected from the dropdown menu.
   
Last Step: Implement click event handler
Created a jQuery click handler for the Update Rates button that:
1. Updates the exchangeRates object by calling JSON.parse() with the JSON string provided in the <textarea> element with ID exchangeRates
2. Select the select dropdown options and delete all options.
3. Updates the select dropdown such that only the currencies listed in the rates property of the updated exchangeRates object appear in the dropdown
3. Resets the read-only <input> element with ID resultCurrency to display "---.--"
4. Resets the associated label for resultCurrency to display "To Currency ():"
