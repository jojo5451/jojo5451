


function even(n) {
    return n % 2 === 0;
}
console.log(even(20));
console.log(even(1));
console.log(even(13));


let text = ["one", "two", "three"];
let paragraph = "";

function buildText(arr) {
    paragraph = ""; 
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        paragraph += arr[i] + " ";
    }
    document.getElementById("my_para").innerText = paragraph;
}


document.getElementById("button_1").addEventListener("click", function () {
    buildText(text);
});

function tellFortune(numofChildren, partnerName, geographicLocation, jobTitle) {
    let fortune = `You will be a ${jobTitle} in ${geographicLocation}, and married to ${partnerName} with ${numofChildren} kids.`;
    document.getElementById("my_id").innerHTML += `<p>${fortune}</p>`;
}
tellFortune(2, "Alex", "New York", "Engineer");
tellFortune(3, "Jamie", "Tokyo", "Designer");
tellFortune(1, "Sam", "Paris", "Chef");


function calculateDogAgeFromInput() {
    let humanAge = parseInt(prompt("Enter your dog's age in human years:"));
    if (!isNaN(humanAge)) {
        let dogAge = humanAge * 7;
        document.getElementById("my_id").innerHTML += `<p>Your doggie is ${dogAge} years old in dog years!</p>`;
    } else {
        alert("Please enter a valid number.");
    }
}


function reverseNumber(num) {
    let reversed = num.toString().split("").reverse().join("");
    document.getElementById("my_id").innerHTML += `<p>Reversed number: ${reversed}</p>`;
}


function alphabetizeString(str) {
    let sortedStr = str.split("").sort().join("");
    document.getElementById("my_id").innerHTML += `<p>Alphabetized string: ${sortedStr}</p>`;
}


function capitalizeWords(sentence) {
    let capitalized = sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    document.getElementById("my_id").innerHTML += `<p>Capitalized sentence: ${capitalized}</p>`;
}


calculateDogAgeFromInput();
reverseNumber(12345);
alphabetizeString("javascript");
capitalizeWords("hello world");
