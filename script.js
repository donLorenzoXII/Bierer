document.addEventListener('DOMContentLoaded', () => {
  // Create bubble and animate it
  function createBubble() {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    // Random size between 2% and 6% of container width
    const size = Math.random() * 3 + 1;
    bubble.style.width = `${size}%`;
    bubble.style.height = `${size}%`;

    // Make the bubble perfectly round
    bubble.style.borderRadius = '50%';

    // Random horizontal position (0% to 100% width)
    bubble.style.left = `${Math.random() * 100}%`;

    // Random animation duration (between 4s and 8s)
    const duration = 4 + Math.random() * 4; 
    bubble.style.animationDuration = `${duration}s`;

    // Add bubble to the #liquid container
    document.getElementById('liquid').appendChild(bubble);

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

document.addEventListener('DOMContentLoaded', () => {
  // Bubble animation code remains unchanged...

  // Map reference
  let map;
  let marker;

  document.getElementById('getBreweryBtn').addEventListener('click', async () => {
    // Smooth scroll
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

    try {
      const response = await fetch('https://api.openbrewerydb.org/v1/breweries/random');
      const data = await response.json();
      const brewery = data[0];

      // Check if coordinates are available
      if (brewery.latitude && brewery.longitude) {
        const lat = parseFloat(brewery.latitude);
        const lng = parseFloat(brewery.longitude);

        // Format brewery info
        const info = `
          ${brewery.name}<br>
          ${brewery.brewery_type}<br>
          ${brewery.city}, ${brewery.state}
        `;

        document.getElementById('noResultText').innerHTML = info;

        // Show map container
        const mapContainer = document.getElementById('map');
        mapContainer.style.display = 'block';

        // Flasche auf grün zurücksetzen
        const flascheImg = document.getElementById('flasche');
        if (flascheImg) {
          flascheImg.src = 'Bilder/flasche_gruen.png';
          // Alternativ absoluter Pfad:
          // flascheImg.src = 'C:/Users/loren/OneDrive/Dokumente/School/FHGr/02_Semester 2/05_Interaktive Medien/Bierer/Bilder/flasche_gruen.png';
        }

        // Initialize or update the map
        if (!map) {
          map = L.map('map').setView([lat, lng], 13);

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
          }).addTo(map);

          marker = L.marker([lat, lng]).addTo(map);
        } else {
          map.setView([lat, lng], 13);
          marker.setLatLng([lat, lng]);
        }

        setTimeout(() => {
          map.invalidateSize();
        }, 300); // slight delay to ensure DOM is ready
      } else {
        // If no coordinates are available
        document.getElementById('noResultText').innerHTML = 'Fehler beim Laden :(<br>Probiere es doch noch einmal!';
        const mapContainer = document.getElementById('map');
        mapContainer.style.display = 'none'; // Hide map if no coordinates

        // Flasche auf braun ändern
        const flascheImg = document.getElementById('flasche');
        if (flascheImg) {
          flascheImg.src = 'Bilder/Flasche braun.png';
          // Alternativ absoluter Pfad:
          // flascheImg.src = 'C:/Users/loren/OneDrive/Dokumente/School/FHGr/02_Semester 2/05_Interaktive Medien/Bierer/Bilder/Flasche braun.png';
        }
      }
    } catch (err) {
      document.getElementById('noResultText').innerHTML = 'Fehler beim Abrufen der Brauerei.';
      console.error(err);
    }
  });
});
