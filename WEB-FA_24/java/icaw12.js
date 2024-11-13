const API_URL = 'https://catfact.ninja/fact';


async function getFact() {
  console.log("Button clicked, fetching new fact..."); // Debugging log
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    console.log("Fetched data:", data); // Debugging log
    displayRes(data.fact); // Adjust this if using a different API
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Failed to fetch a quote. Please try again later.');
  }
}

// Function to display the result in the paragraph
function displayRes(quote) {
  document.getElementById('quote').textContent = quote;
}

// Display a quote on page load
window.addEventListener('load', getFact);

// Attach event listener to the button to load a new fact each time it's clicked
document.getElementById('quoteButton').addEventListener('click', getFact);



