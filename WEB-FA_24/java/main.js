
const customName = document.getElementById("customName");
const randomize = document.getElementById("randomize");
const story = document.getElementById("story");

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


const storyText = "One time, :insertx: went to the :inserty: to buy a :insertz: that would weigh 300 pounds. But he got distracted since it was 94 fahrenheit!";
const insertX = ["a toucan", "a zebra", "a giraffe","a hippo"];
const insertY = ["store", "park", "zoo", "record shop","train yard"];
const insertZ = ["hat", "ball", "rocket","vinyl","rock","bus"];


randomize.addEventListener("click", result);

function result() {
    let newStory = storyText;
  
 
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
  
   
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);
  
    // Replace "Bob" with the custom name if provided
    if (customName.value !== '') {
      const name = customName.value;
        newStory = newStory.replace(/Bob/g, name);
    }
  

    const uk = document.getElementById("uk").checked;
    if (uk) {
        const weight = Math.round(300 / 14) + ' stone'; // 1 stone = 14 pounds
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // F to C conversion
    
        newStory = newStory.replace(/94 fahrenheit/g, temperature);
        newStory = newStory.replace(/300 pounds/g, weight);
    }
  

    story.textContent = newStory;
}
