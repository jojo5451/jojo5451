// Select HTML elements
const titleElement = document.getElementById('comic-title');
const imageElement = document.getElementById('comic-image');
const dateElement = document.getElementById('comic-date');
const buttonElement = document.getElementById('new-comic');

// Helper: Generate random comic number between 1 and 3000
function getRandomComicNumber() {
    return Math.floor(Math.random() * 3000) + 1;
}

// Fetch xkcd comic data
async function fetchComic(comicNumber) {
    const proxyUrl = `https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`;
    try {
        const response = await fetch(proxyUrl);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();

        // Update elements with comic data
        titleElement.textContent = data.title;
        imageElement.src = data.img;
        imageElement.alt = data.alt;
        const date = `${data.month}/${data.day}/${data.year}`;
        dateElement.textContent = `Published: ${date}`;
    } catch (error) {
        console.error('Failed to fetch comic:', error);
        titleElement.textContent = 'Failed to load comic!';
        imageElement.src = '';
        dateElement.textContent = '';
    }
}

// Event listener for button
buttonElement.addEventListener('click', () => {
    const comicNumber = getRandomComicNumber();
    fetchComic(comicNumber);
});

// Load a random comic on page load
fetchComic(getRandomComicNumber());
