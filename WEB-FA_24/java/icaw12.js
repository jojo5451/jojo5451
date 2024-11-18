const API_URL = 'https://catfact.ninja/fact';


async function getFact() {
  console.log("Button clicked, fetching new fact..."); 
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Network response was not ok');
    
    const data = await response.json();
    console.log("Fetched data:", data); 
    displayRes(data.fact); 
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Failed to fetch a quote. Please try again later.');
  }
}


function displayRes(quote) {
  document.getElementById('quote').textContent = quote;
}


window.addEventListener('load', getFact);


document.getElementById('quoteButton').addEventListener('click', getFact);



