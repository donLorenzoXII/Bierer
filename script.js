document.addEventListener('DOMContentLoaded', () => {
  // Create bubble and animate it
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size between 10px and 60px
    const size = Math.random() * 50 + 10;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random horizontal position (0% to 100% width)
    bubble.style.left = `${Math.random() * 100}%`;

    // Random animation duration (between 4s and 8s)
    const duration = 4 + Math.random() * 4; 
    bubble.style.animationDuration = `${duration}s`;

    // Add bubble to the #liquid container
    document.getElementById('liquid').appendChild(bubble);

    console.log('Bubble created:', bubble); // Debugging line

    // Remove bubble after animation ends
    setTimeout(() => {
      bubble.remove();
    }, duration * 1000); // duration in milliseconds
  }

  // Create bubbles at intervals
  setInterval(createBubble, 300);
});
