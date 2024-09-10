A "to-do" list
The user will be able to add new items to the to-do list, click the up (↑) and down (↓) buttons to move items up and down the list, and click the done (✓) button to remove list items.
The HTML contains a label name new item, input to type in the item, and a button tag to add the item.
The CSS styles the body, order list, and span.

The todo.js file:
Ready event handler - Registers addBtnClick() as the click callback function for the Add button and calls addBtnClick() if the user hits Enter while typing a new item.
addBtnClick() - Extracts the text typed into the text box and calls addItem() to add the new item.

addItem() - Creates a list item for the newly entered item that contains the item text, and creates up, down, and done buttons. By
append $upButton, $downButton, $doneButton to $newItem to create a single <li> element containing the item text and three buttons.
Then append $newItem to the item list (<ol> element). 
Clicking the up and down buttons calls moveItem():
to move the <li> at the given fromIndex to the given toIndex.
Using the jQuery methods detach(), insertBefore(), and insertAfter() where appropriate. 
moveItem() ignores nonsensical movements, like moving the first item up or the last item down.
and clicking the done button calls removeItem(): to remove the <li> at the given index. 
 Using the jQuery remove() method to remove the appropriate <li>.
