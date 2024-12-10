fetch("../json/projects.json")
  .then(response => response.json())
  .then(projects => {
    const projectsContainer = document.querySelector(".projects-container");
    projects.forEach(project => {
      const projectCard = `
        <div class="project-container project-card">
          <img src="${project.image}" alt="${project.title}" class="project-pic" />
          <h3 class="project-title">${project.title}</h3>
          <p class="project-details">${project.description}</p>
          <a href="${project.link}" target="_blank" class="project-link">Check it Out</a>
        </div>`;
      projectsContainer.innerHTML += projectCard;
    });
  })
  .catch(error => console.error("Error loading projects:", error));

