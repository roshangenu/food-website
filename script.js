document.addEventListener("DOMContentLoaded", () => {
  let food1s = document.getElementById("food1");
  let food2s = document.getElementById("food2");
  let food3s = document.getElementById("food3");

  let foods = document.querySelector(".right"); // Use the correct class for 'right' element

  // Set default background image to food1
  foods.style.backgroundImage = "url('media/biryani.png.png')";
  foods.style.backgroundSize = "cover"; // Ensures the image covers the container
  foods.style.backgroundPosition = "center"; // Centers the image

  food1s.addEventListener("click", () => {
      foods.style.backgroundImage = "url('media/biryani.png.png')";
      foods.style.backgroundSize = "cover"; // Ensures the image covers the container
      foods.style.backgroundPosition = "center"; // Centers the image
  });

  food2s.addEventListener("click", () => {
      foods.style.backgroundImage = "url('media/cury_with_bread.png')";
      foods.style.backgroundSize = "contain"; // Ensures the image fits within the container
      foods.style.backgroundPosition = "center"; // Centers the image
  });

  food3s.addEventListener("click", () => {
      foods.style.backgroundImage = "url('media/idli.png')";
      foods.style.backgroundSize = "contain"; // Ensures the image fits within the container
      foods.style.backgroundPosition = "center"; // Centers the image
  });

  document.getElementById("feedbackForm").addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent the default form submission
      alert("Thank you for your feedback!"); // Show the alert message
      window.location.reload(); // Refresh the page
  });
});