// Get project ID from URL
const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

document.querySelector(".carousel-control.next").addEventListener("click", () => {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % items.length;
  items[currentIndex].classList.add("active");
});

document.querySelector(".carousel-control.prev").addEventListener("click", () => {
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  items[currentIndex].classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const prevButton = document.querySelector(".carousel-control.prev");
    const nextButton = document.querySelector(".carousel-control.next");
    const carouselItems = document.querySelectorAll(".carousel-item");
  
    let currentIndex = 0;
  
    function showItem(index) {
      carouselItems.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    }
  
    prevButton.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
      showItem(currentIndex);
    });
  
    nextButton.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % carouselItems.length;
      showItem(currentIndex);
    });
  
    // Initialize carousel
    showItem(currentIndex);
  });
  



