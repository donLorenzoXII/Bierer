document.addEventListener('DOMContentLoaded', () => {
  // Create bubble and animate it
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size between 2% and 6% of container width
    const size = Math.random() * 3 + 1;
    bubble.style.width = `${size}%`;
    bubble.style.height = `${size}%`;

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

    // script.js 
    document.getElementById('getBreweryBtn').addEventListener('click', function() { 
      window.scrollTo({ 
          top: document.body.scrollHeight, 
          behavior: 'smooth' // This makes the scrolling smooth 
      }); 
  }); 
