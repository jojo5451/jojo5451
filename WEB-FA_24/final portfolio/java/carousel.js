// Get project ID from URL
let currentIndex = 0;
let projectsData = [];

// Fetch JSON data
fetch("../json/projects.json")
  .then(response => response.json())
  .then(data => {
    projectsData = data.projects; 
    displayProject(currentIndex); 
  })
  .catch(error => console.error(`Error loading projects: ${error}`));


function displayProject(index) {
  const project = projectsData[index];
  const carouselContainer = document.getElementById("carousel-project");
  
  // Clear the container
  carouselContainer.innerHTML = `
    <a href="${project.link}" target="_blank">
      <div class="carousel-item">
        <div class="projimg">
          <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="description">
          <h2>${project.title}</h2>
          <p class="subtitle">${project.category.join(", ")}</p>
          <p>${project.description}</p>
        </div>
      </div>
    </a>`;
}

// Event listeners for navigation buttons
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + projectsData.length) % projectsData.length;
  displayProject(currentIndex);
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % projectsData.length;
  displayProject(currentIndex);
});
