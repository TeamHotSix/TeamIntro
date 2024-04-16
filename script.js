document.addEventListener('DOMContentLoaded', function () {
  // Get all circle_w elements
  const circleElements = document.querySelectorAll('.circle');
  const squareElements = document.querySelectorAll('.square');

  // Loop through each circle_w element
  circleElements.forEach(circle => {
    // Add event listener for mouseenter event
    circle.addEventListener('mouseenter', () => {
      // Find the p tag within the circle_w element
      const pTag = circle.querySelector('p');
      // Add hidden class to the p tag
      pTag.classList.add('hidden');
    });
    // Add event listener for mouseleave event
    circle.addEventListener('mouseleave', () => {
      // Find the p tag within the circle_w element
      const pTag = circle.querySelector('p');
      // Remove hidden class from the p tag
      pTag.classList.remove('hidden');
    });
  });

  squareElements.forEach(square => {
    // Add event listener for mouseenter event
    square.addEventListener('mouseenter', () => {
      // Find the p tag within the circle_w element
      const pTag = square.querySelector('p');
      // Add hidden class to the p tag
      pTag.classList.add('hidden');
    });
    // Add event listener for mouseleave event
    square.addEventListener('mouseleave', () => {
      // Find the p tag within the circle_w element
      const pTag = square.querySelector('p');
      // Remove hidden class from the p tag
      pTag.classList.remove('hidden');
    });
  });


});
