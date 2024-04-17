
document.addEventListener('DOMContentLoaded', function () {
  const circleElements = document.querySelectorAll('.circle');
  const squareElements = document.querySelectorAll('.square');

  circleElements.forEach(circle => {
    circle.addEventListener('mouseenter', () => {
      const pTag = circle.querySelector('p');
      pTag.classList.add('hidden');
    });
    circle.addEventListener('mouseleave', () => {
      const pTag = circle.querySelector('p');
      pTag.classList.remove('hidden');
    });
  });

  squareElements.forEach(square => {
    square.addEventListener('mouseenter', () => {
      const pTag = square.querySelector('p');
      pTag.classList.add('hidden');
    });
    square.addEventListener('mouseleave', () => {
      const pTag = square.querySelector('p');
      pTag.classList.remove('hidden');
    });
  });

});
