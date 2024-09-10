// HTML for the up, down, and done buttons
const upButtonHtml = '<button class="upBtn">&uarr;</button>';
const downButtonHtml = '<button class="downBtn">&darr;</button>';
const doneButtonHtml = '<button class="doneBtn">&#x2713;</button>';

$(function() {
   $("#addBtn").on("click", addBtnClick);
   
   // Add item if user presses Enter
   $("#newItemText").on("keyup", function(event) {
      if (event.key === "Enter") {
         addBtnClick();
      }
   });
});

function addBtnClick() {
   let itemText = $("#newItemText").val().trim();

   // Don't add empty strings
   if (itemText.length !== 0) {
      addItem(itemText);

      // Clear text and put focus back in text input
      $("#newItemText").val("").focus();
   } 
}

function addItem(item) {      
   // Create a new <li> for the list
   let $newItem = $(`<li><span>${item}</span></li>`);
   
   // Up button moves item up one spot
   let $upButton = $(upButtonHtml).on("click", function() {
      let index = $(this.parentElement).index();
      moveItem(index, index - 1); 
   });
   
   // Down button moves item down one spot
   let $downButton = $(downButtonHtml).on("click", function() {
      let index = $(this.parentElement).index();
      moveItem(index, index + 1); 
   });
      
   // Add click hander for done button
   $doneButton = $(doneButtonHtml).on("click", function() {
      // Remove item from list
      let index = $(this.parentElement).index();
      removeItem(index);
   });
   
   // TODO: Complete the function
   //append the up button element on new list element
   $newItem.append($upButton);
   //append the down button element on new list element
   $newItem.append($downButton);
   //append the done button element on new list element
   $newItem.append($doneButton);
   //append the new list element on the onderlist
   $("ol").append($newItem);

}

function moveItem(fromIndex, toIndex) {
   // TODO: Complete the function
   // get all list
   let list = $("li");
   // get the list that need to move
   let $listElems = $(`li:eq(${fromIndex})`)
   // check for nonsense
   if (toIndex < 0 || toIndex >= list.length || fromIndex === toIndex) {
      return;
   }
   // if the items location index is less than moving index
   // move after
    if (fromIndex < toIndex) {

       $(`li:eq(${toIndex})`).after($listElems.detach());
      }
    else{
      // move before if items location index is greater than moving index
          $(`li:eq(${toIndex})`).before($listElems.detach());
      
   }
}

function removeItem(index) {
   // TODO: Complete the function
   // remove the index list from the order
   $(`li:eq(${index})`).remove();
}
