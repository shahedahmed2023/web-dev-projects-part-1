
The webpage allows the user to add items to a grocery list. A Clear button clears the list. The list does not clear if the page is reloaded. 

The project contains HTML, CSS, and groceries.js. The HTML contains the header tag which includes the header name(grocery list), a button tag for adding the item to the list, the order list tag which will include the list items, and a clear button to clear items. CSS file contains body tag style.
 The groceries.js file contains several completed functions:
 
 The DOMContentLoaded event handler registers click handlers for the Add and Clear buttons, calls loadList() to load items from localStorage into the groceryList   array, and calls showItem() to display the items in groceryList.
enableClearButton() enables or disables the Clear button.
showItem() displays a single item at the end of an ordered list.
addBtnClick() calls showItem() to display the item, adds the item to the groceryList array, and calls saveItem() to save the item to localStorage.
clearBtnClick() clears the groceryList array and removes all the items from the ordered list.

The JavaScript functions I added:
loadList() loads a grocery list from localStorage and returns an array containing each item if the grocery list exists in the localStorage.
An empty array is returned if localStorage does not contain a grocery list.
saveList()  save the given groceryList array to localStorage as a single comma-delimited string.
clearList() remove the grocery list from localStorage.
