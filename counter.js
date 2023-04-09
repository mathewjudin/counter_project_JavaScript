// Get references to the increment and decrement buttons
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");

// Get reference to the count span
const countSpan = document.getElementById("count");

// Initialize the count to 0
let count = 0;

// Add an event listener to the increment button
 function add_count(){
  // Increment the count
  count++;

  // Update the count display
  countSpan.textContent = count;
}incrementBtn.addEventListener("click",add_count);

// Add an event listener to the decrement button
function remove_count(){
  // Decrement the count
  count--;

  // Update the count display
  countSpan.textContent = count;
}decrementBtn.addEventListener("click",remove_count);
