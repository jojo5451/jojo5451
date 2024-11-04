
const customName = document.getElementById("customName");
const randomize = document.getElementById("randomize");
const story = document.getElementById("story");

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}


const storyText = "Once upon a time, :insertx: went to the :inserty: to buy a :insertz:.!";
const insertX = ["a dog", "a cat", "a dinosaur"];
const insertY = ["store", "park", "zoo"];
const insertZ = ["hat", "ball", "rocket"];


randomize.addEventListener("click", result);

function result() {
    let newStory = storyText;


    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
  
    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(/:inserty:/g, yItem);
    newStory = newStory.replace(/:insertz:/g, zItem);

    // Replace name if custom name is entered
    if (customName.value) {
        const name = customName.value;
        newStory = newStory.replace(/Bob/g, name);
    }

    // Check for UK option and convert values
    const uk = document.getElementById("uk").checked;
    if (uk) {
        const weight = Math.round(300 / 14) + ' stone'; // 1 stone = 14 pounds
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade'; // F to C conversion

        newStory = newStory.replace(/94 fahrenheit/g, temperature);
        newStory = newStory.replace(/300 pounds/g, weight);
    }

    // Output the final story
    story.textContent = newStory;
}
