const bodyEl = document.querySelector("body");

// Function to create the floating heart
function createHeart(x, y) {
  const spanEl = document.createElement("span");
  spanEl.style.left = x + "px";
  spanEl.style.top = y + "px";
  const size = Math.random() * 50 + 30; // Random size between 30px and 80px
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";
  bodyEl.appendChild(spanEl);

  // Remove the heart after animation
  setTimeout(() => {
    spanEl.remove();
  }, 3000);
}

// Event listener for mouse movement
bodyEl.addEventListener("mousemove", (event) => {
  createHeart(event.clientX, event.clientY);
});

// Event listener for touch movement (mobile)
bodyEl.addEventListener("touchmove", (event) => {
  event.preventDefault(); // Prevent scrolling while touching
  const touch = event.touches[0];
  createHeart(touch.clientX, touch.clientY);
});
