// Select the textarea element & h1
var input = document.querySelector("#input");
var count = document.querySelector("#count");

function wordCount() {
  // storing the input value into a variable
  var wcount = input.value.split(" ").filter((item) => {
    return item != "";
  });
  // Appending the length of the value to the h1
  count.textContent = wcount.length;
}

/* 
Tools used for this ptoject

- querySelector
- split method()
- filter method()
*/
