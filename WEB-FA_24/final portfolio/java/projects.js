let proj;
fetch("../json/projects.json")
  .then(response => {
      return response.json();
  }).then(projects => {
    console.log(projects);
    proj = projects;
    parseData(projects);
  }).catch(err =>{
    console.log(`error ${err}`);
  })
 
  function parseData(data) {
    for (let i = 0; i < data.projects.length; i++) {
      document.getElementById("projects").innerHTML += `
        <a href="${data.projects[i].link}" target="_blank">
          <div class ="row project" id="${data.projects[i].subdomain}">
            <div class="projimg">
              <img src="${data.projects[i].image}" alt="${data.projects[i].title}">
            </div>
            <div class="description">
              <h2>${data.projects[i].title}</h2>
              <p class="subtitle">${data.projects[i].category.join(', ')}</p>
              <p>${data.projects[i].description}</p> 
            </div> </div> </a>`;
    }
  }

for (b of document.querySelectorAll("#buttons button")){
  b:addEventListener("click",e=>{
    const category = e.target.getAttribute("data-category");
    console.log(category);
    sortProjects(category);

  })
}


function sortProjects(button){
  if(button === "Clear"){
    console.log("clearing");
    for(i=0; i<proj.projects.length; i++){
      document.getElementById(proj.projects[i].subdomain).style.display = "flex";
    }
  }else if (button){
    for(i=0; i<proj.projects.length;i++){
      if(proj.projects[i].category.includes(button)== true){
        document.getElementById(proj.projects[i].subdomain).style.display = "flex";
      } else{
        document.getElementById(proj.projects[i].subdomain).style.display="none";
      }
    }
  }else{
    console.log("error, button value is undefined");
  }
}

